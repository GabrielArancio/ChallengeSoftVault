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

const Card: React.FC<CardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  aspectRatio,
}) => (
  <div
    className={`relative flex flex-col items-center justify-center text-center text-white ${aspectRatio} overflow-hidden`}
    style={{ padding: "20px" }} // Adjust the padding to fit the text within the image
  >
    <Image
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div className="relative z-10 p-5">
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-6 text-base">{description}</div>
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  return (
    <main
      className="flex flex-col min-h-screen justify-between"
      style={{ backgroundColor: "black" }}
    >
      <section className="flex-grow flex items-center justify-center">
        <div className="flex justify-between w-full px-5">
          <div className="mt-[-20px]">
            <Card
              imgSrc={firstBox}
              imgAlt="Understanding needs image"
              title="Understanding needs"
              description="We identify who has the problem or need and provide a detailed description of what the problem entails."
              aspectRatio="aspect-[1.54]"
            />
          </div>
          <Card
            imgSrc={secondBox}
            imgAlt="Identifying opportunities image"
            title="Identifying opportunities"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            aspectRatio="aspect-[1.74]"
          />
          <Card
            imgSrc={thirdBox}
            imgAlt="Developing customized solutions image"
            title="Developing customized solutions"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            aspectRatio="aspect-[1.73]"
          />
        </div>
      </section>
      <section className="flex items-center justify-center px-16 py-8 max-md:px-5">
        <div className="overflow-hidden relative flex items-center justify-center px-16 pt-8 pb-14 mt-96 max-w-full text-xl font-bold text-center text-teal-400 min-h-[127px] w-[512px] max-md:px-5 max-md:mt-10">
          <Image
            loading="lazy"
            src={box}
            alt=""
            className="object-cover absolute inset-0 w-md h-md"
          />
          <div className="relative z-10">
            Below are some of the key technologies we use in our projects:
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyComponent;
