import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <section id="home" className="bg-green-sections">
      <div className="container mx-auto md:flex md:flex-row-reverse md:justify-evenly">
        <div className="flex justify-center md:w-5">
          <Image
            src="/img/joao.png"
            width={400}
            height={400}
            alt="João's photo"
          />
        </div>
        <div className="flex flex-col">
          <p>Hey, I&apos;m João!</p>
          <p>I&apos;m a Front-end Developer</p>
          <p>and football player.</p>
        </div>
      </div>
    </section>
  );
}
