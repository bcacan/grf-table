import MenuSVG from "components/MenuSVG/MenuSVG";
import Screensaver from "components/Screensaver/Screensaver";
import { useOnIdle } from "hooks/idleTimerHooks";
import React, { useState } from "react";

function Icon() {
  const showScreensaver = () => {
    setShowSS(false);
    console.log("Showing ss");
  };
  const hideScreensaver = () => {
    setShowSS(true);
    console.log("hiding ss");
  };

  useOnIdle({
    debounce: 500,
    idleTimeout: 10000,
    onIdle: hideScreensaver,
    onAction: showScreensaver,
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
    <div style={{ width: "100%", height: "100%" }}>
      {showSS && <Screensaver />}
      <MenuSVG />
    </div>
  );
}

export default Icon;
