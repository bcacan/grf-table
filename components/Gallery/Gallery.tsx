import PhotoAlbum, { Photo } from "react-photo-album";
import React, { useState } from "react";
import Image from "next/image";

const photos: Photo[] = [
  {
    src: "https://picsum.photos/200/300?image=1050",
    width: 200,
    height: 300,
    key: "1",
  },
  {
    src: "https://picsum.photos/300/300?image=206",
    width: 300,
    height: 300,
    key: "2",
  },
  {
    src: "https://picsum.photos/200/300?image=1050",
    width: 200,
    height: 300,
    key: "3",
  },
  {
    src: "https://picsum.photos/200/300?image=1050",
    width: 200,
    height: 300,
    key: "4",
  },
  {
    src: "https://picsum.photos/300/300?image=206",
    width: 300,
    height: 300,
    key: "5",
  },
  {
    src: "https://picsum.photos/200/300?image=1050",
    width: 200,
    height: 300,
    key: "6",
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
        <PhotoAlbum onClick={getImage} photos={photos} layout="masonry" />
      )}
    </>
  );
};
export default Gallery;

const OpenImage = ({ img, closeImg }: any) => {
  //if (!img) return null;

  const { src, width, height } = img;
  return (
    <>
      <div onClick={closeImg}>close X</div>
      <Image src={src} layout="fixed" width={width} height={height} />
    </>
  );
};
