import { animated, config, useTransition } from "@react-spring/web";
import IntroLogo from "components/IntroSVG/IntroSVG";
import { IntroScreenCSS } from "components/Overlays/IntroScreen.styled";

function IntroScreen({ show }: { show: boolean }) {
  const transitions = useTransition(show, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.gentle, duration: 600 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <IntroScreenCSS style={styles}>
          <IntroLogo />
        </IntroScreenCSS>
      ),
  );
}
export default IntroScreen;
