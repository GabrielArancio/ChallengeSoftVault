import Image from "next/image";
import * as React from "react";
import box from "../../assets/box.svg";
import firstBox from "../../assets/firstBox.svg";
import secondBox from "../../assets/secondBox.svg";
import thirdBox from "../../assets/thirdBox.svg";

type CardProps = {
  imgSrc: any;
  imgAlt: string;
  title: string;
  description: string;
  aspectRatio: string;
};

const Card3: React.FC<CardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  aspectRatio,
}) => (
  <div
    className={`relative flex flex-col items-center justify-center text-center text-white ${aspectRatio} `}
    style={{ padding: "30px" }}
  >
    <Image
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className=" absolute inset-0 w-full h-full"
    />
    <div className="relative z-10 p-5">
      <div className="text-xl font-bold font-syne ">{title}</div>
      <div className="mt-4 text-base text-center ml-10">{description}</div>
    </div>
  </div>
);

export default Card3;
