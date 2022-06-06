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
    width: theme.const.window_width,
    config: config.gentle,
  }));

  const [contentStyle, contentStyleApi] = useSpring(() => ({
    height: "66%",
    top: theme.const.info_content_smallTop,
    config: config.default,
  }));

  useEffect(() => {
    switch (page) {
      case 1:
        winStyleApi.start({
          height: theme.const.window_smallHeight,
          width: theme.const.window_width,
        });
        contentStyleApi.start({
          top: theme.const.info_content_smallTop,
        });
        setPageContent(
          <GalleryContent style={contentStyle}>
            <Gallery />
          </GalleryContent>,
        );
        break;
      case 2:
        winStyleApi.start({
          height: theme.const.window_smallHeight * 0.8,
          width: theme.const.window_width * 1.3,
        });
        contentStyleApi.start({
          top: "18em",
        });
        setPageContent(
          <GalleryContent style={contentStyle}>
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
        {pageContent}
      </MainWindowCSS>
    </>
  );
});
GalleryWindow.displayName = "GalleryWindow";
export default GalleryWindow;

const Videos = () => {
  return (
    <div style={{ display: "flex", columnGap: "0.5em" }}>
      <video
        width={"20%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/new/Video1.mp4"} type="video/mp4" />
      </video>
      <video
        width={"20%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/new/Video2.mp4"} type="video/mp4" />
      </video>
      <video
        width={"20%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/new/Video4.mp4"} type="video/mp4" />
      </video>
      <video
        width={"20%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/new/Video5.mp4"} type="video/mp4" />
      </video>
      <video
        width={"20%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/new/Video6.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};
