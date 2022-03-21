import React, { Component } from 'react';

class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;

    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of audioData) {
      const y = (item / 255.0) * height;
      
        context.lineTo(x, y);
      x += sliceWidth;
    }
      context.lineTo(x, height / 2);

    //   context.moveTo(215, 75);
    //   for (const item of audioData) {
    //       context.arc(150, 75, item / 2, 0, 2 * Math.PI); 
                  
    //   }
      
    //   context.fillStyle = "#FF0000"; 
    //   context.fill();

    context.stroke();
  }

  render() {
    return <canvas width="300" height="300" ref={this.canvas} />;
  }
}

export default AudioVisualiser;