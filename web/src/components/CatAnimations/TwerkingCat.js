import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import "./App.css";

function Cat2() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Cat2.json"),
    });
  }, []);

  return (
    <div className="Cat2">
      <div
        className="container2"
        style={{ width: 400, height: 400 }}
        ref={container}
      ></div>
    </div>
  );
}

export default Cat2;
