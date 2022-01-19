import { animated } from "@react-spring/web";
import styled from "styled-components";

export const MenuCSS = styled(animated.div)`
  touch-action: none;

  position: absolute;
  height: 20em;
  width: 20em;

  //background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  .tempButtonInfo {
    position: absolute;
    top: 5em;
    left: 3em;
    background: #949494;
    opacity: 0.2;
    width: 4em;
    height: 4em;
    border-radius: 100%;
  }

  .tempGalleryInfo {
    position: absolute;
    top: 5em;
    left: 14em;
    background: #949494;
    opacity: 0.2;
    width: 4em;
    height: 4em;
    border-radius: 100%;
  }

  .tempMapInfo {
    position: absolute;
    top: 14em;
    left: 8em;
    background: #949494;
    opacity: 0.2;
    width: 4em;
    height: 4em;
    border-radius: 100%;
  }

  .closeMenu {
    position: absolute;
    top: 7em;
    left: 9em;
    background: #949494;
    opacity: 0.2;
    width: 4em;
    height: 4em;
    border-radius: 100%;
  }
`;
