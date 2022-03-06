import PhotoAlbum, { Photo } from "react-photo-album";
import React, { useState } from "react";
import Image from "next/image";

const photos: Photo[] = [
  {
    src: "https://picsum.photos/900/550?image=1050",
    width: 900,
    height: 550,
    key: "1",
  },
  {
    src: "https://picsum.photos/800/900",
    width: 800,
    height: 900,
    key: "2",
  },
  {
    src: "https://picsum.photos/600/1000",
    width: 600,
    height: 1000,
    key: "3",
  },
  {
    src: "https://picsum.photos/1200/800",
    width: 1200,
    height: 800,
    key: "4",
  },
  {
    src: "https://picsum.photos/700/400",
    width: 700,
    height: 400,
    key: "5",
  },
  {
    src: "https://picsum.photos/600/1300",
    width: 650,
    height: 1300,
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
      <Image
        src={src}
        layout="fill"
        /*width={width}  height={height}*/
        objectFit="contain"
      />

      <div onClick={closeImg} style={{ position: "absolute", background: "black" }}>
        close X
      </div>
    </>
  );
};
