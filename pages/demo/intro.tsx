import React from "react";
import type { NextPage } from "next";
import Demo1 from "components/Demo1/Demo1";
import IntroSVG from "components/IntroSVG/IntroSVG";

const Intro: NextPage = () => {
  return (
    <React.StrictMode>
      <div style={{ width: "50%", margin: "10%", padding: "5%", background: "black" }}>
        <IntroSVG />
      </div>
    </React.StrictMode>
  );
};

export default Intro;
