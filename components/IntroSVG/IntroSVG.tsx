import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useSprings,
  useTransition,
} from "@react-spring/web";
import {
  Circle,
  CircleShadow,
  Rect1,
  Rect2,
  Rect3,
  Rect4,
  Rect5,
  Shape,
} from "components/IntroSVG/IntroElements";
import React, { useEffect, useState } from "react";

function IntroSVG() {
  //const [show, setShow] = useState(true);
  const rectsSpringRef = useSpringRef();
  const rectsTransitionRef = useSpringRef();

  const rects = [
    <Rect1 key="rect-1" />,
    <Rect2 key="rect-2" />,
    <Rect3 key="rect-3" />,
    <Rect4 key="rect-4" />,
    <Rect5 key="rect-5" />,
  ];

  const rectTransitions = useTransition(rects, {
    from: { opacity: 0, x: 25, y: 25 },
    enter: { opacity: 0.9, x: 0, y: 0 },
    leave: { opacity: 0 },
    trail: 1000 / rects.length,
    delay: 1600,
    config: { ...config.gentle, duration: 400 },
    ref: rectsTransitionRef,
  });

  const MovingRects = ({ index }: { index: number }) => {
    const styleRect = useSpring({
      from: { transform: "translate3d(0px, -2px, 0px)", opacity: 1 },
      to: { transform: "translate3d(0px, 1px,  0px)", opacity: 0.95 },

      // as we map over the envelopes, increase the delay
      // first envelope -> delay: 0ms
      // second envelope -> delay: 100ms
      // etc.
      delay: 100 + index * 10,
      config: { ...config.wobbly, duration: 400 },
      loop: { reverse: true },
      ref: rectsSpringRef,
    });

    return (
      <animated.g
        style={styleRect} // apply the animated style
      >
        {rects[index]}
      </animated.g>
    );
  };

  const animatedRects = rectTransitions(
    (styles, item, _, i) =>
      item && (
        <animated.g style={styles}>
          <MovingRects index={i} />
        </animated.g>
      ),
  );
  ////

  //
  const animatedCircle = useSpring({
    from: { strokeDasharray: 1000, opacity: 0 },
    to: [{ strokeDasharray: 500, opacity: 1 }, { opacity: 1 }],
    //delay: 0,
    config: { duration: 1500 },
  });
  const circle = (
    <animated.g style={{ ...animatedCircle }}>
      <Circle />
    </animated.g>
  );

  const circleShadowTransitions = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1500,
    config: { ...config.gentle, duration: 200 },
  });
  const circleShadow = circleShadowTransitions((styles) => (
    <animated.g style={styles}>
      <CircleShadow />
    </animated.g>
  ));

  ////
  useChain([rectsTransitionRef, rectsSpringRef], [0, 0]);
  //
  const shapeTransitions = useTransition(true, {
    from: { opacity: 0, y: 5 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0 },
    delay: 1500,
    config: { ...config.gentle, duration: 400 },
  });
  const shape = shapeTransitions((styles) => (
    <animated.g style={styles}>
      <Shape />
    </animated.g>
  ));

  ////
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      /*viewBox="0 0 147.6 164.4"*/
      viewBox="-74 -83 296 330"
    >
      <g style={{ isolation: "isolate" }}>
        {animatedRects}
        {shape}
        <text
          fill="#fff"
          fontFamily="Yantramanav-Thin, Yantramanav"
          fontSize="45.75"
          fontWeight="200"
          letterSpacing="-.06em"
          transform="translate(32.92 89.82)"
        >
          HIRO
        </text>
        <g opacity="1" data-name="krug">
          {circleShadow}
          {circle}
        </g>
      </g>
    </svg>
  );
}

function IntroLogo() {
  return (
    <div style={{ width: "35%" }}>
      <IntroSVG />
    </div>
  );
}
export default IntroLogo;
