export default function About() {
  return (
    <>
      <section className="container mx-auto py-10 px-4 md:py-20 lg:px-32 xl:px-60">
        <h1 className="pb-5 text-[1.9rem] md:text-[2.3rem]">
          Who Is <span className="text-purple-text">João</span>?
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and{" "}
          <span className="text-purple-text">typesetting industry</span>. Lorem
          Ipsum has been the{" "}
          <span className="text-purple-text">industrys standard</span> dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and <span className="text-purple-text">scrambled</span> it to
          make a type specimen book.
        </p>
      </section>

      <section className="absolute h-12 mt-8 w-full bg-green-sections"></section>

      <section className="absolute h-20 w-1/2 -skew-y-3 bg-green-sections"></section>

      <section className="ml-[50%] h-20 skew-y-3 bg-green-sections"></section>
    </>
  );
}
