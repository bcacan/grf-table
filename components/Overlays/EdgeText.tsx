import styled from "styled-components";
import { Text_Fixed } from "styles/texts";

const EdgeText = () => {
  return (
    <>
      <FixedTextLeft>⎯ Grafički fakultet ⎯</FixedTextLeft>
      <FixedTextBottom>⎯ HoloGRF ⎯</FixedTextBottom>
      <FixedTextRight>⎯ Mrak izložba ⎯</FixedTextRight>
    </>
  );
};

export const FixedTextLeft = styled(Text_Fixed)`
  left: -130px;
  bottom: 30%;
  transform: rotate(90deg);
`;

export const FixedTextBottom = styled(Text_Fixed)`
  right: 30%;
  bottom: 20px;
`;

export const FixedTextRight = styled(Text_Fixed)`
  right: -100px;
  top: 33%;
  transform: rotate(-90deg);
`;

export default EdgeText;
