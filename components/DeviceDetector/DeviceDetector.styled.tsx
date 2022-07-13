import styled from "styled-components";

export const DeviceDetectorCSS = styled.div`
  z-index: 999;
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;
  text-align: center;

  background: black;
  color: white;

  * {
    margin: 4% auto;
  }

  @media (min-width: 1400px) and (hover: none) {
    display: none;
  }

  @media (min-width: 1400px) {
    #m1 {
      display: none;
    }
  }

  @media (hover: none) {
    #m2 {
      display: none;
    }
  }
`;
