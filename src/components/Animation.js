import React from "react";
import Lottie from "react-lottie";
import logo from "../data/sei_logo_animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: logo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Animation = () => (
  <Lottie options={defaultOptions} height={300} width={350} />
);

export default Animation;
