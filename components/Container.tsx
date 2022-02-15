import React, { useState } from "react";
import Menu from "./Menu/Menu";

import Controller from "components/Controller/Controller";
import WindowBox from "components/Window/WindowBox";

export default class Container extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      clickPos: props.clickPos,
      containerState: 0,
    };
  }

  containerFun = (e: any, x: any) => {
    let TOUCHES = e.touches;

    if (!e.touches.length) TOUCHES = e.changedTouches;

    let lastTouchID = TOUCHES.length - 1;
    let clickpos = [TOUCHES[lastTouchID].clientX, TOUCHES[lastTouchID].clientY];

    this.setState({
      clickPos: clickpos,
      containerState: x,
    });
  };
  closeWindow = () => {
    //console.log("closewin");
    this.setState({
      containerState: 0,
    });
  };

  render() {
    console.log("rendered container: ", this.props.id);
    return (
      <>
        {(() => {
          let contState = this.state.containerState;
          switch (contState) {
            case 0:
              return (
                <Menu
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeFromArr={() => this.props.removeFromArr(this.props.id)}
                />
              );
            default:
              return (
                <Controller
                  contState={contState}
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  closeWindow={this.closeWindow}
                />
              );
          }
        })()}
      </>
    );
  }
}
