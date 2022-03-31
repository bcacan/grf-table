//@ts-nocheck
import React, { Component } from "react";
import AudioAnalyser from "components/AudioVisualizer/AudioAnalyser";
import IntroSVG from "components/IntroSVG/IntroSVG";

class Mic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    this.setState({ audio });
  }
  stopMicrophone() {
    this.state.audio.getTracks().forEach((track) => track.stop());
    this.setState({ audio: null });
  }
  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audio ? "Stop microphone" : "Get microphone input"}
          </button>
        </div>

        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ""}
        {/* <div style={{ background: "black", width: "25%" }}>
          {this.state.audio ? <IntroSVG audio={this.state.audio} /> : ""}
        </div> */}
      </div>
    );
  }
}

export default Mic;
