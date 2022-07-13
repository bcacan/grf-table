import React, { useEffect, useState } from "react";
import Window from "components/Window/WindowBox";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import LandingScreen from "components/LandingScreen/LandingScreen";
import { useOnIdle } from "hooks/idleTimerHooks";
import Screensaver from "components/Overlays/Screensaver";
import IntroScreen from "components/Overlays/IntroScreen";
import EdgeText from "components/Overlays/EdgeText";
import AnimBackground from "components/Overlays/AnimBackground";
import PreloadHead from "components/PreloadHead";
import DeviceDetector from "components/DeviceDetector/DeviceDetector";

const Table: NextPage = () => {
  //Screensaver
  const hideScreensaver = () => {
    setShowSS(false);
    //console.log("hiding ss");
  };
  const showScreensaver = () => {
    setShowSS(true);
    //console.log("Showing ss");
  };

  useOnIdle({
    debounce: 500,
    idleTimeout: 300000,
    onIdle: /*showScreensaver*/ () => {
      window.location.reload();
    },
    onAction: hideScreensaver,
    events: [
      //"mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mouseWheel",
      "mousedown",
      //"visibilitychange",
      "touchmove",
    ],
  });

  const [showSS, setShowSS] = useState(true);
  /////

  // Disable right click (for ux)
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <React.StrictMode>
      <PreloadHead />
      <DeviceDetector />

      <AnimBackground />
      <EdgeText />
      <LandingScreen />

      <IntroScreen show={showSS} />
    </React.StrictMode>
  );
};

export default Table;
