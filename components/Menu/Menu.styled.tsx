import { animated } from "@react-spring/web";
import styled from "styled-components";

export const MenuCSS = styled(animated.div)`
  touch-action: none;

  position: absolute;
  height: 20em;
  width: 20em;

  //background-color: pink;
  clip-path: circle(49% at 53% 46%);

  .menu-background {
    position: absolute;
    inset: 0;

    background-color: black;

    clip-path: path(
      "M12.4,80.8c-16.2,18.5-12.8,90.9,0.2,113.7l-0.5-0.4l9.2,4l-0.7,0.2c44.1,102.6,210.2,102,253.5-0.9v1.1 l10.2-4.3l-0.5,0.4c13-22.8,16.4-95.2,0.2-113.7l0.6,0.4l-10.7-4.7l0.7,0.3C229.9-23.6,66.6-23.6,21.8,76.8"
    );
    transform: translate(20px, 13px) scale(0.91, 0.915);
  }
  .menu-button {
    position: absolute;
    inset: 0;

    //background: #949494;
    //opacity: 0.2;

    clip-path: path(
      "M1,1.1l0.6,60.8c0,0,94.7,15.9,68.1,107.5c-0.8,2.6,59,30,59,30l8.2-3.7c0,0,31.1-62.2,0.2-113.7 c-2.3-3.9-10-1.5-10-1.5S104.1,6.4,1,1.1z"
    );
  }

  .button-info {
    //clip-path: polygon(28% 16%, 11% 37%, 13% 67%, 33% 56%, 34% 38%, 53% 26%, 52% 8%);
    //background: blue;

    transform: translate(-137px, 10px) scale(-0.9, 0.9);
  }

  .button-gallery {
    //clip-path: polygon(78% 16%, 97% 37%, 92% 67%, 73% 56%, 71% 37%, 53% 26%, 53% 6%);
    //background: red;

    transform: translate(154px, 12px) scale(0.9);
  }

  .button-map {
    //background: green;

    transform: translate(115px, 100px) scale(1.05, -0.95) rotate(-56deg);
  }

  .closeMenu {
    position: absolute;
    inset: 0;

    //opacity: 0.2;
    //background: red;

    clip-path: circle(14% at 53% 48%);
  }
`;
