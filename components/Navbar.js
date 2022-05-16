import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import CloseHamburguer from "./icons/CloseHamburguer";
import Hamburguer from "./icons/Hamburguer";

export default function Navbar() {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pages = ["home", "about", "skillsTools", "projects", "contact"];

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isNavOpen]);

  return (
    <nav className="bg-green-sections pt-14 text-lg font-bold uppercase md:py-5">
      <div className="flex justify-center md:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <Hamburguer />
        </button>
      </div>

      <div
        className={
          isNavOpen
            ? "fixed inset-0 z-10 flex flex-col items-center overflow-auto bg-white-bg"
            : "hidden md:flex"
        }
      >
        <div className="pt-5 md:hidden" onClick={() => setIsNavOpen(false)}>
          <CloseHamburguer />
        </div>

        <ul className="flex h-full flex-col items-center justify-center gap-7 py-5 md:container md:mx-auto md:flex md:flex-row md:justify-evenly md:gap-0 md:py-0">
          {pages.map((page) => (
            <li key={`${page}`} onClick={() => setIsNavOpen(false)}>
              <a
                href={`#${page}`}
                className="md:a-underlined md:relative md:py-2 md:px-4"
              >
                {t(`${page}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
