import { useSpring, to, animated, config } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ControllerCSS } from "components/Controller/Controller.styled";
import { useEffect, useState, useRef, forwardRef } from "react";
import Image from "next/image";
import WindowBox from "components/Window/WindowBox";
import { MainWindowCSS } from "components/Window/Window.styled";
import useWindowDimensions from "hooks/useWindowDimensions";
import { BottomLine } from "components/Window/BottomLine.styled";
import { theme } from "styles/theme";

export default function Controller(props: any) {
  const winW = theme.const.window_width;
  const winH = theme.const.window_smallHeight;

  const { height, width } = useWindowDimensions(); // used in Bounds calc?

  const domTarget = useRef<any>(null);

  const pinchColor = "rgba(255, 255, 0, 0.4)";
  const dragColor = "rgba(0, 255, 255, 0.4)";
  const transColor = "rgba(0, 0, 0, 0)";

  const [controllerApi, api] = useSpring(() => ({
    x: props.pos[0] - Math.floor(winW / 2),
    y: props.pos[1] - Math.floor(winH / 2),
    scale: 0,
    rotateZ: 0,
    opacity: 0,

    border: "2px solid transparent",
    borderColor: transColor,

    config: { mass: 0.3, tension: 200, friction: 10 },
  }));

  useEffect(() => {
    // on-Mount effect
    //open menu
    api.start({
      scale: theme.const.window_startScale,
      opacity: 1,
    });

    // on unMount
    return () => {
      //console.log("bye");
    };
  }, []);

  useGesture(
    {
      onDrag: ({
        pinching,
        event,
        tap,
        active,
        first,
        offset: [x, y],
        touches,
        cancel,
      }) => {
        // api.start({
        //   borderColor: active ? dragColor : "black",
        // });
        //if (touches != 1) cancel();

        if (tap) {
          let windowBtn = parseInt(
            //@ts-ignore
            event.target.parentNode.parentNode.getAttribute("data-window"),
          );

          if (!windowBtn) return;
          if (windowBtn === -1) closeWin(event);
        }
        if (pinching) return cancel();
        api.start({
          x: x,
          y: y,

          borderColor: active ? dragColor : "black",
        });
      },
      onPinch: ({
        active,
        first,
        movement: [ms],
        offset: [s, a],
        origin: [ox, oy],
        memo,
        touches,
        cancel,
      }) => {
        if (first) {
          const { width, height, x, y } = domTarget.current.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [controllerApi.x.get(), controllerApi.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({
          scale: s * theme.const.window_startScale,
          rotateZ: a,
          x: x,
          y: y,

          borderColor: active ? pinchColor : "black",
        });

        return memo;
      },
    },
    {
      target: domTarget,
      // enabled: onOff,
      eventOptions: { passive: false },
      enabled: true,

      drag: {
        from: () => [controllerApi.x.get(), controllerApi.y.get()],
        bounds: (res) => {
          let tempScale = controllerApi.scale.get();

          //let test = 10 + (winW - winW * tempScale) - 950;
          //let test = winW * tempScale * tempScale - winW * tempScale;
          let boundLeft = -150 + winW * (tempScale - 1) * tempScale;
          let boundRight = width - winW * tempScale + winW * (tempScale - 1) * tempScale;
          let boundTop = -150 + winH * (tempScale - 1) * tempScale;
          let boundBot = height - winH * tempScale + winH * (tempScale - 1) * tempScale;

          return {
            left: boundLeft,
            right: boundRight,
            top: boundTop,
            bottom: boundBot,
          };
        },
        rubberband: 0.3,
        filterTaps: true,
        pointer: { touch: true },
        preventDefault: true,
        // preventScroll: 200,
      },
      pinch: {
        pointer: { touch: true },
        preventDefault: true,

        rubberband: 0.3,
        scaleBounds: {
          min: theme.const.window_minScale,
          max: theme.const.window_maxScale,
        },
      },
    },
  );

  const closeWin = (e: any) => {
    api.start({
      scale: 0,
      opacity: 0,
      onRest: () => {
        props.closeWindow(e);
      },
    });
  };

  return (
    <ControllerCSS style={controllerApi}>
      <WindowBox ref={domTarget} type={props.contState} />
    </ControllerCSS>
  );
}
