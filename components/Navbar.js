import { useTranslation } from "next-i18next";

export default function Navbar() {
  const { t } = useTranslation("common");

  return (
    <nav className="sticky top-0 bg-green-sections text-xl font-bold uppercase">
      <ul className="flex flex-row justify-evenly py-6 md:container md:mx-auto">
        <li>
          <a className="border-b-4 px-4 py-1" href="#home">
            {t("home")}
          </a>
        </li>

        <li>
          <a href="#about">{t("about")}</a>
        </li>

        <li>
          <a href="#skills">{t("skills & tools")}</a>
        </li>
      </ul>
    </nav>
  );
}
