import Image from "next/image";

export const ArrowsButton = () => {
  return (
    <div className="grid-arrows-button">
      <Image src="/graphics/arrows-button.svg" height={30} width={30} />
    </div>
  );
};

export const CloseButton = () => {
  return (
    <div className="grid-x-button" data-window={-1}>
      <Image src="/graphics/x-icon.svg" height={30} width={30} />
    </div>
  );
};

export const BackButton = ({ closeImg }: any) => {
  return (
    <div
      onTouchStart={closeImg}
      style={{
        position: "fixed",
        top: "13%",
        left: "0",
        background: "black",
        paddingInline: "3.8% 4%",
      }}
    >
      <Image src="/graphics/back-button.svg" height={48} width={48} />
    </div>
  );
};
