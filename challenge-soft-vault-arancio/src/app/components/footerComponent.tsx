function FooterComponent(props: { title: string }) {
  return (
    <>
      <section className="overflow-hidden relative flex-col items-center self-center px-16 pt-8 pb-14 mt-96 max-w-full text-xl font-bold text-center text-teal-400 min-h-[127px] w-[512px] max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c4f871804c17839223b89551440b9633e24944cd99d7e6ad1a0471a6614f38e?apiKey=0c5b52b259714e8c895c0cb50323cb54&"
          alt="Key technologies banner"
          className="object-cover absolute inset-0 size-md"
        />
        {props.title}
      </section>
    </>
  );
}
export default FooterComponent;
