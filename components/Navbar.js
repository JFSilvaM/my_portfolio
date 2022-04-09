import { useTranslation } from "next-i18next";

export default function Navbar() {
  const { t } = useTranslation("common");
  const pages = ["home", "about", "skillsTools"];

  return (
    <nav className="sticky top-0 bg-green-sections text-xl font-bold uppercase">
      <ul className="flex flex-row justify-evenly py-6 md:container md:mx-auto">
        {pages.map((page) => (
          <li key={`${page}`}>
            <a href={`#${page}`} className="a-underlined relative px-4 py-2">
              {t(`${page}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
