import Container from "components/Container";
import { LandingScreenCSS } from "components/LandingScreen/LandingScreen.styled";

import { useState, useEffect } from "react";
// import {} from "react-use-gesture";

export default function LandingScreen() {
  const [containerCounter, setContaineCounter] = useState({
    num: 0,
  });

  const [listArr, setListArr]: any = useState([]);

  const pushToArr = (e: any) => {
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
        />,
      ),
    );

    // Up counter +1 for next push
    setContaineCounter((currCounter) => ({
      num: currCounter.num + 1,
    }));
  };

  const removeFromArr = (inputID: any) => {
    // Remove inputID el from array
    setListArr((currArr: any[]) =>
      currArr.filter((el: any, elIndex: number) => el.props.id != inputID),
    );
  };

  const clearArr = () => {
    setListArr([]);
    setContaineCounter({ num: 0 });
  };

  return (
    <LandingScreenCSS>
      <div className="LandingScreen" onTouchStart={pushToArr}></div>
      {listArr}
    </LandingScreenCSS>
  );
}
