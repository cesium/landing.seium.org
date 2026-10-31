import logo from "../../../../data/sei_logo_animation.json";
import { Lottie } from "lottie-react";

function Animation() {
  return (
    <div className="m-auto w-1/2">
      <Lottie src={logo} autoplay loop />
    </div>
  );
}

export default Animation;
