import Image from "next/image";
function FooterComponent(props: { title: string; imgSrc: any }) {
  return (
    <>
      <div className=" relative flex items-center justify-center px-16 pt-8 pb-14 max-w-full text-xl font-bold text-center text-teal-400 min-h-[127px] w-[512px] max-md:px-5 max-md:mt-10">
        <Image
          loading="lazy"
          src={props.imgSrc}
          alt=""
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        <div className="relative z-10">{props.title}</div>
      </div>
    </>
  );
}
export default FooterComponent;
