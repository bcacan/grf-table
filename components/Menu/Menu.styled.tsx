import { animated } from "@react-spring/web";
import styled from "styled-components";

export const MenuCSS = styled(animated.div)`
  position: absolute;
  height: 10em;
  width: 10em;

  /* display: flex;
    align-items: center;
    justify-content: center; */

  background-color: rgba(0, 0, 0, 0.1);

  .Menu {
    position: absolute;

    height: 5em;
    width: 5em;
    background-color: rgb(141, 16, 16, 1);
    border-radius: 50%;
    display: inline-block;
    z-index: 2;

    margin: 25%;
  }
  .menu-s {
    position: absolute;
    height: 3em;
    width: 3em;

    margin: 35%;
  }

  .MenuO1 {
    height: 3em;
    width: 3em;
    background-color: rgb(16, 141, 114, 0.7);
    border-radius: 50%;
    display: inline-block;
    z-index: 1;
  }
  .MenuO2 {
    height: 3em;
    width: 3em;
    background-color: rgb(141, 118, 16, 0.7);
    border-radius: 50%;
    display: inline-block;
    z-index: 1;
  }
`;
