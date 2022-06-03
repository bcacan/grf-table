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
  PageMenu,
} from "components/Window/Window.styled";
import Gallery from "components/Gallery/Gallery";
import { BottomLine } from "components/Window/BottomLine.styled";
import { ArrowsButton, CloseButton } from "components/Window/Buttons";

import { GalleryText } from "content/texts";
import { config, useSpring } from "@react-spring/web";
import { theme } from "styles/theme";

const GalleryWindow = forwardRef((props: any, ref) => {
  const [page, setPage] = useState(1);

  const [pageContent, setPageContent] = useState(<></>);

  const [winStyle, winStyleApi] = useSpring(() => ({
    height: theme.const.window_smallHeight,
    config: config.gentle,
  }));

  const [contentStyle, contentStyleApi] = useSpring(() => ({
    height: theme.const.info_content_smallHeight,
    top: theme.const.info_content_smallTop,
    config: config.default,
  }));

  useEffect(() => {
    switch (page) {
      case 1:
        setPageContent(
          <GalleryContent style={contentStyle}>
            <Gallery />
          </GalleryContent>,
        );
        break;
      case 2:
        setPageContent(
          <GalleryContent>
            <Videos />
          </GalleryContent>,
        );
        break;
      default:
        break;
    }
  }, [page]);

  return (
    <>
      <MainWindowCSS ref={ref} style={winStyle}>
        <Header>
          <div className="logo">
            <Image src="/graphics/logo-grf.svg" height={64} width={64} />
          </div>
          <Text_Title className="title">{GalleryText.title}</Text_Title>

          <ArrowsButton />
          <CloseButton />
        </Header>

        <BottomLine />
        <PageMenu>
          <nav>
            <a onTouchStart={(e) => setPage(1)}>
              <Text_Subtitle className={`page-label-1 ${page == 1 && "active-page"}`}>
                Foto
              </Text_Subtitle>
            </a>
            <a onTouchStart={(e) => setPage(2)}>
              <Text_Subtitle className={`page-label-Video ${page == 2 && "active-page"}`}>
                Video
              </Text_Subtitle>
            </a>
          </nav>
        </PageMenu>
        {/* <SubHeader>
          <Text_Subtitle>{GalleryText.subtitle}</Text_Subtitle>
        </SubHeader> */}
      </MainWindowCSS>

      {pageContent}
    </>
  );
});
GalleryWindow.displayName = "GalleryWindow";
export default GalleryWindow;

const Videos = () => {
  return (
    <>
      <video
        width={"24%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video1.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"24%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video2.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"26%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video3.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"26%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video4.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
