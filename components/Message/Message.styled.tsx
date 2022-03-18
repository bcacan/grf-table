import { animated } from "@react-spring/web";
import styled from "styled-components";

export const MessageCSS = styled(animated.div)`
  will-change: transform, opacity;

  z-index: 9999;
  position: absolute;

  padding: 12px;

  background-image: url("graphics/message.svg");
  background-repeat: no-repeat;
  background-size: contain;

  .line {
    margin-top: -2px;
    padding: 0px 16px 24px 16px;
    //border: 1px solid rgba(0, 255, 255, 0.2);
    //box-shadow: 0px 0px 2px #00ffff;
    content: url("graphics/message-line.svg");
  }

  .text {
    max-width: 43ch;
    padding: 26px 102px 0px 24px;
  }
`;
