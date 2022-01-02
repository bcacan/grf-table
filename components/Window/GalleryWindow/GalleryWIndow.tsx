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

const GalleryWindow = () => {
  return (
    <MainWindowCSS>
      <Header>
        <div className="logo">
          <Image src="/graphics/logo-grf.svg" height={64} width={64} />
        </div>
        <Text_Title className="title">O STUDENTIMA</Text_Title>
        <div className="x-button">
          <Image src="/graphics/x-icon.svg" height={30} width={30} />
        </div>

        <div className="subtitle">
          <Text_Subtitle>galerija</Text_Subtitle>
          <hr className="line" />
        </div>
      </Header>
      <Content>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>v v
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>v v
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
        <p>sda das dsa dsa sad dsa asd asd sad asd</p>
      </Content>
      {/* <footer contentEditable>Footer Content</footer> */}
    </MainWindowCSS>
  );
};
export default GalleryWindow;
