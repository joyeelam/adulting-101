import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import "./App.css";

function Cat3() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./smol.json"),
    });
  }, []);

  return (
    <div className="Cat2">
      <div
        className="container2"
        style={{ width: 380, height: 380 }}
        ref={container}
      ></div>
    </div>
  );
}

export default Cat3;
