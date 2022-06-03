import PhotoAlbum, { Photo } from "react-photo-album";
import React, { useState } from "react";
import Image from "next/image";
import { BackButton } from "components/Window/Buttons";
import { Text_Subtitle, Text_Title } from "styles/texts";

const photos: Photo[] = [
  {
    src: "/gallery/picture-(1).jpg",
    width: 2638,
    height: 2172,
    key: "5",
  },
  {
    src: "/gallery/picture-(7).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(8).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(6).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(4).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(5).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(3).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(2).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(10).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
  },
  {
    src: "/gallery/picture-(9).jpg",
    width: 3648,
    height: 5472,
    key: "6",
    title: "test ... . . . .. test. . .. . ..",
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
      {openImg ? (
        <OpenImage img={openImg} closeImg={resetImg} />
      ) : (
        <>
          <Videos />
          <PhotoAlbum onClick={getImage} photos={photos} layout="masonry" />
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
      <Text_Subtitle
        style={{ position: "fixed", top: "24%", left: "40%", transform: "scale(1)" }}
      >
        {title}
      </Text_Subtitle>
      <BackButton closeImg={closeImg} />
    </>
  );
};

const Videos = () => {
  return (
    <>
      <video
        width={"24%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video1.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"24%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video2.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"26%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video3.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        width={"26%"}
        height={"90%"}
        //controls
        autoPlay
        loop
      >
        <source src={"/gallery/Video4.m4v"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
