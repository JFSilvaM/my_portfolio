import { useTranslation } from "next-i18next";
import { useState } from "react";
import Hamburguer from "./icons/Hamburguer";

export default function Navbar() {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pages = ["home", "about", "skillsTools", "projects", "contact"];

  return (
    <nav className="sticky top-0 bg-green-sections text-lg font-bold uppercase">
      <section className="md:hidden">
        <div
          className="flex justify-center py-6"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <Hamburguer />
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <ul className="pb-5">
            {pages.map((page) => (
              <li key={`${page}`} className="flex justify-center py-1">
                <a href={`#${page}`}>{t(`${page}`)}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ul className="container mx-auto hidden justify-evenly py-6 md:flex">
        {pages.map((page) => (
          <li key={`${page}`}>
            <a href={`#${page}`} className="a-underlined relative py-2 px-4">
              {t(`${page}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
