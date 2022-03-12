import Image from "next/image";
import { FC, forwardRef, useEffect, useState } from "react";

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
  MapContent,
  SubHeader,
} from "components/Window/Window.styled";
import Map from "./Map";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";

const MapWindow = forwardRef((props: any, ref) => {
  return (
    <>
      <MainWindowCSS ref={ref}>
        <Header>
          <div className="logo">
            <Image src="/graphics/logo-grf.svg" height={64} width={64} />
          </div>
          <Text_Title className="title">MAPA</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>
        <BottomLine />
        <SubHeader>
          <Text_Subtitle>Getaldićeva 2</Text_Subtitle>
        </SubHeader>
      </MainWindowCSS>
      <MapContent>
        <Map />
      </MapContent>
    </>
  );
});
MapWindow.displayName = "MapWindow";
export default MapWindow;
