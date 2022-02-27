import { forwardRef, useEffect, useRef, useState } from "react";

import InfoWindow from "components/Window/InfoWindow/InfoWindow";
import MapWindow from "./MapWindow/MapWindow";
import GalleryWindow from "components/Window/GalleryWindow/GalleryWindow";

const WindowBox = forwardRef((props: any, ref) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case "map":
            return <MapWindow ref={ref} content={props.content} />;
          case "gallery":
            return <GalleryWindow ref={ref} content={props.content} />;
          case "info":
            return <InfoWindow ref={ref} content={props.content} />;
          default:
            return null;
        }
      })()}
    </>
  );
});
WindowBox.displayName = "WindowBox";
export default WindowBox;
