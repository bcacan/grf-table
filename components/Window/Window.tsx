import {
  Text_Title,
  Text_Body,
  Text_Body2,
  Text_Description,
  Text_Subtitle,
  Text_Subtitle2,
} from "styles/texts";
import { WindowCSS } from "./Window.styled";

const Window = () => {
  return (
    <WindowCSS>
      <br />
      <Text_Title>H1 heading desktop</Text_Title>
      <br />
      <Text_Subtitle> H1 heading desktop</Text_Subtitle>
      <br />
      <Text_Subtitle2> H3 heading desktop</Text_Subtitle2>
      <br />
      <Text_Body> Body large desktop</Text_Body>
      <br />
    </WindowCSS>
  );
};
export default Window;
