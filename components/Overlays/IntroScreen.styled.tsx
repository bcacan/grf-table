import styled from "styled-components";
import { animated } from "@react-spring/web";

export const IntroScreenCSS = styled(animated.div)`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;

  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  z-index: 1;

  display: grid;
  place-items: center;
`;
