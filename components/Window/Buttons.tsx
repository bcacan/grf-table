import Image from "next/image";

export const ArrowsButton = () => {
  return (
    <div style={{ position: "absolute", top: "8%", left: "80%" }}>
      <Image src="/graphics/arrows-button.svg" height={30} width={30} />
    </div>
  );
};

export const CloseButton = () => {
  return (
    <div data-window={-1} style={{ position: "absolute", top: "8%", left: "87%" }}>
      <Image src="/graphics/x-icon.svg" height={30} width={30} />
    </div>
  );
};
