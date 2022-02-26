import MenuSVG from "components/MenuSVG/MenuSVG";
import { useOnIdle } from "hooks/idleTimerHooks";
import React, { useState } from "react";

function Icon() {
  const showControls = () => {
    setShowSS(false);
    console.log("Showing controls");
  };
  const hideControls = () => {
    setShowSS(true);
    console.log("hiding controls");
  };

  useOnIdle({
    debounce: 500,
    idleTimeout: 1000,
    onIdle: hideControls,
    onAction: showControls,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mouseWheel",
      "mousedown",
      "visibilitychange",
    ],
  });

  const [showSS, setShowSS] = useState(false);

  return (
    <div
      style={{ background: showSS ? "white" : "black", width: "100%", height: "100%" }}
    >
      <MenuSVG />
    </div>
  );
}

export default Icon;
