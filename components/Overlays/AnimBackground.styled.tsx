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
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 9;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #ffe08a;
    top: 97%;
    left: 95%;
    animation-duration: 365s;
    animation-delay: -314s;
    transform-origin: 7vw -15vh;
    box-shadow: 2vmin 0 1.0813811160034321vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #00ffff;
    top: 95%;
    left: 1%;
    animation-duration: 41s;
    animation-delay: -226s;
    transform-origin: 17vw -2vh;
    box-shadow: 2vmin 0 0.9229451477141359vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #00ffff;
    top: 77%;
    left: 57%;
    animation-duration: 154s;
    animation-delay: -80s;
    transform-origin: -6vw -24vh;
    box-shadow: -2vmin 0 0.8933632104678852vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #00ffff;
    top: 87%;
    left: 32%;
    animation-duration: 384s;
    animation-delay: -237s;
    transform-origin: -17vw 15vh;
    box-shadow: 2vmin 0 0.4298107335674639vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #ffffff;
    top: 42%;
    left: 92%;
    animation-duration: 220s;
    animation-delay: -47s;
    transform-origin: -20vw -8vh;
    box-shadow: -2vmin 0 0.6717111084813807vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #00ffff;
    top: 58%;
    left: 100%;
    animation-duration: 64s;
    animation-delay: -96s;
    transform-origin: -12vw -13vh;
    box-shadow: 2vmin 0 1.121767981740339vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #ffffff;
    top: 73%;
    left: 62%;
    animation-duration: 16s;
    animation-delay: -111s;
    transform-origin: 22vw -15vh;
    box-shadow: 2vmin 0 1.0836495135049244vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #ffffff;
    top: 85%;
    left: 95%;
    animation-duration: 253s;
    animation-delay: -256s;
    transform-origin: -17vw 8vh;
    box-shadow: -2vmin 0 0.6928641789477035vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #00ffff;
    top: 34%;
    left: 69%;
    animation-duration: 232s;
    animation-delay: -76s;
    transform-origin: -22vw -1vh;
    box-shadow: 2vmin 0 1.1049669605899088vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #00ffff;
    top: 35%;
    left: 82%;
    animation-duration: 242s;
    animation-delay: -4s;
    transform-origin: 11vw 19vh;
    box-shadow: -2vmin 0 0.9319690199805919vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #00ffff;
    top: 100%;
    left: 4%;
    animation-duration: 335s;
    animation-delay: -121s;
    transform-origin: -19vw -23vh;
    box-shadow: 2vmin 0 0.8406521689954782vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #ffffff;
    top: 37%;
    left: 57%;
    animation-duration: 400s;
    animation-delay: -191s;
    transform-origin: -15vw -5vh;
    box-shadow: 2vmin 0 0.4320675598983099vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #00ffff;
    top: 76%;
    left: 69%;
    animation-duration: 189s;
    animation-delay: -98s;
    transform-origin: 25vw -1vh;
    box-shadow: -2vmin 0 0.6849778790413643vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #ffe08a;
    top: 100%;
    left: 45%;
    animation-duration: 329s;
    animation-delay: -6s;
    transform-origin: 22vw 3vh;
    box-shadow: -2vmin 0 1.0753187728557154vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #00ffff;
    top: 47%;
    left: 26%;
    animation-duration: 175s;
    animation-delay: -1s;
    transform-origin: -21vw -15vh;
    box-shadow: 2vmin 0 0.29371788720137104vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #00ffff;
    top: 89%;
    left: 38%;
    animation-duration: 141s;
    animation-delay: -384s;
    transform-origin: 12vw -17vh;
    box-shadow: 2vmin 0 0.605027769660686vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #00ffff;
    top: 96%;
    left: 52%;
    animation-duration: 320s;
    animation-delay: -283s;
    transform-origin: 4vw -3vh;
    box-shadow: 2vmin 0 0.8311782380918269vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #00ffff;
    top: 50%;
    left: 71%;
    animation-duration: 151s;
    animation-delay: -277s;
    transform-origin: -22vw -9vh;
    box-shadow: -2vmin 0 1.1913115616039123vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #00ffff;
    top: 57%;
    left: 16%;
    animation-duration: 194s;
    animation-delay: -349s;
    transform-origin: -14vw -15vh;
    box-shadow: -2vmin 0 0.9317245074449296vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #00ffff;
    top: 65%;
    left: 72%;
    animation-duration: 145s;
    animation-delay: -303s;
    transform-origin: 22vw 18vh;
    box-shadow: -2vmin 0 0.5967240839713084vmin currentColor;
  }
  .background span:nth-child(20) {
    color: #00ffff;
    top: 62%;
    left: 74%;
    animation-duration: 62s;
    animation-delay: -120s;
    transform-origin: 25vw -10vh;
    box-shadow: 2vmin 0 1.144179383123996vmin currentColor;
  }
  .background span:nth-child(21) {
    color: #ffffff;
    top: 24%;
    left: 10%;
    animation-duration: 181s;
    animation-delay: -28s;
    transform-origin: 23vw 10vh;
    box-shadow: -2vmin 0 1.1636672824840582vmin currentColor;
  }
  .background span:nth-child(22) {
    color: #ffe08a;
    top: 93%;
    left: 39%;
    animation-duration: 213s;
    animation-delay: -143s;
    transform-origin: 17vw -4vh;
    box-shadow: -2vmin 0 1.094600484651763vmin currentColor;
  }
  .background span:nth-child(23) {
    color: #00ffff;
    top: 39%;
    left: 42%;
    animation-duration: 205s;
    animation-delay: -385s;
    transform-origin: 18vw 3vh;
    box-shadow: 2vmin 0 0.5129697416994528vmin currentColor;
  }
  .background span:nth-child(24) {
    color: #00ffff;
    top: 17%;
    left: 22%;
    animation-duration: 12s;
    animation-delay: -218s;
    transform-origin: 3vw -21vh;
    box-shadow: -2vmin 0 0.7647895959835596vmin currentColor;
  }
  .background span:nth-child(25) {
    color: #00ffff;
    top: 80%;
    left: 53%;
    animation-duration: 124s;
    animation-delay: -76s;
    transform-origin: -14vw 14vh;
    box-shadow: 2vmin 0 0.36120795095553726vmin currentColor;
  }
  .background span:nth-child(26) {
    color: #ffffff;
    top: 58%;
    left: 68%;
    animation-duration: 300s;
    animation-delay: -371s;
    transform-origin: 1vw -12vh;
    box-shadow: 2vmin 0 1.2080390791388103vmin currentColor;
  }
  .background span:nth-child(27) {
    color: #ffffff;
    top: 83%;
    left: 76%;
    animation-duration: 152s;
    animation-delay: -217s;
    transform-origin: 20vw -1vh;
    box-shadow: -2vmin 0 1.0985462975509321vmin currentColor;
  }
  .background span:nth-child(28) {
    color: #00ffff;
    top: 39%;
    left: 45%;
    animation-duration: 295s;
    animation-delay: -312s;
    transform-origin: 0vw 6vh;
    box-shadow: -2vmin 0 0.9533842003716058vmin currentColor;
  }
  .background span:nth-child(29) {
    color: #ffffff;
    top: 23%;
    left: 87%;
    animation-duration: 6s;
    animation-delay: -232s;
    transform-origin: -19vw 11vh;
    box-shadow: 2vmin 0 1.07862681102491vmin currentColor;
  }
  .background span:nth-child(30) {
    color: #ffffff;
    top: 32%;
    left: 59%;
    animation-duration: 78s;
    animation-delay: -39s;
    transform-origin: -4vw 13vh;
    box-shadow: -2vmin 0 0.3125440742217107vmin currentColor;
  }
  .background span:nth-child(31) {
    color: #ffe08a;
    top: 97%;
    left: 51%;
    animation-duration: 405s;
    animation-delay: -379s;
    transform-origin: 14vw 14vh;
    box-shadow: -2vmin 0 1.0268827402967144vmin currentColor;
  }
  .background span:nth-child(32) {
    color: #00ffff;
    top: 2%;
    left: 68%;
    animation-duration: 232s;
    animation-delay: -13s;
    transform-origin: -16vw -17vh;
    box-shadow: 2vmin 0 0.5680824943737044vmin currentColor;
  }
  .background span:nth-child(33) {
    color: #00ffff;
    top: 77%;
    left: 99%;
    animation-duration: 130s;
    animation-delay: -115s;
    transform-origin: 8vw -24vh;
    box-shadow: -2vmin 0 0.9403926209000906vmin currentColor;
  }
  .background span:nth-child(34) {
    color: #00ffff;
    top: 40%;
    left: 28%;
    animation-duration: 104s;
    animation-delay: -358s;
    transform-origin: 21vw 22vh;
    box-shadow: -2vmin 0 0.49964346918162006vmin currentColor;
  }
  .background span:nth-child(35) {
    color: #ffffff;
    top: 36%;
    left: 38%;
    animation-duration: 298s;
    animation-delay: -49s;
    transform-origin: 21vw -3vh;
    box-shadow: -2vmin 0 0.6977169474210341vmin currentColor;
  }
  .background span:nth-child(36) {
    color: #00ffff;
    top: 12%;
    left: 86%;
    animation-duration: 112s;
    animation-delay: -93s;
    transform-origin: 20vw -14vh;
    box-shadow: -2vmin 0 0.6236674241675908vmin currentColor;
  }
  .background span:nth-child(37) {
    color: #00ffff;
    top: 15%;
    left: 43%;
    animation-duration: 45s;
    animation-delay: -21s;
    transform-origin: -3vw 4vh;
    box-shadow: 2vmin 0 0.5521958695106892vmin currentColor;
  }
  .background span:nth-child(38) {
    color: #ffffff;
    top: 4%;
    left: 26%;
    animation-duration: 162s;
    animation-delay: -62s;
    transform-origin: 9vw -21vh;
    box-shadow: 2vmin 0 1.0984855278164714vmin currentColor;
  }
  .background span:nth-child(39) {
    color: #ffe08a;
    top: 93%;
    left: 76%;
    animation-duration: 163s;
    animation-delay: -129s;
    transform-origin: 10vw 3vh;
    box-shadow: 2vmin 0 0.8059718260076865vmin currentColor;
  }
  .background span:nth-child(40) {
    color: #00ffff;
    top: 31%;
    left: 7%;
    animation-duration: 97s;
    animation-delay: -196s;
    transform-origin: 20vw -4vh;
    box-shadow: -2vmin 0 0.6438799967914064vmin currentColor;
  }
  .background span:nth-child(41) {
    color: #ffe08a;
    top: 37%;
    left: 78%;
    animation-duration: 128s;
    animation-delay: -337s;
    transform-origin: -24vw -11vh;
    box-shadow: 2vmin 0 1.126972989572823vmin currentColor;
  }
  .background span:nth-child(42) {
    color: #ffe08a;
    top: 90%;
    left: 69%;
    animation-duration: 284s;
    animation-delay: -404s;
    transform-origin: -24vw -4vh;
    box-shadow: 2vmin 0 1.1062496587825237vmin currentColor;
  }
  .background span:nth-child(43) {
    color: #00ffff;
    top: 46%;
    left: 90%;
    animation-duration: 127s;
    animation-delay: -15s;
    transform-origin: -13vw -16vh;
    box-shadow: -2vmin 0 1.0048436902574536vmin currentColor;
  }
  .background span:nth-child(44) {
    color: #00ffff;
    top: 22%;
    left: 65%;
    animation-duration: 264s;
    animation-delay: -407s;
    transform-origin: 3vw 13vh;
    box-shadow: 2vmin 0 0.8720555096096752vmin currentColor;
  }
  .background span:nth-child(45) {
    color: #00ffff;
    top: 11%;
    left: 44%;
    animation-duration: 297s;
    animation-delay: -118s;
    transform-origin: 12vw -9vh;
    box-shadow: 2vmin 0 1.2470476714971073vmin currentColor;
  }
  .background span:nth-child(46) {
    color: #ffffff;
    top: 47%;
    left: 24%;
    animation-duration: 56s;
    animation-delay: -7s;
    transform-origin: -8vw 7vh;
    box-shadow: -2vmin 0 1.2204957059945296vmin currentColor;
  }
  .background span:nth-child(47) {
    color: #ffe08a;
    top: 100%;
    left: 36%;
    animation-duration: 139s;
    animation-delay: -282s;
    transform-origin: 2vw -24vh;
    box-shadow: 2vmin 0 1.236422476294713vmin currentColor;
  }
  .background span:nth-child(48) {
    color: #00ffff;
    top: 57%;
    left: 53%;
    animation-duration: 15s;
    animation-delay: -360s;
    transform-origin: -2vw -15vh;
    box-shadow: -2vmin 0 0.9595332105699363vmin currentColor;
  }
  .background span:nth-child(49) {
    color: #ffffff;
    top: 86%;
    left: 85%;
    animation-duration: 152s;
    animation-delay: -261s;
    transform-origin: 4vw -20vh;
    box-shadow: 2vmin 0 0.3859777034802334vmin currentColor;
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
