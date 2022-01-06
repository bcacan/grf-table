import { useSpring, to, animated, config } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ControllerCSS } from "components/Controller/Controller.styled";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
export default function Controller(props: any) {
  const domTarget = useRef(null);

  useEffect(() => {
    // on-Mount effect
    //open menu
    setScale.start({
      to: {
        opacity: 1,
      },
    });

    // on unMount
    return () => {
      setScale.start({
        to: {
          opacity: 0,
        },
      });
    };
  }, []);

  const [pos, setPos] = useSpring(() => ({
    newpos: props.pos,
    prev: props.pos,
  }));

  //Fullscreen
  const fsOn = { width: 80, height: 80 };
  const fsOff = { width: 50, height: 45 };

  const [scale, setScale] = useSpring(() => ({
    scale: [1, 0],
    // w: `${fsOff.width}vw`,
    // h: `${fsOff.height}vh`,
    w: "initial",
    h: "initial",
    opacity: 0,
    config: config.slow,
  }));
  //const [fullscreen, setFullscreen] = useSpring(() => [50, 30]);
  const [fullscreen, setFullscreen] = useState(false);
  const fullscreenFunction = () => {
    console.log("run");
    //console.log([a,b]=pos.prev);
    setPos.start({
      newpos: fullscreen ? pos.prev : [0, 0],
    });
    setScale.start({
      scale: [1, 0],
      w: fullscreen ? `${fsOff.width}vw` : `${fsOn.width}vw`,
      h: fullscreen ? `${fsOff.height}vh` : `${fsOn.height}vh`,
    });
    setFullscreen(!fullscreen);
    //fullscreenProps = { margin: 20, width: 80, height: 80 };
  };
  ////

  useGesture(
    {
      onDrag: ({ down, movement: newp, touches, swipe: [swipeX] }) => {
        if (touches >= 2) {
          if (fullscreen) fullscreenFunction();

          setPos.start({
            newpos: newp,
            prev: pos.newpos.get(),
            immediate: down,
          });
          //console.log(touches);
        }
      },
      onPinch: ({ offset: [d, a] }) => {
        setScale.start({
          scale: [1 + d / 100, 1 * a],
          //w: Math.abs(Math.floor(1 * d))
        });
        //console.log("?: ", scale.w.get());
      },
    },
    {
      target: domTarget,
      // enabled: onOff,
      drag: {
        from: () => pos.prev.get(),
        pointer: { touch: true },
        filterTaps: true,
      },
      eventOptions: { passive: false },
    },
  );

  return (
    <ControllerCSS
      style={{
        transform: to(
          [pos.newpos, scale.scale],
          ([x, y], [scale, rotate]) =>
            `translate3d(${x}px,${y}px,0) scale(${scale}) rotate(${rotate}deg)`,
        ),

        width: scale.w,
        height: scale.h,
        opacity: scale.opacity,
      }}
    >
      {/* <UserBar fullscreenButton={fullscreenFunction} closeButton={props.menuClick} /> */}
      <div
        ref={domTarget}
        style={{
          height: "100%",
          touchAction: "none",
        }}
      >
        {props.children}
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
