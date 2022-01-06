//import { useState } from "react";
import { useRef, useEffect } from "react";
//import { Link } from "react-router-dom";

import { useSpring, to, animated, config } from "@react-spring/web";
import { useDrag, useHover } from "@use-gesture/react";
import { MenuCSS } from "components/Menu/Menu.styled";

export default function Menu(props: any) {
  //console.log("menu props:", props);
  const domTarget = useRef(null);
  const menuButton = useRef(null);

  const menuState = useRef(false);
  const full_Scale = 1.4;
  const small_Scale = 0.9;
  const small_Xpos = 0,
    full_Xpos = 6,
    small_Ypos = 0,
    full_Ypos = 6,
    small_Opacity = 0,
    full_Opacity = 0.8;

  const [{ scale, x, y, pos, opacity }, api] = useSpring(() => ({
    scale: small_Scale,
    x: small_Xpos,
    y: small_Ypos,
    pos: [props.pos[0] - 80, props.pos[1] - 80],
    opacity: small_Opacity,

    config: config.slow,
  }));

  useEffect(() => {
    // on-Mount effect
    //open menu
    api.start({
      to: {
        scale: menuState.current ? small_Scale : full_Scale,
        x: menuState.current ? small_Xpos : full_Xpos,
        y: menuState.current ? small_Ypos : full_Ypos,
        opacity: menuState.current ? small_Opacity : full_Opacity,
      },
      onRest: () => {
        //console.log("rest");
        menuState.current = !menuState.current;
      },
    });

    // on unMount
    return () => {
      //console.log("bye");
    };
  }, []);

  useDrag(
    ({ active, down, movement: [mx, my], touches }) => {
      if (touches >= 2) {
        api.start({
          pos: [mx, my],
          immediate: down,
        });
      }
    },
    {
      target: domTarget,
      //filterTaps: true,
      from: () => pos.get(),
      eventOptions: { passive: false },
      pointer: { touch: true },
    },
  );

  const move = to([pos], ([x, y]) => `translate(${x}px, ${y}px)`);
  const transform_m1 = to([x, y], (x, y) => `translate(${x}em, ${y}em)`);
  const transform_m2 = to([x, y], (x, y) => `translate(${-x}em, ${y}em)`);

  return (
    <MenuCSS ref={domTarget} style={{ transform: move, opacity: opacity }}>
      <animated.div ref={menuButton} style={{ scale }} className="Menu">
        <Button />
      </animated.div>

      <animated.div style={{ transform: transform_m1 }} className="menu-s">
        <span className="MenuO1" onTouchStart={(e) => props.menuClick(e, 1)} />
      </animated.div>

      <animated.div style={{ transform: transform_m2 }} className="menu-s">
        <span className="MenuO2" onTouchStart={(e) => props.menuClick(e, 2)} />
      </animated.div>
    </MenuCSS>
  );
}

function Button() {
  return <div></div>;
}
