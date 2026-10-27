import useTranslation from "../hooks/useTranslation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import NavLogo from "../public/assets/navLogo.png";

/* ==========================================
   ASMARWEB STUDIO
   Responsive Navigation
========================================== */



const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AsmarWeb",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mr-asim/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/asmar.web/",
    icon: FaInstagram,
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const router = useRouter();

  const { t, locale } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), href: "/#home", id: "home" },
    { name: t("nav.about"), href: "/#about", id: "about" },
    { name: t("nav.skills"), href: "/#skills", id: "skills" },
    { name: t("nav.projects"), href: "/#projects", id: "projects" },
    { name: t("nav.contact"), href: "/#contact", id: "contact" },
  ];

  const changeLanguage = (nextLocale) => {
    setNav(false);
    router.push(router.asPath, router.asPath, {
      locale: nextLocale,
      scroll: false,
    });
  };


  /* Detect scrolling */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (router.pathname !== "/") {
        setActiveSection("");
        return;
      }

      const sections = navLinks
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const currentPosition = window.scrollY + 140;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= currentPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  /* Close menu when route changes */
  useEffect(() => {
    const closeMenu = () => setNav(false);

    router.events.on("routeChangeStart", closeMenu);
    router.events.on("hashChangeStart", closeMenu);

    return () => {
      router.events.off("routeChangeStart", closeMenu);
      router.events.off("hashChangeStart", closeMenu);
    };
  }, [router.events]);

  /* Prevent body scrolling while menu is open */
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  /* Close mobile menu with Escape */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNav(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        aria-label="Main navigation"
        className={`
          fixed left-0 top-0 z-[100]
          w-full border-b
          transition-all duration-300

          ${
            scrolled
              ? `
                border-gray-200
                bg-white/95 shadow-lg
                shadow-gray-200/30
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-[#030017]/95
                dark:shadow-black/20
              `
              : `
                border-gray-200/70
                bg-white/90
                backdrop-blur-lg
                dark:border-white/10
                dark:bg-[#030017]/90
              `
          }
        `}
      >
        <div
          className="
            studio-container
            flex h-20 items-center
            justify-between gap-4
          "
        >
          {/* BRAND */}
          <Link
            href="/#home"
            className="
              flex shrink-0 items-center
              gap-3
            "
            aria-label="AsmarWeb Studio - Home"
            onClick={() => setNav(false)}
          >
            {/* Logo */}
            {/* <span
              className="
                relative flex h-11 w-11
                items-center justify-center
                overflow-hidden rounded-xl
                border border-[#018A7C]/20
                bg-white p-1
                dark:bg-[#121126]
              "
            >
              <Image
                src={NavLogo}
                alt="AsmarWeb Studio"
                width={40}
                height={40}
                objectFit="contain"
              />
            </span> */}

            {/* Studio name */}
            <span
              className="
                flex flex-col
                leading-tight
              "
            >
              <span
                className="
                  text-xl font-extrabold
                  tracking-tight
                  text-[#030017]
                  dark:text-white
                "
              >
                AsmarWeb
              </span>

              <span
                className="
                  text-[11px] font-bold
                  uppercase tracking-[0.2em]
                  text-[#018A7C]
                  dark:text-[#32B6A5]
                "
              >
                Studio
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div
            className="
              hidden items-center
              gap-1 lg:flex
            "
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`
                    relative rounded-lg
                    px-4 py-2.5
                    text-sm font-semibold
                    transition-all duration-200

                    ${
                      isActive
                        ? `
                          bg-[#018A7C]/10
                          text-[#018A7C]
                          dark:text-[#32B6A5]
                        `
                        : `
                          text-gray-700
                          hover:bg-[#018A7C]/5
                          hover:text-[#018A7C]
                          dark:text-gray-300
                          dark:hover:text-[#32B6A5]
                        `
                    }
                  `}
                >
                  {item.name}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-0
                        left-1/2 h-0.5 w-6
                        -translate-x-1/2
                        rounded-full
                        bg-[#F5812D]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Desktop contact button */}
            <Link
              href="/#contact"
              className="
                hidden items-center
                justify-center gap-2
                rounded-xl
                bg-[#018A7C]
                px-5 py-3
                text-sm font-semibold
                text-white
                shadow-md
                shadow-[#018A7C]/15
                transition duration-300
                hover:-translate-y-0.5
                hover:bg-[#007366]
                lg:inline-flex
              "
            >
              {t("nav.letsTalk")}
              <FaArrowRight size={12} aria-hidden="true" />
            </Link>

            
            <div
              className="flex items-center gap-1 rounded-full
                         border border-gray-200 p-1
                         dark:border-white/10"
              role="group"
              aria-label="Select language"
            >
              {["en", "ar"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => changeLanguage(lang)}
                  aria-pressed={locale === lang}
                  className={`rounded-full px-3 py-2
                    text-xs font-bold transition-colors
                    ${locale === lang
                      ? "bg-[#018A7C] text-white"
                      : "text-gray-600 dark:text-gray-300"}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

{/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setNav(!nav)}
              aria-label={nav ? "Close menu" : "Open menu"}
              aria-expanded={nav}
              aria-controls="studio-mobile-menu"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl border
                border-gray-200
                !bg-white !text-[#030017]
                !shadow-none
                transition-colors
                hover:!border-[#018A7C]
                dark:!border-white/10
                dark:!bg-[#121126]
                dark:!text-white
                lg:hidden
              "
            >
              {nav ? (
                <AiOutlineClose size={23} aria-hidden="true" />
              ) : (
                <AiOutlineMenu size={23} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {nav && (
        <div
          className="
            fixed inset-0 z-[110]
            bg-[#030017]/70
            backdrop-blur-sm
            lg:hidden
          "
          onClick={() => setNav(false)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        id="studio-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!nav}
        inert={nav ? undefined : ""}
        className={`
          fixed left-0 top-0 z-[120]
          flex h-[100dvh]
          w-[85%] max-w-[360px]
          flex-col overflow-y-auto
          border-r border-gray-200
          bg-white p-6
          text-[#030017]
          shadow-2xl
          transition-transform duration-300
          dark:border-white/10
          dark:bg-[#0B0A1C]
          dark:text-white
          lg:hidden

          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div
          className="
            flex items-center
            justify-between gap-3
          "
        >
          <Link
            href="/#home"
            onClick={() => setNav(false)}
            className="
              text-xl font-extrabold
              tracking-tight
            "
          >
            AsmarWeb{" "}
            <span
              className="
                text-[#018A7C]
                dark:text-[#32B6A5]
              "
            >
              Studio.
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setNav(false)}
            aria-label="Close navigation"
            className="
              flex h-10 w-10
              shrink-0 items-center
              justify-center
              rounded-xl
              !bg-[#018A7C]/10
              !text-[#018A7C]
              !shadow-none
              dark:!text-[#32B6A5]
            "
          >
            <AiOutlineClose size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Description */}
        <p
          className="
            mt-6 border-b
            border-gray-200 pb-6
            text-sm leading-7
            text-gray-600
            dark:border-white/10
            dark:text-gray-300
          "
        >
          Build. Design. Innovate.
          <span className="mt-1 block">
            {t("nav.tagline")}
          </span>
        </p>

        {/* Mobile links */}
        <ul className="mt-6 space-y-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setNav(false)}
                  className={`
                    flex items-center
                    justify-between
                    rounded-xl px-4 py-3.5
                    text-sm font-semibold
                    transition duration-200

                    ${
                      isActive
                        ? `
                          bg-[#018A7C]/10
                          text-[#018A7C]
                          dark:text-[#32B6A5]
                        `
                        : `
                          text-gray-700
                          hover:bg-[#018A7C]/5
                          hover:text-[#018A7C]
                          dark:text-gray-300
                          dark:hover:text-[#32B6A5]
                        `
                    }
                  `}
                >
                  {item.name}

                  {isActive && (
                    <span
                      className="
                        h-2 w-2
                        rounded-full
                        bg-[#F5812D]
                      "
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile CTA */}
        <Link
          href="/#contact"
          onClick={() => setNav(false)}
          className="
            mt-7 inline-flex
            items-center justify-center
            gap-3 rounded-xl
            bg-[#018A7C]
            px-6 py-4
            text-sm font-semibold
            text-white
            transition duration-300
            hover:bg-[#007366]
          "
        >
          {t("nav.startProject")}
          <FaArrowRight aria-hidden="true" />
        </Link>

        {/* Social links */}
        <div className="mt-auto pt-10">
          <p
            className="
              text-xs font-bold
              uppercase tracking-widest
              text-[#DC422F]
              dark:text-[#FF725B]
            "
          >
            {t("nav.connect")}
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#018A7C]
                    hover:text-[#018A7C]
                    dark:border-white/10
                    dark:bg-[#121126]
                    dark:text-gray-300
                    dark:hover:text-[#32B6A5]
                  "
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}

            <a
              href="mailto:mr.asmar.web@gmail.com"
              aria-label="Email AsmarWeb Studio"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl border
                border-gray-200
                bg-white
                text-gray-700
                transition duration-300
                hover:-translate-y-1
                hover:border-[#018A7C]
                hover:text-[#018A7C]
                dark:border-white/10
                dark:bg-[#121126]
                dark:text-gray-300
                dark:hover:text-[#32B6A5]
              "
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>

          <p
            className="
              mt-8 text-xs
              text-gray-500
              dark:text-gray-400
            "
          >
            © {new Date().getFullYear()} AsmarWeb Studio
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
