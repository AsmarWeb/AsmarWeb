import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
