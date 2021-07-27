import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import "./App.css";

function Cat4() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./CoffeeCat.json"),
    });
  }, []);

  return (
    <div className="Cat4">
      <div
        className="container2"
        style={{ width: 100, height: 100 }}
        ref={container}
      ></div>
    </div>
  );
}

export default Cat4;
