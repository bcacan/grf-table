import React, { useState } from "react";
import Menu from "./Menu/Menu";

import Controller from "components/Controller/Controller";
import WindowBox from "components/Window/WindowBox";

export default class Container extends React.Component<any, any> {
  containerRef: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      clickPos: props.clickPos,
      containerState: 0,
    };
  }
  componentDidMount() {
    this.props.pushToTop(this.containerRef);
  }

  containerFun = (e: any, x: any) => {
    console.log(e);

    let clickpos;

    if (e.type == "pointerup") {
      clickpos = [e.clientX, e.clientY];
    } else {
      let TOUCHES = e.touches;
      if (!e.touches.length) TOUCHES = e.changedTouches;

      let lastTouchID = TOUCHES.length - 1;
      clickpos = [TOUCHES[lastTouchID].clientX, TOUCHES[lastTouchID].clientY];
    }

    //center menu after window is closed
    if (x === 0) {
      const rect = e.target.parentElement.getBoundingClientRect();
      clickpos = [rect.x + rect.width / 2, rect.y + rect.height / 2];
    }

    this.setState({
      clickPos: clickpos,
      containerState: x,
    });
  };

  closeWindow = (e: any) => {
    console.log("closewin");
    this.containerFun(e, 0);
  };

  render() {
    console.log("rendered container: ", this.props.id);
    return (
      <div
        style={{ position: "inherit" }}
        ref={this.containerRef}
        onTouchStart={() => this.props.pushToTop(this.containerRef)}
      >
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
      </div>
    );
  }
}
