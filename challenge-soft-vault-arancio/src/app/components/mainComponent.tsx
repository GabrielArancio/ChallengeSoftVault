import * as React from "react";
import FirstBoxComponent from "./firstBoxComponent";
import SecondBoxComponent from "./secondBoxComponent";
import FooterComponent from "./footerComponent";

type BlockProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  aspectRatio: string;
  contentAlign?: string;
};

const Block: React.FC<BlockProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  aspectRatio,
  contentAlign = "center",
}) => (
  <div
    className={`flex overflow-hidden relative flex-col grow p-11 text-${contentAlign} text-white ${aspectRatio} fill-white max-md:px-5 background-overlay`}
  >
    <img
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className="object-cover absolute inset-0 size-md"
    />
    <div className="relative text-xl font-bold">{title}</div>
    <div className="relative mt-7 text-base">{description}</div>
  </div>
);

function MyComponent() {
  const blocksData = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/28c3cba796c4df00830dd985c7f75e546218f142840d4fb0d7604198043392d3?apiKey=0c5b52b259714e8c895c0cb50323cb54&",
      imgAlt: "Understanding needs banner",
      title: "Understanding needs",
      description: `We identify who has the problem or need and provide a detailed description of what the problem entails.`,
      aspectRatio: "aspect-[1.69]",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43116cc2950509c15267b9b2defddcaf055131603d86c7c56aa6c8245ad33457?apiKey=0c5b52b259714e8c895c0cb50323cb54&",
      imgAlt: "Identifying opportunities banner",
      title: "Identifying opportunities",
      description:
        "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard...",
      aspectRatio: "aspect-[1.69]",
    },
  ];

  return (
    <main className="flex flex-col " style={{ backgroundColor: "black" }}>
      <section className="w-[100%] max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 m-12">
          <div className="">
            <FirstBoxComponent
              title={"Understanding needs"}
              description={
                "We identify who has the problem or need and provide a detailed description of what the problem entails."
              }
            />
          </div>
          <div className="">
            <SecondBoxComponent
              title={"Identifying opportunities"}
              description={
                "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
              }
            />
          </div>
        </div>
      </section>
      <FooterComponent
        title={"Below are some of the key technologies we use in our projects:"}
      />
    </main>
  );
}

export default MyComponent;
