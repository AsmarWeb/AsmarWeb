import { useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { locale = "en" } = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir =
      locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ThemeSwitch />
    </>
  );
}

export default MyApp;
