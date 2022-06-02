import { animated } from "@react-spring/web";
import { useScroll } from "@use-gesture/react";
import { InfoContent, ScrollBar } from "components/Window/Window.styled";
import { useRef } from "react";

export const CustomScroll = (props: any) => {
  const myRef = useRef(null);
  // This will add a scroll listener the div
  useScroll(
    ({ event }) => {
      event.preventDefault();
      console.log("scroll.");
    },
    {
      target: myRef,
      preventDefault: true,
      disabled: true,
      eventOptions: { passive: false },
    },
  );

  return (
    <InfoContent style={props.contentStyle} ref={myRef}>
      {props.children}
    </InfoContent>
  );
};
