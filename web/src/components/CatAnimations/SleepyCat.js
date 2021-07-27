import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import '../WalkingCat.css';

function Cat() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./office.json"),
    });
  }, []);

  return (
    <div className="Cat">
      <div
        className="container"
        style={{ width: 400, height: 400 }}
        ref={container}
      ></div>
    </div>
  );
}


export default Cat;
