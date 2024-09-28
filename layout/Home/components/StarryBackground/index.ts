import { useEffect } from "react";
import style from "./style.module.css";

const StarryBackground = () => {
  useEffect(() => {
    const addStar = () => {
      const s = document.createElement("div");
      s.className = style.star;
      s.style.setProperty("--size", Math.random() * 10 + 3 + "vmin");
      s.style.left = Math.floor(Math.random() * 100) + "%";
      s.style.top = Math.floor(Math.random() * 100) + "%";
      s.onanimationend = function () {
        s.remove();
      };
      document.body.appendChild(s);
    };

    const intervalId = setInterval(addStar, 50);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default StarryBackground;
