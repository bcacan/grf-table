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
    let clickpos = [e.clientX, e.clientY];
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
                  removeContainer={() => this.props.closeFun(this.props.id)}
                />
              );
            default:
              return (
                <Controller
                  contState={contState}
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeContainer={() => this.props.closeFun(this.props.id)}
                  closeWindow={this.closeWindow}
                />
              );
          }
        })()}
      </>
    );
  }
}
