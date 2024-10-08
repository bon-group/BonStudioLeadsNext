import React from "react";
import BannerHome from "components/HomeBanner/HomeBanner";
import styles from "./home.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import AboutUs from "components/AboutUs/AboutUs";
import LeadsForm from "components/LeadsForm/LeadsForm";
import Wave from "/public/assets/waves/wave-upsidedown.svg";
import { Metadata } from "next";
import ISR from "utils/ISR";

export async function generateMetadata(): Promise<Metadata> {
  const payload = { route: "/", langId: "he" };

  return await ISR.getMetaTags(payload);
}

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <main className={styles.main}>
      <BannerHome />
      <AboutUs />
      <div className={styles["wave"]}>
        <img src={Wave.src} alt="wave" />
      </div>
      <LeadsForm />
    </main>
  );
}
