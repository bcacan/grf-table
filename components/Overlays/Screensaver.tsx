import { config, useTransition } from "@react-spring/web";
import { ScreensaverCSS } from "components/Overlays/Screensaver.styled";

function Screensaver({ show }: { show: boolean }) {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.gentle, duration: 600 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <ScreensaverCSS style={styles}>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          {/* <div id="title">
          <span>PURE CSS</span>
          <br />
          <span>PARALLAX PIXEL STARS</span>
        </div> */}
        </ScreensaverCSS>
      ),
  );
}
export default Screensaver;
