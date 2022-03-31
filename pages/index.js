import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";

export default function Home() {
  return <Layout />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
