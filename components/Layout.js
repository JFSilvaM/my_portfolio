import { useTranslation } from "next-i18next";

export default function Layout() {
  const { t } = useTranslation("common");

  return <div>{t("welcome")}</div>;
}
