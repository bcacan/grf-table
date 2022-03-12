import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";

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
  GalleryContent,
  SubHeader,
} from "components/Window/Window.styled";
import Gallery from "components/Gallery/Gallery";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";

const GalleryWindow = forwardRef((props: any, ref) => {
  return (
    <>
      <MainWindowCSS ref={ref}>
        <Header>
          <div className="logo">
            <Image src="/graphics/logo-grf.svg" height={64} width={64} />
          </div>
          <Text_Title className="title">O STUDENTIMA</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>

        <BottomLine />

        <SubHeader>
          <Text_Subtitle>galerija</Text_Subtitle>
        </SubHeader>
      </MainWindowCSS>

      <GalleryContent>
        <Gallery />
      </GalleryContent>
    </>
  );
});
GalleryWindow.displayName = "GalleryWindow";
export default GalleryWindow;
