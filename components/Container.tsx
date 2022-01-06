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
    let clickpos = [e.touches[0].clientX, e.touches[0].clientY];
    this.setState({
      clickPos: clickpos,
      containerState: x,
    });
  };

  render() {
    return (
      <>
        {(() => {
          console.log(this.state);
          switch (this.state.containerState) {
            case 0:
              return (
                <Menu
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeContainer={() => this.props.closeFun(this.props.id)}
                />
              );
            case 1:
              return (
                <Controller
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeContainer={() => this.props.closeFun(this.props.id)}
                >
                  <WindowBox type={"info"} />
                </Controller>
              );
            case 2:
              return (
                <Controller
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeContainer={() => this.props.closeFun(this.props.id)}
                >
                  <WindowBox type={"gallery"} />
                </Controller>
              );
            case 3:
              return (
                <Controller
                  menuClick={this.containerFun}
                  pos={this.state.clickPos}
                  removeContainer={() => this.props.closeFun(this.props.id)}
                >
                  <WindowBox type={"map"} />
                </Controller>
              );
            default:
              return null;
          }
        })()}
      </>
    );
  }
}
