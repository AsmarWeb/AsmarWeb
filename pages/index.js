import Head from "next/head";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// AsmarWeb Studio — Homepage
export default function Home() {
  const site = {
    name: "AsmarWeb Studio",
    title: "AsmarWeb Studio | Development, Design & Digital Solutions",
    description:
      "AsmarWeb Studio is a creative technology studio specializing in web development, software platforms, UI/UX design, branding, and digital solutions in the UAE.",
    url: "https://asmarweb.vercel.app",
    keywords:
      "AsmarWeb Studio, Web Development UAE, Laravel Developer, UI UX Design, Branding, Software Development, Creative Studio, Open Source",
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{site.title}</title>

        <meta name="description" content={site.description} />
        <meta name="keywords" content={site.keywords} />
        <meta name="author" content={site.name} />
        <meta name="robots" content="index, follow" />

        {/* Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={site.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />

        {/* Theme */}
        <meta name="theme-color" content="#080e1b" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              description: site.description,
              sameAs: [
                "https://github.com/AsmarWeb",
                "https://www.linkedin.com/in/mr-asim/",
                "https://www.instagram.com/AsmarWeb/",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <main id="studio-home">
        {/* Hero / Studio Introduction */}
        <Main />

        {/* About AsmarWeb Studio */}
        <About />

        {/* Technical & Creative Capabilities */}
        <Skills />

        {/* Software Projects & Design Portfolio */}
        <Projects />

        {/* Contact & Business Inquiries */}
        <Contact />
      </main>
    </>
  );
}
