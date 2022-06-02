import { animated } from "@react-spring/web";
import styled from "styled-components";

export const WindowCSS = styled(animated.div)`
  /* width: 1280px;
  height: 800px;
  background: ${(props) => props.theme.colors.background}; */
  /* width: 100%;
  height: 100%;
  position: relative; */
`;

export const MainWindowCSS = styled(WindowCSS)<any>`
  width: ${(props) => props.theme.const.window_width}px;
  height: ${(props) => props.theme.const.window_smallHeight}px;
  background: ${(props) => props.theme.colors.background};

  //  padding: 2.875em 8.375em 1.12em 8.125em;
  padding: 3.8% 10.3% 4.2% 10.2%;

  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.4);

  touch-action: none;
`;

export const Header = styled.header`
  margin-left: 1em;
  margin-bottom: 2em;

  display: grid;
  grid-template-columns: 0.1fr auto 0.1fr 0.1fr;
  grid-template-rows: 1fr;
  gap: 0 0.1em;
  grid-auto-flow: row;
  grid-template-areas: "logo title grid-arrows-button grid-x-button";

  .logo {
    justify-self: center;
    align-self: center;
    grid-area: logo;

    /* width: 4em;
    height: auto; */
  }

  .title {
    justify-self: start;
    align-self: center;
    grid-area: title;

    margin-left: 1.4em;
  }

  .grid-arrows-button {
    justify-self: center;
    align-self: center;
    grid-area: grid-arrows-button;
    width: 2em;
    height: 2em;
  }
  .grid-x-button {
    justify-self: end;
    align-self: center;
    grid-area: grid-x-button;
    width: 2em;
    height: 2em;
  }

  .grid-header-button {
    justify-self: end;
    align-self: center;
    grid-area: grid-x-button;
    width: 2em;
    height: 2em;
  }
`;

export const SubHeader = styled.div`
  padding-top: 1.8em;
  text-align: right;
`;

export const ScrollBar = styled(animated.main)<any>`
  padding-right: 2em;

  overflow: auto;

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 11px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 8.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey;
  border-radius: 10px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    box-shadow: inset -4px -4px 4px 3px rgba(0, 255, 255, 0.3);
    border-radius: 8.5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const Content = styled(ScrollBar)`
  width: 100%;
  justify-self: end;

  margin-top: 3em;
`;

export const InfoContent = styled(ScrollBar)`
  width: 80%;
  height: ${(props) => props.theme.colors.info_content_smallHeight};

  position: absolute;
  top: ${(props) => props.theme.const.info_content_smallTop};
  right: 8em;

  border: 1px solid ${(props) => props.theme.colors.contentBorder};
`;

export const GalleryContent = styled(ScrollBar)`
  position: absolute;
  top: 27.9%;
  left: 10.2%;

  width: 80%;
  height: 66%;

  border: 1px solid ${(props) => props.theme.colors.contentBorder};
`;

export const MapContent = styled.div`
  position: absolute;
  top: 27.9%;
  left: 10.2%;

  width: 80%;
  height: 66%;

  border: 1px solid ${(props) => props.theme.colors.contentBorder};
`;

export const TwoColumns = styled.div`
  display: flex;
  width: 100%;

  div {
    flex-grow: 1;

    margin-left: 2.5em;
    text-align: justify;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 80%;

  margin-bottom: 2.5%;

  display: grid;
  grid-template-columns: 0.15fr auto 0.5fr;
  //grid-template-rows: 1fr 0.5fr;
  gap: 0 2em;
  grid-auto-flow: row;
  grid-template-areas: "logo text text2";

  .logo {
    justify-self: center;
    align-self: center;
    grid-area: logo;
  }

  .text {
    justify-self: start;
    align-self: center;
    grid-area: text;
  }

  .text2 {
    justify-self: end;
    align-self: center;
    grid-area: text2;
  }
`;

export const MenuStudij = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;

  margin-right: 18%;

  > * {
    padding: 0.4em;
  }
  > :first-child {
    align-self: center;
  }
  // .flex-item:nth-child(1) {
  //   -webkit-order: 0;
  //   -ms-flex-order: 0;
  //   order: 0;
  //   -webkit-flex: 0 1 auto;
  //   -ms-flex: 0 1 auto;
  //   flex: 0 1 auto;
  //   -webkit-align-self: auto;
  //   -ms-flex-item-align: auto;
  //   align-self: auto;
  //   }

  // .flex-item:nth-child(2) {
  //   -webkit-order: 0;
  //   -ms-flex-order: 0;
  //   order: 0;
  //   -webkit-flex: 0 1 auto;
  //   -ms-flex: 0 1 auto;
  //   flex: 0 1 auto;
  //   -webkit-align-self: auto;
  //   -ms-flex-item-align: auto;
  //   align-self: auto;
  //   }

  // .flex-item:nth-child(3) {
  //   -webkit-order: 0;
  //   -ms-flex-order: 0;
  //   order: 0;
  //   -webkit-flex: 0 1 auto;
  //   -ms-flex: 0 1 auto;
  //   flex: 0 1 auto;
  //   -webkit-align-self: auto;
  //   -ms-flex-item-align: auto;
  //   align-self: auto;
  // }
`;

export const VerticalText = styled.span`
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
`;

export const MenuLines = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 7em;

  margin-top: -4em;
  margin-left: 10em;
  margin-right: 0em;

  hr {
    margin: 0;
    height: 1px;
    border: 1px solid #000000;
    box-shadow: 0px 4px 2px #ffffff;
  }
  > :first-child {
    width: 90%;
    text-align: right;
  }
  > :last-child {
    width: 24%;
    margin-right: 2%;
  }
`;

export const PageMenu = styled.div`
  margin-left: 6em;
  margin-top: 3em;

  justify-self: end;
  align-self: center;
  grid-area: 2 / 2 / 3 / 4;
  width: 100%;

  nav {
    span {
      cursor: pointer;

      position: relative;
      padding: 0.625rem;
      margin-right: 4rem;
    }

    .tab1 {
      top: 0.7em;
      left: -0.8em;
    }
    .tab2 {
      top: 1.4em;
      left: -3em;
    }
    .tab3 {
      top: 2.1em;
      left: -5em;
    }
    .active-tab {
      color: ${(props) => props.theme.colors.cyan};
    }
  }

  .page-label-1,
  .page-label-2 {
    ::after {
      content: "";
      position: absolute;
      bottom: -3rem;
      left: -0.2rem;
      right: 0;
      height: 60px;
      background-image: url(/graphics/tab-underline.svg);
      background-repeat: no-repeat;
    }
  }

  .active-page {
    font-weight: 800;

    &.page-label-2 {
      ::after {
        content: "";
        position: absolute;
        bottom: -3rem;
        left: -0.2em;
        right: 0;
        height: 60px;
        width: 636px;
        background-image: url(/graphics/tab-underline-step-1.svg),
          url(/graphics/tab-underline-step-2.svg), url(/graphics/tab-underline-step-3.svg);
        background-repeat: no-repeat;
        background-position: 1px 0px, 119px 5px, 100px 5px;
      }
    }
  }
`;
