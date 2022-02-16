import Container from "components/Container";
import { LandingScreenCSS } from "components/LandingScreen/LandingScreen.styled";

import { useState, useEffect } from "react";
// import {} from "react-use-gesture";

export default function LandingScreen() {
  const [containerCounter, setContaineCounter] = useState({
    num: 0,
  });

  const [zindex, setZindex] = useState(1);

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
          pushToTop={pushToTop}
        />,
      ),
    );

    // Up counter +1 for next push
    setContaineCounter((currCounter) => ({
      num: currCounter.num + 1,
    }));
  };

  const pushToTop = (inputID: number) => {
    // stavit umjesto (inputID) --> inputRef
    // radit na dobivenom refu od elementa
    // zatim ref.current.style.zIndex =zindex+1;
    // setZindex= curr+1;
    return;

    // setListArr((currArr: any[]) => {
    //   let newarr = currArr;
    //   // Find index of inputID el
    //   let index = currArr.findIndex((el: any) => el.props.id === inputID);
    //   if (index == -1) console.log("not found??", inputID, currArr);
    //   else {
    //     if (index == currArr.length - 1) console.log("==last");
    //     else {
    //       let pushEl = currArr[index];
    //       let toIndex = currArr.length - 1;
    //       console.log(pushEl);

    //       currArr.splice(index, 1);
    //       currArr.splice(toIndex, 0, pushEl);
    //       newarr = currArr;
    //     }
    //   }

    //   //remove from arr
    //   //currArr.filter((el: any, elIndex: number) => el.props.id != inputID),
    //   console.log("1ss", currArr);
    //   return newarr;
    // });
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
      <div className="LandingScreen" onTouchStart={pushToArr}></div>
      {listArr}
    </LandingScreenCSS>
  );
}
