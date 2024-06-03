import Image from "next/image";
import * as React from "react";

import styles from "./firstBox.module.css";

type CardProps = {
  imgSrc: any;
  imgAlt: string;
  title: string;
  description: string;
  aspectRatio: string;
};

const Card1: React.FC<CardProps> = ({
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
      className={`absolute ${styles.responsiveImg}`}
      // style={{ height: "100%", width: "100%" }}
    />
    <div className="relative">
      <div className="text-xl font-bold font-syne ml-10">{title}</div>
      <div className=" text-base " style={{ marginTop: "1rem" }}>
        {description}
      </div>
    </div>
  </div>
);

export default Card1;
