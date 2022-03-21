import { forwardRef, useEffect, useRef, useState } from "react";

import InfoWindow from "components/Window/InfoWindow/InfoWindow";
import MapWindow from "./MapWindow/MapWindow";
import GalleryWindow from "components/Window/GalleryWindow/GalleryWindow";

const WindowBox = forwardRef((props: any, ref) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case 3:
            return <MapWindow ref={ref} /*content={props.content} */ />;
          case 2:
            return <GalleryWindow ref={ref}  /*content={props.content} */ />;
          case 1:
            return <InfoWindow ref={ref}  /*content={props.content} */ />;
          default:
            return null;
        }
      })()}
    </>
  );
});
WindowBox.displayName = "WindowBox";
export default WindowBox;
