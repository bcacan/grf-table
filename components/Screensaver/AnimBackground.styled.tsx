import styled from "styled-components";

export const AnimBackgroundCSS = styled.div`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000000;
    overflow: hidden;
  }

  .background span {
    width: 6vmin;
    height: 6vmin;
    border-radius: 6vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 18;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #f7ec96;
    top: 74%;
    left: 39%;
    animation-duration: 293s;
    animation-delay: -183s;
    transform-origin: 4vw -13vh;
    box-shadow: -12vmin 0 1.9894212279537606vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #f7ec96;
    top: 28%;
    left: 53%;
    animation-duration: 81s;
    animation-delay: -46s;
    transform-origin: 8vw -2vh;
    box-shadow: -12vmin 0 2.2741825665076236vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #f7ec96;
    top: 96%;
    left: 97%;
    animation-duration: 257s;
    animation-delay: -120s;
    transform-origin: 24vw 15vh;
    box-shadow: -12vmin 0 2.4781276883092476vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #f7ec96;
    top: 33%;
    left: 2%;
    animation-duration: 76s;
    animation-delay: -219s;
    transform-origin: 17vw -7vh;
    box-shadow: 12vmin 0 2.2980409027585367vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #0a96e1;
    top: 12%;
    left: 62%;
    animation-duration: 298s;
    animation-delay: -82s;
    transform-origin: 24vw -1vh;
    box-shadow: 12vmin 0 1.9751698931487727vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #f7ec96;
    top: 31%;
    left: 83%;
    animation-duration: 128s;
    animation-delay: -301s;
    transform-origin: -1vw -3vh;
    box-shadow: 12vmin 0 2.2000774931284797vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #0a96e1;
    top: 45%;
    left: 45%;
    animation-duration: 147s;
    animation-delay: -290s;
    transform-origin: 18vw -9vh;
    box-shadow: 12vmin 0 1.8362921194043713vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #f7ec96;
    top: 28%;
    left: 73%;
    animation-duration: 209s;
    animation-delay: -211s;
    transform-origin: 17vw -15vh;
    box-shadow: -12vmin 0 1.60825728037482vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #f7ec96;
    top: 42%;
    left: 42%;
    animation-duration: 154s;
    animation-delay: -151s;
    transform-origin: -13vw 15vh;
    box-shadow: 12vmin 0 1.8641376120611517vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #0a96e1;
    top: 86%;
    left: 35%;
    animation-duration: 139s;
    animation-delay: -185s;
    transform-origin: 14vw 14vh;
    box-shadow: 12vmin 0 1.5739084575982656vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #0a96e1;
    top: 48%;
    left: 100%;
    animation-duration: 279s;
    animation-delay: -44s;
    transform-origin: -21vw 0vh;
    box-shadow: -12vmin 0 1.7503235537683692vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #0a96e1;
    top: 60%;
    left: 17%;
    animation-duration: 305s;
    animation-delay: -200s;
    transform-origin: 9vw 13vh;
    box-shadow: 12vmin 0 2.4299957720759613vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #f7ec96;
    top: 34%;
    left: 47%;
    animation-duration: 159s;
    animation-delay: -208s;
    transform-origin: -7vw -8vh;
    box-shadow: -12vmin 0 2.0405997661206827vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #0a96e1;
    top: 75%;
    left: 62%;
    animation-duration: 288s;
    animation-delay: -220s;
    transform-origin: -12vw 8vh;
    box-shadow: 12vmin 0 2.2173115166237882vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #f7ec96;
    top: 20%;
    left: 72%;
    animation-duration: 63s;
    animation-delay: -167s;
    transform-origin: 16vw 20vh;
    box-shadow: 12vmin 0 1.7332997428403958vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #6fccdd;
    top: 85%;
    left: 13%;
    animation-duration: 23s;
    animation-delay: -145s;
    transform-origin: 25vw -22vh;
    box-shadow: -12vmin 0 1.6002452275525234vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #0a96e1;
    top: 10%;
    left: 100%;
    animation-duration: 118s;
    animation-delay: -75s;
    transform-origin: 2vw -1vh;
    box-shadow: -12vmin 0 1.683624246265107vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #f7ec96;
    top: 47%;
    left: 72%;
    animation-duration: 132s;
    animation-delay: -218s;
    transform-origin: -10vw 22vh;
    box-shadow: 12vmin 0 1.7645166993565482vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #6fccdd;
    top: 77%;
    left: 95%;
    animation-duration: 206s;
    animation-delay: -257s;
    transform-origin: 21vw -5vh;
    box-shadow: -12vmin 0 2.490482624327669vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #0a96e1;
    top: 74%;
    left: 11%;
    animation-duration: 214s;
    animation-delay: -168s;
    transform-origin: 17vw -24vh;
    box-shadow: -12vmin 0 2.4028595935774915vmin currentColor;
  }
`;

export const Snake = styled.div`
  display: inline-block;
  width: 95vw;
  height: 95vh;

  //position: relative;
  //box-shadow: inset 0 0 0 1px #00a0ff;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
    outline: 3px solid #00a0ff;
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  ::before {
    animation-name: snake-border-head;
  }
  ::after {
    animation-name: snake-border-tail;
  }

  /* snake-border stuff: */
  @keyframes snake-border-head {
    /*
  The snake's "head" stretches across a side of its container.
  The moment this head hits a corner, it instantly begins to
  stretch across the next side. (This is why some keyframe
  moments are repeated, to create these instantaneous jumps)
  */

    90% {
      left: 0;
      top: 0;
      width: 0;
      height: 40%;
    }
    90% {
      left: 0;
      top: 0;
      width: 0;
      height: 0;
    }
    100% {
      left: 0;
      top: 0;
      width: 40%;
      height: 0;
    }
    0% {
      left: 0;
      top: 0;
      width: 40%;
      height: 0;
    }

    15% {
      left: 60%;
      top: 0;
      width: 40%;
      height: 0;
    }
    15% {
      left: 100%;
      top: 0;
      width: 0;
      height: 0;
    }
    25% {
      left: 100%;
      top: 0;
      width: 0;
      height: 40%;
    }

    40% {
      left: 100%;
      top: 60%;
      width: 0;
      height: 40%;
    }
    40% {
      left: 100%;
      top: 100%;
      width: 0;
      height: 0;
    }
    50% {
      left: 60%;
      top: 100%;
      width: 40%;
      height: 0;
    }

    65% {
      left: 0;
      top: 100%;
      width: 40%;
      height: 0;
    }
    65% {
      left: 0;
      top: 100%;
      width: 0;
      height: 0;
    }
    75% {
      left: 0;
      top: 60%;
      width: 0;
      height: 40%;
    }
  }
  @keyframes snake-border-tail {
    /*
  The "tail" of the snake is at full length when the head is at 0
  length, and vice versa. The tail always at a 90 degree angle
  from the head.
  */

    90% {
      top: 0%;
      height: 40%;
    }
    100% {
      left: 0;
      top: 0;
      width: 0;
      height: 0;
    }
    0% {
      left: 0;
      top: 0;
      width: 0;
      height: 0;
    }

    15% {
      width: 40%;
    }
    25% {
      left: 100%;
      top: 0;
      width: 0;
      height: 0;
    }

    40% {
      height: 40%;
    }
    50% {
      left: 100%;
      top: 100%;
      width: 0;
      height: 0;
    }

    65% {
      left: 0%;
      width: 40%;
    }
    75% {
      left: 0;
      top: 100%;
      width: 0;
      height: 0;
    }
  }
`;
