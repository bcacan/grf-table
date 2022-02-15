import Container from "components/Container";
import { LandingScreenCSS } from "components/LandingScreen/LandingScreen.styled";

import { useState, useEffect } from "react";
// import {} from "react-use-gesture";

export default function LandingScreen() {
  const [containerArray, setContainerArray]: any[] = useState([]);
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
          closeFun={removeFromArr}
          pushToTop={pushToTop}
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

  // useEffect(() => {
  //   console.log("eff arr", listArr);
  // });

  const pushToTop = (ref: any) => {
    // setZindex((zIndex) => zIndex + 1);
    // console.log(ref, zindex, parseInt(ref.current.style.zIndex));
    // ref.current.style.zIndex = zindex;
    // setZindex((zIndex) => zIndex + 1);
    /*
    // Push to begining of array
    //let tempArr = testArr.filter((el) => el.id !== inputEl.id);
    //tempArr.unshift(inputEl);
    //setTestArr(tempArr);
    //
    return;
    // Check is inputEl already on top of list (last element)
    let index = containerArray.findIndex((el: any) => el.id === inputEl.id);
    if (index === containerArray.length - 1) return;

    // Push to end of array
    let tempArr = containerArray.filter((el: any) => el.id !== inputEl.id);
    tempArr.push(inputEl);
    setContainerArray(tempArr);
    //

    */
  };

  const clearArr = () => {
    setContainerArray([]);
    setContaineCounter({ num: 0 });
  };

  return (
    <LandingScreenCSS>
      <div className="LandingScreen" onTouchStart={pushToArr}></div>
      {/* {containerArray.map((el: any) => (
        <div
          key={el.id}
          onTouchStart={() => pushToTop(el)}
          title="controller-holder-pushtotop"
        >
          <Container clickPos={el.pos} key={el.id} id={el.id} closeFun={removeFromArr} />
        </div>
      ))} */}
      {listArr}
    </LandingScreenCSS>
  );
}
