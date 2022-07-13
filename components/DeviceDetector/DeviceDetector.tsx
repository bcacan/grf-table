import { DeviceDetectorCSS } from "components/DeviceDetector/DeviceDetector.styled";
import { useState } from "react";
import { Text_Description } from "styles/texts";

export default function DeviceDetector() {
  const [deviceBlock, setDeviceBlock] = useState(true);

  return (
    <>
      {deviceBlock ? (
        <DeviceDetectorCSS>
          <Text_Description id="m1">
            {" You can't view this app on small screen."}
          </Text_Description>
          <Text_Description id="m2">
            {" It's not recomended to use app without touchscreen."}
          </Text_Description>

          <button onClick={() => setDeviceBlock(false)}>Continue</button>
        </DeviceDetectorCSS>
      ) : (
        <></>
      )}
      )
    </>
  );
}
