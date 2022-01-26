import React from "react";
import type { NextPage } from "next";
import Demo1 from "components/Demo1/Demo1";

const Demo: NextPage = () => {
  return (
    <React.StrictMode>
      <Demo1 />
      <Demo1 />
      <Demo1 />
    </React.StrictMode>
  );
};

export default Demo;
