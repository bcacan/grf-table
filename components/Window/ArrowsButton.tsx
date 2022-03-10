import Image from "next/image";

const ArrowsButton = () => {
  return (
    <div style={{ position: "absolute", top: "8%", left: "80%" }}>
      <Image src="/graphics/arrows-button.svg" height={30} width={30} />
    </div>
  );
};
export default ArrowsButton;
