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

const Card2: React.FC<CardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  aspectRatio,
}) => (
  <div
    className={`relative flex flex-col items-center justify-center text-center text-white ${aspectRatio} `}
    style={{ padding: "3rem" }}
  >
    <Image
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className="absolute inset-0 w-full h-full"
    />
    <div className="relative">
      <div className="text-xl font-bold font-syne ml-10 mt-10">{title}</div>
      <div
        className="mt-6 text-base "
        style={{ paddingLeft: "1rem", marginLeft: "3.5rem", marginTop: "1rem" }}
      >
        {description}
      </div>
    </div>
  </div>
);

export default Card2;
