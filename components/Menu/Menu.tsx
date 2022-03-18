//import { useState } from "react";
import { useRef, useEffect, TouchEvent } from "react";
//import { Link } from "react-router-dom";
import Image from "next/image";

import { useSpring, to, animated, config } from "@react-spring/web";
import { useDrag, useHover } from "@use-gesture/react";
import { MenuCSS } from "components/Menu/Menu.styled";
import useWindowDimensions from "hooks/useWindowDimensions";
import MenuSVG from "components/MenuSVG/MenuSVG";

export default function Menu(props: any) {
  //
  const tempMenuSize = 320;
  const { height, width } = useWindowDimensions();
  const domTarget = useRef<any>(null);
  //

  const start_x = props.pos[0] - Math.floor(tempMenuSize / 2);
  const start_y = props.pos[1] - Math.floor(tempMenuSize / 2);
  const [propsApi, api] = useSpring(() => ({
    from: { opacity: 0, scale: 0, x: start_x, y: start_y },
    to: { opacity: 1, scale: 1, x: start_x, y: start_y },

    config: config.wobbly,
  }));

  useDrag(
    ({ event, active, offset: [x, y], cancel, touches, down, tap, first }) => {
      if (tap) {
        //@ts-ignore
        let menuChoice = parseInt(event.target!.getAttribute("data-menu"));
        if (!menuChoice) return;
        if (menuChoice === -1) removeMenu();
        else props.menuClick(event, menuChoice);
      } else {
        api.start({
          x: x,
          y: y,
          scale: active ? 0.8 : 1,
        });
      }
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

  const removeMenu = () => {
    api.start({
      scale: 0,
      opacity: 0,
      onRest: () => {
        props.removeFromArr();
      },
    });
  };

  return (
    <MenuCSS
      ref={domTarget}
      // style={{ transform: move, opacity: opacity }}
      style={propsApi}
    >
      <div className="menu-background"></div>

      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* <img src="/graphics/menu/menu.svg"></img> */}
        {/* <Image src="/graphics/menu/menu.png" layout="fill" /> */}
        <MenuSVG />
      </div>

      <div className="menu-button  button-info" data-menu={1}></div>
      <div className="menu-button  button-gallery" data-menu={2}></div>
      <div className="menu-button  button-map" data-menu={3}></div>

      <div className="closeMenu" data-menu={-1}></div>
    </MenuCSS>
  );
}
