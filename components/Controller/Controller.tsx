import { useSpring, to, animated, config } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ControllerCSS } from "components/Controller/Controller.styled";
import { useEffect, useState, useRef, forwardRef } from "react";
import Image from "next/image";
import WindowBox from "components/Window/WindowBox";
import { MainWindowCSS } from "components/Window/Window.styled";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function Controller(props: any) {
  const { height, width } = useWindowDimensions();

  const domTarget = useRef<any>(null);

  const pinchColor = "rgba(255, 0, 0, 0.4)";
  const dragColor = "rgba(0, 255, 0, 0.4)";
  const transColor = "rgba(0, 0, 0, 0)";

  const [controllerApi, api] = useSpring(() => ({
    x: props.pos[0],
    y: props.pos[1],
    scale: 0,
    rotate: 0,
    opacity: 0,
    border: "2px solid transparent",
    borderColor: transColor,
  }));

  useEffect(() => {
    // on-Mount effect
    //open menu
    api.start({
      scale: 1,
      opacity: 1,
    });

    // on unMount
    return () => {
      //console.log("bye");
    };
  }, []);

  useGesture(
    {
      onDrag: ({ active, first, offset: [x, y], touches }) => {
        api.start({
          borderColor: active ? dragColor : "black",
        });
        if (touches > 1) return;
        api.start({
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
      }) => {
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
          scale: memo[4] * ms,
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
        bounds: { left: -200, right: width - 1100, top: -100, bottom: height - 600 },
        rubberband: 0.5,
        filterTaps: true,
        pointer: { touch: true },
        preventDefault: true,
        // preventScroll: 200,
      },
      pinch: {
        pointer: { touch: true },
        preventDefault: true,
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

  return (
    <ControllerCSS style={controllerApi}>
      {/* <UserBar fullscreenButton={fullscreenFunction} closeButton={props.menuClick} /> */}
      <div>
        <WindowBoxToRender ref={domTarget} contState={props.contState} />
        <WindowBoxToRender contState={props.contState} content={true} />
      </div>
      <CloseButton closeButton={props.removeContainer} />
    </ControllerCSS>
  );
}

const CloseButton = ({ closeButton }: any) => {
  return (
    <div
      onTouchStart={(e) => closeButton()}
      style={{ position: "absolute", top: "8%", left: "87%" }}
    >
      <Image src="/graphics/x-icon.svg" height={30} width={30} />
    </div>
  );
};

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
