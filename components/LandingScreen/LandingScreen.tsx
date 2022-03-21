import { useState, useEffect } from "react";

import Container from "components/Container";
import Message from "components/Message/Message";
import AnimBackground from "components/Screensaver/AnimBackground";

import { LandingScreenCSS } from "components/LandingScreen/LandingScreen.styled";
import { Text_Description } from "styles/texts";

import { Messages } from "content/texts"

const MENU_LIMIT = 6;

export default function LandingScreen() {
  const [containerCounter, setContaineCounter] = useState({
    num: 0,
  });

  const [zindex, setZindex] = useState(1);

  const [listArr, setListArr]: any = useState([]);

  const [limitMessage, setLimitMessage] = useState(null);

  const pushToArr = (e: any) => {
    // Activate limit-message
    if (listArr.length >= MENU_LIMIT) {
      setLimitMessage(e);
      return; // skip adding new menu
    } else setLimitMessage(null);
    ////

    let lastTouchID = e.touches.length - 1;
    let input = {
      id: containerCounter.num,
      pos: [e.touches[lastTouchID].clientX, e.touches[lastTouchID].clientY],
    };

    setListArr((currList: any[]) =>
      currList.concat(
        <Container
          clickPos={input.pos}
          key={input.id}
          id={input.id}
          removeFromArr={removeFromArr}
          pushToTop={pushToTop}
        />,
      ),
    );

    // Up counter +1 for next push
    setContaineCounter((currCounter) => ({
      num: currCounter.num + 1,
    }));
  };

  const pushToTop = (inputRef: any) => {
    let oldZindex = parseInt(inputRef.current.style.zIndex) || 0;

    setZindex((currZindex) => {
      if (currZindex > oldZindex) {
        inputRef.current.style.zIndex = currZindex + 1;
        return currZindex + 1;
      } else return currZindex;
    });
  };

  const removeFromArr = (inputID: number) => {
    // Remove inputID el from array
    setListArr((currArr: any[]) =>
      currArr.filter((el: any, elIndex: number) => el.props.id != inputID),
    );
  };

  const clearArr = () => {
    setListArr([]);
    setContaineCounter({ num: 0 });
  };

  useEffect(() => {
    console.log("setListArr, updated", listArr);
  }, [listArr]);

  return (
    <LandingScreenCSS>
      <AnimBackground />
      <div className="LandingScreen" onTouchStart={pushToArr}></div>
      {listArr}

      <Message trigger={limitMessage} variant="menus-limit">
        <Text_Description>{Messages.menuLimit} {MENU_LIMIT}</Text_Description>
      </Message>
    </LandingScreenCSS>
  );
}
