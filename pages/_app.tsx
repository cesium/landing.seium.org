import { Geist_Mono, Geist_Pixel } from "next/font/google";
import "../styles/globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const geistPixel = Geist_Pixel({
  subsets: ["latin"],
  variable: "--font-geist-pixel",
  fallback: ["monospace"],
  adjustFontFallback: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geistMono.variable} ${geistPixel.variable} font-mono`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
