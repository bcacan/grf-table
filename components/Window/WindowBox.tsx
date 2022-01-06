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

import InfoWindow from "components/Window/InfoWindow/InfoWindow";

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
} from "./Window.styled";
import MapWindow from "./MapWindow/MapWindow";
import GalleryWindow from "components/Window/GalleryWindow/GalleryWindow";

const WindowBox = (props: any) => {
  return (
    <WindowCSS>
      {(() => {
        switch (props.type) {
          case "map":
            return <MapWindow />;
          case "gallery":
            return <GalleryWindow />;
          case "info":
            return <InfoWindow />;
          default:
            return null;
        }
      })()}
    </WindowCSS>
  );
};
export default WindowBox;
