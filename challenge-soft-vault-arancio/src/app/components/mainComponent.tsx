import Image from "next/image";
import * as React from "react";
import box from "../../assets/box.svg";
import firstBox from "../../assets/firstBox.svg";
import secondBox from "../../assets/secondBox.svg";
import thirdBox from "../../assets/thirdBox.svg";
import Card1 from "./firstBoxComponent";
import Card2 from "./secondBoxComponent";
import Card3 from "./thirdBoxComponent";

const MyComponent: React.FC = () => {
  return (
    <main
      className="flex flex-col min-h-screen justify-between"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <section className="flex-grow flex items-center justify-center pb-40">
        <div className="flex justify-center items-center align-center px-5 m-10">
          <div
            className="w-full h-full "
            // style={{ position: "absolute", width: "3/4", height: "3/4" }}
          >
            <Card1
              imgSrc={firstBox}
              imgAlt="Understanding needs image"
              title="Understanding needs"
              description="We identify who has the problem or need and provide a detailed description of what the problem entails."
              aspectRatio="aspect-[1.54]"
            />
          </div>
          <div
            className=" w-full h-full"
            // style={{ position: "absolute", width: "3/4", height: "3/4" }}
          >
            <Card2
              imgSrc={secondBox}
              imgAlt="Identifying opportunities image"
              title="Identifying opportunities"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
              aspectRatio="aspect-[1.74]"
            />
          </div>
          <div
            className=" w-full h-full"
            // style={{ position: "absolute", width: "3/4", height: "3/4" }}
          >
            <Card3
              imgSrc={thirdBox}
              imgAlt="Developing customized solutions image"
              title="Developing customized solutions"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
              aspectRatio="aspect-[1.73]"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center px-16 py-8 max-md:px-5 ">
        <div className=" relative flex items-center justify-center px-16 pt-8 pb-14 max-w-full text-xl font-bold text-center text-teal-400 min-h-[127px] w-[512px] max-md:px-5 max-md:mt-10">
          <Image
            loading="lazy"
            src={box}
            alt=""
            style={{ position: "absolute", width: "100%", height: "100%" }}
            // className=" absolute inset-0 w-full h-full"
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
