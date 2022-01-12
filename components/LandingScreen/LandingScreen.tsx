import Container from "components/Container";
import { LandingScreenCSS } from "components/LandingScreen/LandingScreen.styled";

import { useState, useEffect } from "react";
// import {} from "react-use-gesture";

export default function LandingScreen() {
  const [containerArray, setContainerArray]: any = useState([]);
  const [containerCounter, setContaineCounter] = useState({
    num: 0,
  });

  const pushToArr = (e: any) => {
    let input = {
      id: containerCounter.num,
      pos: [e.touches[0].clientX, e.touches[0].clientY],
    };

    // Add input to array
    setContainerArray((oldArray: any) => [...oldArray, input]);

    // Up counter +1 for next push
    setContaineCounter((currCounter) => ({
      num: currCounter.num + 1,
    }));
  };

  const removeFromArr = (inputID: any) => {
    // Find index of inputID el
    let index = containerArray.findIndex((el: any) => el.id === inputID);

    // Remove inputID el from array
    if (index > -1) {
      setContainerArray(
        containerArray.filter((el: any, elIndex: any) => elIndex !== index),
      );
    }
  };

  const pushToTop = (inputEl: any) => {
    // Push to begining of array
    //let tempArr = testArr.filter((el) => el.id !== inputEl.id);
    //tempArr.unshift(inputEl);
    //setTestArr(tempArr);
    //

    // Check is inputEl already on top of list (last element)
    let index = containerArray.findIndex((el: any) => el.id === inputEl.id);
    if (index === containerArray.length - 1) return;

    // Push to end of array
    let tempArr = containerArray.filter((el: any) => el.id !== inputEl.id);
    tempArr.push(inputEl);
    setContainerArray(tempArr);
    //
  };

  const clearArr = () => {
    setContainerArray([]);
    setContaineCounter({ num: 0 });
  };

  return (
    <LandingScreenCSS>
      <div className="LandingScreen" onTouchStart={pushToArr}></div>
      {containerArray.map((el: any) => (
        <div
          key={el.id}
          onTouchStart={() => pushToTop(el)}
          title="controller-holder-pushtotop"
        >
          <Container clickPos={el.pos} key={el.id} id={el.id} closeFun={removeFromArr} />
        </div>
      ))}
    </LandingScreenCSS>
  );
}
