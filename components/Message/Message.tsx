import { config, useTransition } from "@react-spring/web";
import { MessageCSS } from "components/Message/Message.styled";
import { useState, useEffect, useRef } from "react";

const Message = ({ trigger, variant, children }: any) => {
  const [show, setShow] = useState(false);

  const [messagePos, setMessagePos] = useState({ x: 0, y: 0 });
  let trigger_pos = null;

  // On trigger (pos) setState & set the timer
  useEffect(() => {
    if (trigger == null) return;

    setShow((curr) => !curr); // show message, or hide if already shown

    //event touch coords
    trigger_pos = trigger.nativeEvent.touches[trigger.nativeEvent.touches.length - 1];

    setMessagePos({
      x: trigger_pos.clientX - 230,
      y: trigger_pos.clientY - 80,
    });

    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  }, [trigger]);

  const transition = useTransition(show, {
    from: {
      opacity: 0,
      scale: 0,
      x: messagePos.x,
      y: messagePos.y,
    },
    enter: {
      opacity: 1,
      scale: 1,
      x: messagePos.x,
      y: messagePos.y,
    },
    leave: {
      opacity: 0,
      scale: 0,
    },
    config: { ...config.wobbly },
  });

  // If show is true this will be returned
  return transition(
    (styles, item) =>
      item && (
        <MessageCSS style={styles} className={`message message-${variant}`}>
          <div className="text">{children}</div>
          <div className="line"></div>
        </MessageCSS>
      ),
  );
};

Message.defaultPros = {
  variant: "info",
};

export default Message;
