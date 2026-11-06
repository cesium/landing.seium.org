import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  ballCount,
  blur,
  colorBottom,
  colorTop,
  fragmentShader,
  haloColor,
  haloStrength,
  haloWidth,
  vertexShader,
} from "./shader";

const baseRadius = 0.225;

const speed = 0.6;
const staticFrameTime = 0;

/** Rest grid. `spread` pulls the grid towards the centre (1 = edge to edge). */
const landscape = { columns: 4, rows: 3, spread: 1 };
const portrait = { columns: 2, rows: 4, spread: 0.8 };

const maxPixelCount = 1920 * 1080;

/**
 * Integer hash to [0, 1]. Deterministic per index, so every visit gets the
 * same ball sizes and speeds. Lives in JS because the GLSL version broke on
 * GPUs with 16-bit ints (all balls got the same value).
 */
function hash(i: number) {
  let n = i >>> 0;
  n = ((n << 13) ^ n) >>> 0;
  n =
    (Math.imul(n, (Math.imul(Math.imul(n, n), 15731) + 789221) >>> 0) +
      1376312589) >>>
    0;
  return (n & 0x7fffffff) / 0x7fffffff;
}

/** Radius varies +-30%. Each axis drifts at its own frequency and phase. */
const balls = Array.from({ length: ballCount }, (_, i) => ({
  radius: baseRadius * (1 + 0.3 * Math.sin(i * 2.3)),
  frequencyX: 0.25 + 0.35 * hash(i),
  frequencyY: 0.25 + 0.35 * hash(i + 100),
  phaseX: 2 * Math.PI * hash(i + 200),
  phaseY: 2 * Math.PI * hash(i + 300),
}));

/** Rest position on the grid, -1..1 per axis. Rows are staggered. */
function getHomePosition(i: number, grid: typeof landscape) {
  const column = i % grid.columns;
  const row = Math.floor(i / grid.columns);
  const stagger = row % 2 === 1 ? 0.25 : -0.25;
  return {
    x: ((column + 0.5 + stagger) / grid.columns) * 2 - 1,
    y: ((row + 0.5) / grid.rows) * 2 - 1,
  };
}

/** Home position + drift at `time`. -1..1 per axis, y up. */
function getBallCentre(i: number, grid: typeof landscape, time: number) {
  const ball = balls[i];
  const home = getHomePosition(i, grid);
  const driftX = 0.2 * Math.sin(time * ball.frequencyX + ball.phaseX);
  const driftY = 0.2 * Math.sin(time * ball.frequencyY + ball.phaseY);
  return {
    x: home.x * grid.spread + driftX,
    y: home.y * grid.spread + driftY,
  };
}

/** Fills `target` in the `u_balls` layout (see the shader), for a canvas of width × height. */
function writeBalls(
  target: Float32Array,
  time: number,
  width: number,
  height: number,
) {
  const short = Math.min(width, height);
  const grid = height > width ? portrait : landscape;
  balls.forEach((ball, i) => {
    const centre = getBallCentre(i, grid, time);
    target[3 * i] = (centre.x * width) / (2 * short);
    target[3 * i + 1] = (centre.y * height) / (2 * short);
    target[3 * i + 2] = ball.radius;
  });
}

/**
 * CSS mask for the static fallback: one radial gradient per ball, fading out
 * over ±blur around `radius + edge`. vmin = short side, same unit as the
 * shader. No smooth min in CSS, so touching balls stay separate circles.
 */
function getBallsMask(grid: typeof landscape, edge: number) {
  return balls
    .map((ball, i) => {
      const { x, y } = getBallCentre(i, grid, staticFrameTime);
      const position = `${(50 * (1 + x)).toFixed(2)}% ${(50 * (1 - y)).toFixed(2)}%`;
      const opaqueUntil = (100 * (ball.radius + edge - blur)).toFixed(2);
      const clearFrom = (100 * (ball.radius + edge + blur)).toFixed(2);
      return `radial-gradient(circle at ${position}, #000 ${opaqueUntil}vmin, transparent ${clearFrom}vmin)`;
    })
    .join(",");
}

/** The shader's `max(haloColor * haloStrength, gradient)` for one gradient stop. */
function getHaloColor(color: number[]) {
  return color.map((channel, i) =>
    Math.round(Math.max(haloColor[i] * haloStrength, channel)),
  );
}

function getLayerStyle(
  bottom: number[],
  top: number[],
  mask: string,
): CSSProperties {
  return {
    background: `linear-gradient(to top, rgb(${bottom}), rgb(${top}))`,
    // Chrome < 120 only supports the prefixed one.
    WebkitMaskImage: mask,
    maskImage: mask,
  };
}

/**
 * Static fallback: a halo layer under a body layer, per orientation.
 * Tailwind's `portrait:`/`landscape:` shows the matching pair.
 */
const staticLayers = [
  { grid: landscape, className: "portrait:hidden" },
  { grid: portrait, className: "landscape:hidden" },
].flatMap(({ grid, className }) => [
  {
    className,
    style: getLayerStyle(
      getHaloColor(colorBottom),
      getHaloColor(colorTop),
      getBallsMask(grid, haloWidth),
    ),
  },
  {
    className,
    style: getLayerStyle(colorBottom, colorTop, getBallsMask(grid, 0)),
  },
]);

/** Doesn't check COMPILE_STATUS: a failed compile also fails the link, which `createProgram` checks. */
function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

/** Returns null on failure (driver bug, lost context). Logs the GL info logs. */
function createProgram(gl: WebGLRenderingContext) {
  const program = gl.createProgram();
  const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
  if (!program || !vertex || !fragment) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.bindAttribLocation(program, 0, "position");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    if (!gl.isContextLost()) {
      console.warn(
        "Metaballs: shader failed, showing the static frame instead.",
        gl.getShaderInfoLog(vertex),
        gl.getShaderInfoLog(fragment),
        gl.getProgramInfoLog(program),
      );
    }
    gl.deleteProgram(program);
    return null;
  }
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  return program;
}

function Metaballs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isShaderUnavailable, setIsShaderUnavailable] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
      // Refuse software WebGL (e.g. SwiftShader): it'd run on the CPU every frame.
      failIfMajorPerformanceCaveat: true,
    });
    if (!canvas || !gl) {
      setIsShaderUnavailable(true);
      return;
    }

    const centres = new Float32Array(3 * ballCount);
    // Random start so each visit shows a different arrangement.
    let time = Math.random() * 1000;
    let lastNow: number | undefined;
    let frame = 0;
    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    let resolutionLocation: WebGLUniformLocation | null = null;
    let ballsLocation: WebGLUniformLocation | null = null;

    /** Creates or Recreates GL resources. Also runs after a context restore. */
    function setup() {
      program = createProgram(gl);
      if (!program) return false;
      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      // One triangle bigger than the viewport, so it covers every pixel.
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW,
      );
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.useProgram(program);
      resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      ballsLocation = gl.getUniformLocation(program, "u_balls");
      return true;
    }

    function draw() {
      if (!program) return;
      const width = gl.drawingBufferWidth;
      const height = gl.drawingBufferHeight;
      writeBalls(centres, time, width, height);
      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolutionLocation, width, height);
      gl.uniform3fv(ballsLocation, centres);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function loop(now: number) {
      // Cap the step at 100ms so coming back to a hidden tab doesn't jump.
      time += (Math.min(now - (lastNow ?? now), 100) / 1000) * speed;
      lastNow = now;
      draw();
      frame = requestAnimationFrame(loop);
    }

    function start() {
      const isReady = setup();
      setIsShaderUnavailable(!isReady);
      if (isReady) frame = requestAnimationFrame(loop);
    }

    // GPU reset, memory pressure, iOS backgrounding... preventDefault() is
    // what lets the browser fire `webglcontextrestored` later.
    function handleContextLost(event: Event) {
      event.preventDefault();
      cancelAnimationFrame(frame);
      program = null;
      setIsShaderUnavailable(true);
    }

    // Observes the canvas, not the window: they differ while iOS hides its
    // toolbar. Setting width/height clears the buffer, so redraw right away.
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const scale = Math.min(1, Math.sqrt(maxPixelCount / (width * height)));
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      draw();
    });

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", start);
    observer.observe(canvas);
    start();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", start);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen"
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full ${isShaderUnavailable ? "invisible" : ""}`}
      />
      {isShaderUnavailable &&
        staticLayers.map((layer, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${layer.className}`}
            style={layer.style}
          />
        ))}
    </div>
  );
}

export default Metaballs;
