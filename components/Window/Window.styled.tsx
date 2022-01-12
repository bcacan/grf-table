import styled from "styled-components";

export const WindowCSS = styled.div`
  /* width: 1280px;
  height: 800px;
  background: ${(props) => props.theme.colors.black}; */
  /* width: 100%;
  height: 100%;
  position: relative; */
`;

export const MainWindowCSS = styled(WindowCSS)<any>`
  width: 1280px; //for padding% in mainwindowcss
  height: ${(props) => (props.higher ? "1100px" : "800px")};
  background: ${(props) => props.theme.colors.black};

  display: grid;
  grid-template-rows: auto 1fr;

  //  padding: 2.875em 8.375em 1.12em 8.125em;
  padding: 3.6% 10.5% 4.4% 10.16%;

  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.4);
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 0.1fr auto 0.1fr;
  grid-template-rows: 1fr 0.5fr;
  gap: 1em 4em;
  grid-auto-flow: row;
  grid-template-areas:
    "logo title x-button"
    ". subtitle subtitle";

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
  }

  .x-button {
    justify-self: end;
    align-self: center;
    grid-area: x-button;
    width: 2em;
    height: 2em;
  }

  .subtitle {
    justify-self: end;
    align-self: center;
    grid-area: subtitle;

    padding-right: 2.5em;
    text-align: right;
    width: 80%;
  }

  .line {
    /* justify-self: end;
    align-self: center;
    grid-area: 2 / 2 / 3 / 4; */
    width: 100%;
    border: 1px solid #000000;
    box-shadow: 0px 4px 2px #ffffff;

    margin-top: 0px;
    margin-bottom: 0.8em;
  }

  .menu {
    justify-self: end;
    align-self: center;
    grid-area: 2 / 2 / 3 / 4;
    width: 100%;

    nav {
      span {
        cursor: pointer;

        padding: 0.1em 0.5em;
        margin-left: 4rem;
      }
    }

    .active {
      font-weight: 800;
      box-shadow: inset 0 -0.05em cyan, inset 0 -0.1em white;

      :after {
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  justify-self: end;

  overflow: auto;

  margin-top: 3em;

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

export const TwoColumns = styled.div`
  display: flex;
  width: 100%;

  div {
    flex-grow: 1;

    margin-right: 2.5em;
    text-align: justify;
  }
`;

export const Footer = styled.footer`
  margin-top: 1.25em;
  margin-bottom: -1em;
  display: grid;
  grid-template-columns: 0.1fr auto 0.5fr;
  //grid-template-rows: 1fr 0.5fr;
  gap: 1em 4em;
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
