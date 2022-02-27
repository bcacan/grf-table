import { useSpring, to, animated, config } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ControllerCSS } from "components/Controller/Controller.styled";
import { useEffect, useState, useRef, forwardRef } from "react";
import Image from "next/image";
import WindowBox from "components/Window/WindowBox";
import { MainWindowCSS } from "components/Window/Window.styled";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function Controller(props: any) {
  const winW = 1280;
  const winH = 800;

  const { height, width } = useWindowDimensions();

  const domTarget = useRef<any>(null);

  const pinchColor = "rgba(255, 0, 0, 0.4)";
  const dragColor = "rgba(0, 255, 0, 0.4)";
  const transColor = "rgba(0, 0, 0, 0)";

  const [controllerApi, api] = useSpring(() => ({
    x: props.pos[0] - Math.floor(winW / 2),
    y: props.pos[1] - Math.floor(winH / 2),
    scale: 0,
    rotate: 0,
    opacity: 0,
    border: "2px solid transparent",
    borderColor: transColor,

    config: { mass: 0.3, tension: 200, friction: 10 },
  }));

  useEffect(() => {
    // on-Mount effect
    //open menu
    api.start({
      scale: 0.5,
      opacity: 1,
    });

    // on unMount
    return () => {
      //console.log("bye");
    };
  }, []);

  useGesture(
    {
      onDrag: ({ active, first, offset: [x, y], touches, cancel }) => {
        // api.start({
        //   borderColor: active ? dragColor : "black",
        // });
        if (touches != 1) cancel();
        api.start({
          borderColor: active ? dragColor : "black",
          x: x,
          y: y,
          //scale: active ? memo[0] * 0.8 : memo[0] * 1.25,
        });
      },
      onPinch: ({
        active,
        first,
        initial: [id],
        da: [d],
        offset: [, a],
        origin: [ox, oy],
        memo,
        touches,
        cancel,
      }) => {
        if (touches != 2) {
          console.log("touches !=2 ", touches);
          cancel();
        }
        if (first) {
          const { width, height, x, y } = domTarget.current.getBoundingClientRect();
          const initialScale = controllerApi.scale.get();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [controllerApi.x.get(), controllerApi.y.get(), tx, ty, initialScale];
        }
        const ms = d / id;
        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({
          scale: boundscale(memo[4] * ms),
          rotate: 1 * a,
          x: x,
          y: y,

          borderColor: active ? pinchColor : "black",

          // transformOrigin: origin,
          // "transform-origin": `${}`,
          //w: Math.abs(Math.floor(1 * d))
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
        rubberband: 0.5,
        filterTaps: true,
        pointer: { touch: true },
        preventDefault: true,
        // preventScroll: 200,
      },
      pinch: {
        pointer: { touch: true },
        preventDefault: true,

        // rubberband: 0.5,
        // scaleBounds: { min: scaleMin, max: scaleMax },
      },
    },
  );

  const WindowBoxToRender = forwardRef((props: any, ref) => {
    let type: string = "";

    switch (props.contState) {
      case 1:
        type = "info";
        break;
      case 2:
        type = "gallery";
        break;
      case 3:
        type = "map";
        break;
      default:
        return null;
        break;
    }
    return <WindowBox ref={ref} type={type} content={props.content} />;
  });
  WindowBoxToRender.displayName = "WindowBoxToRender";

  return (
    <ControllerCSS style={controllerApi}>
      {/* <UserBar fullscreenButton={fullscreenFunction} closeButton={props.menuClick} /> */}
      <div>
        <WindowBoxToRender ref={domTarget} contState={props.contState} />
        <WindowBoxToRender contState={props.contState} content={true} />
      </div>
      <CloseButton closeWindow={props.closeWindow} />
    </ControllerCSS>
  );
}

const CloseButton = ({ closeWindow }: any) => {
  return (
    <div
      onTouchStart={(e) => closeWindow(e)}
      style={{ position: "absolute", top: "8%", left: "87%" }}
    >
      <Image src="/graphics/x-icon.svg" height={30} width={30} />
    </div>
  );
};

function boundscale(scale: number) {
  if (scale < 0.25) scale = 0.25;
  else if (scale > 1.2) scale = 1.2;

  return scale;
}
/*
function UserBar(props: any) {
  return (
    <>
      <div className={`UserBar`}>
        <span onClick={props.fullscreenButton}>-⬜-</span>

        <span style={{ float: "right" }} onClick={(e) => props.closeButton(0, e)}>
          -X-
        </span>
      </div>
    </>
  );
}
*/
