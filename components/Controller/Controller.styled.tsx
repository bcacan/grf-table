import { animated } from "@react-spring/web";
import styled from "styled-components";

export const ControllerCSS = styled(animated.div)`
  touch-action: none;

  user-select: none;
  -webkit-user-select: none;

  position: absolute;
  display: inline-block;
  /* inset: 5em; */

  .Box {
    background-color: rgba(57, 209, 236, 0.267);
    width: 6em;
    height: 12em;
  }

  .shadow {
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
  }

  .UserBar {
    top: 32px;
    left: 15px;
    width: 90%;
    display: block;
    position: relative;
    z-index: 2;
    /* background-color: rgba(255, 255, 255, 0.5); */
    color: white;
  }

  .ControllerBar {
    display: inline-block;
    color: white;
    /* background-color: rgba(0, 0, 0, 0.8); */

    padding: 0.4em;
    font-size: smaller;
  }
  .ControllerBar-on {
    background-color: green;
  }
  .ControllerBar-off {
    background-color: red;
  }
`;
