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

import GalleryWindow from "components/Window/GalleryWindow/GalleryWIndow";
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

const Window = () => {
  return (
    <WindowCSS>
      {/* <InfoWindow />
      <GalleryWindow /> */}

      <MapWindow />
    </WindowCSS>
  );
};
export default Window;
