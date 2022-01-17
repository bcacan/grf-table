//import { useState } from "react";
import { useRef, useEffect } from "react";
//import { Link } from "react-router-dom";
import Image from "next/image";

import { useSpring, to, animated, config } from "@react-spring/web";
import { useDrag, useHover } from "@use-gesture/react";
import { MenuCSS } from "components/Menu/Menu.styled";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function Menu(props: any) {
  // const { menuWidth, menuHeight, menuX, menuY } =
  //   domTarget.current.getBoundingClientRect();
  const tempMenuSize = 320;

  const { height, width } = useWindowDimensions();

  const domTarget = useRef<any>(null);

  const menuState = useRef(false);
  // const full_Scale = 1.4;
  // const small_Scale = 0.9;
  // const small_Xpos = 0,
  //   full_Xpos = 6,
  //   small_Ypos = 0,
  //   full_Ypos = 6,
  //   small_Opacity = 0,
  //   full_Opacity = 0.8;

  const [propsApi, api] = useSpring(() => ({
    x: props.pos[0] - Math.floor(tempMenuSize / 2),
    y: props.pos[1] - Math.floor(tempMenuSize / 2),
    scale: 0,
    opacity: 0,

    config: config.wobbly,
  }));

  useEffect(() => {
    // on-Mount effect
    //open menu
    api.start({
      scale: 1,
      opacity: 1,

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
    ({ event, active, offset: [x, y] }) => {
      api.start({
        x: x,
        y: y,
        scale: active ? 0.8 : 1,
        // immediate: (k) => k !== "scale" && active,
        onRest: () => {
          //console.log("rest");
          menuState.current = !menuState.current;
        },
      });
    },
    {
      target: domTarget,
      from: () => [propsApi.x.get(), propsApi.y.get()],
      bounds: { left: -50, right: width - 300, top: -50, bottom: height - 300 },
      rubberband: 0.5,
      filterTaps: true,
      pointer: { touch: true },
      eventOptions: { passive: false },
      preventDefault: true,
    },
  );

  return (
    <MenuCSS
      ref={domTarget}
      // style={{ transform: move, opacity: opacity }}
      style={propsApi}
    >
      <Button />

      <div className="tempButtonInfo" onTouchStart={(e) => props.menuClick(e, 1)}></div>
      <div className="tempGalleryInfo" onTouchStart={(e) => props.menuClick(e, 2)}></div>
      <div className="tempMapInfo" onTouchStart={(e) => props.menuClick(e, 3)}></div>
    </MenuCSS>
  );
}

function Button() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* <img src="/graphics/menu/menu.svg"></img> */}
      <Image src="/graphics/menu/menu.png" layout="fill" />
    </div>
  );
}
