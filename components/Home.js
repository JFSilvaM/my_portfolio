import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const hobbies = [
  "playFootball",
  "playVideoGames",
  "cook",
  "watchMovies",
  "travel",
  "sleep",
];

export default function Home() {
  const { t } = useTranslation("common");

  const [newHobby, setnewHobbie] = useState(`${hobbies[0]}`);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * hobbies.length);
    setnewHobbie(hobbies[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <section>
      <section id="home" className="bg-green-sections">
        <div className="container mx-auto py-14 text-center md:flex md:flex-row-reverse md:justify-evenly md:py-32 md:text-left">
          <div className="border-double">
            <Image
              src="/img/joao.jpg"
              width={300}
              height={300}
              alt="João's photo"
              className="rounded-full"
            />
          </div>
          <div className="space-y-5 pt-14 text-[1.5rem] md:py-16 md:text-[2.3rem]">
            <p>{t("home-p-1")}</p>
            <p>
              {t("home-p-2")}
              <span className="font-bold text-blue-text">
                {t("home-p-2-1")}
              </span>
            </p>
            <p>
              {t("home-p-3")} {t(newHobby)}.
            </p>
          </div>
        </div>
      </section>

      <section className="absolute h-14 w-full bg-green-sections"></section>

      <section className="absolute h-20 w-1/2 skew-y-3 bg-green-sections"></section>

      <section className="ml-[50%] h-20 -skew-y-3 bg-green-sections"></section>
    </section>
  );
}
