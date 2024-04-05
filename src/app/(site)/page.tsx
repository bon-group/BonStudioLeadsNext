import ApiServer from "api/requests/server";
import styles from "./home.module.scss";
import BannerHome from "components/HomeBanner/HomeBanner";
import AboutUs from "components/AboutUs/AboutUs";
import Header from "components/Header/Header";

async function init() {
  const res = await ApiServer.init({});
  const json = await res.json();

  return json;
}

export default async function Home() {
  const res = await init();

  const body = res.body;

  return (
    <main className={styles.main}>
      <Header logo={body.logo} />
      <BannerHome media={body.homeBanner} texts={body.texts} />
      <AboutUs texts={body.texts} />
    </main>
  );
}
