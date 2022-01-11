import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
} from "styles/texts";

import {
  WindowCSS,
  MainWindowCSS,
  Header,
  Content,
  TwoColumns,
  Footer,
  MenuStudij,
  VerticalText,
  MenuLines,
} from "components/Window/Window.styled";
import Map from "./Map";

const MapWindow = () => {
  return (
    <MainWindowCSS>
      <Header>
        <div className="logo">
          <Image src="/graphics/logo-grf.svg" height={64} width={64} />
        </div>
        <Text_Title className="title">MAPA</Text_Title>
        <div className="x-button">
          {/* <Image src="/graphics/x-icon.svg" height={30} width={30} /> */}
        </div>

        <div className="subtitle">
          <Text_Subtitle>Getaldićeva 2</Text_Subtitle>
          <hr className="line" />
        </div>
      </Header>
      <div style={{ paddingRight: "2.5em", paddingLeft: "4em" }}>
        <Map />
      </div>
    </MainWindowCSS>
  );
};
export default MapWindow;
