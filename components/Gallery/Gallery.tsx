import PhotoAlbum, { Photo } from "react-photo-album";
import React, { useState } from "react";
import Image from "next/image";
import { BackButton } from "components/Window/Buttons";
import { Text_Subtitle, Text_Title } from "styles/texts";

const photos: Photo[] = [
  {
    src: "/gallery/new/picture-(9).jpg",
    width: 1200,
    height: 1600,
    title: "",
  },
  {
    src: "/gallery/new/picture-(1).jpg",
    width: 886,
    height: 1299,
  },
  {
    src: "/gallery/new/picture-(7).jpg",
    width: 1066,
    height: 1599,
    title: "",
  },
  {
    src: "/gallery/new/picture-(3).jpg",
    width: 999,
    height: 1333,
    title: "",
  },
  {
    src: "/gallery/new/picture-(8).jpg",
    width: 841,
    height: 1500,
    title: "",
  },
  {
    src: "/gallery/new/picture-(6).jpg",
    width: 899,
    height: 1597,
    title: "",
  },
  {
    src: "/gallery/new/picture-(4).jpg",
    width: 840,
    height: 1500,
    title: "",
  },
  {
    src: "/gallery/new/picture-(5).jpg",
    width: 899,
    height: 1602,
    title: "",
  },

  {
    src: "/gallery/new/picture-(2).jpg",
    width: 899,
    height: 1596,
    title: "",
  },
];

const Gallery = () => {
  const [openImg, setOpenImg] = useState(null);

  const getImage = (_e: any, p: any) => {
    setOpenImg(p);
  };
  const resetImg = () => {
    setOpenImg(null);
  };

  return (
    <>
      {openImg != null ? (
        <OpenImage img={openImg} closeImg={resetImg} />
      ) : (
        <>
          <PhotoAlbum
            onClick={getImage}
            photos={photos}
            layout="rows"
            spacing={12}
            padding={4}
          />
        </>
      )}
    </>
  );
};
export default Gallery;

const OpenImage = ({ img, closeImg }: any) => {
  //if (!img) return null;

  const { src, width, height, title } = img;
  return (
    <>
      <Image
        src={src}
        layout="fill"
        /*width={width}  height={height}*/
        objectFit="contain"
      />
      {/* <Text_Subtitle
        style={{ position: "fixed", top: "24%", left: "40%", transform: "scale(1)" }}
      >
        {title}
      </Text_Subtitle> */}
      <BackButton closeImg={closeImg} />
    </>
  );
};
