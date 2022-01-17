import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
} from "styles/texts";

import InfoWindow from "components/Window/InfoWindow/InfoWindow";
import GalleryWindow2 from "components/Window/GalleryWindow/GalleryWindow2";

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

const WindowBox = forwardRef((props: any, ref) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case "map":
            return <MapWindow ref={ref} content={props.content} />;
          case "gallery":
            return <GalleryWindow2 ref={ref} content={props.content} />;
          case "info":
            return <InfoWindow ref={ref} content={props.content} />;
          default:
            return null;
        }
      })()}
    </>
  );
});
export default WindowBox;
