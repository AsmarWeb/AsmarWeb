import useUiText from "../hooks/useUiText";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

import HeroImg from "../public/assets/asmarlogo.png";

/* ==========================================
   ASMARWEB STUDIO
   Hero Section
========================================== */

const services = [
  {
    title: "Web Development",
    icon: FaCode,
  },
  {
    title: "Creative Design",
    icon: FaPalette,
  },
  {
    title: "Digital Solutions",
    icon: FaLaptopCode,
  },
];

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

const Main = () => {
  const uiText = useUiText();
  return (
    <section
      id="home"
      aria-labelledby="studio-heading"
      className="
        relative isolate flex min-h-screen
        items-center overflow-hidden
        bg-white text-[#030017]
        transition-colors duration-300
        dark:bg-[#030017] dark:text-white
      "
    >
      {/* Background glow — brand colors */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-20
          h-96 w-96 rounded-full
          bg-[#018A7C]/10 blur-3xl
          dark:bg-[#018A7C]/20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-10
          h-72 w-72 rounded-full
          bg-[#DC422F]/10 blur-3xl
          dark:bg-[#DC422F]/15
        "
      />

      <div
        className="
          relative z-10 mx-auto grid
          w-full max-w-7xl
          grid-cols-1 items-center
          gap-12 px-6 pb-16 pt-36
          sm:px-8 lg:grid-cols-2
          lg:gap-16 lg:pb-24
        "
      >
        {/* LEFT — Studio information */}
        <div className="text-center lg:text-left">
          {/* Studio badge */}
          <div
            className="
              mb-7 inline-flex items-center
              gap-2 rounded-full
              border border-[#018A7C]/30
              bg-[#018A7C]/10
              px-5 py-2
              text-xs font-semibold
              uppercase tracking-widest
              text-[#018A7C]
              dark:text-[#32B6A5]
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-[#F5812D]
              "
            />
            {uiText("Creative & Technology Studio")}
          </div>

          {/* Main heading */}
          <h1
            id="studio-heading"
            className="
              text-5xl font-extrabold
              leading-tight tracking-tight
              sm:text-6xl xl:text-7xl
            "
          >
            AsmarWeb
            <span
              className="
                block text-[#018A7C]
                dark:text-[#32B6A5]
              "
            >
              Studio.
            </span>
          </h1>

          {/* Animated headline */}
          <div
            className="
              mt-7 min-h-[80px]
              text-xl font-bold
              text-[#030017]
              dark:text-gray-100
              sm:text-2xl
            "
          >
            <Typewriter
              options={{
                strings: [
                  uiText("We Build Digital Experiences."),
                  uiText("We Design Creative Brands."),
                  uiText("We Develop Smart Solutions."),
                  uiText("We Innovate Together."),
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 30,
              }}
            />
          </div>

          {/* Studio description */}
          <p
            className="
              mx-auto mt-4 max-w-xl
              text-base leading-8
              text-gray-600
              dark:text-gray-300
              lg:mx-0 lg:text-lg
            "
          >
            {uiText("We are a creative technology studio specializing in web development, software platforms, UI/UX design, branding, and digital solutions. We bring developers, designers, and creative minds together to transform ideas into meaningful digital experiences.")}
          </p>

          {/* Action buttons */}
          <div
            className="
              mt-9 flex flex-col
              justify-center gap-4
              sm:flex-row
              lg:justify-start
            "
          >
            {/* Primary action */}
            <Link
              href="/#projects"
              className="
                inline-flex items-center
                justify-center gap-3
                rounded-xl
                bg-[#018A7C]
                px-7 py-4
                font-semibold text-white
                shadow-lg
                shadow-[#018A7C]/20
                transition duration-300
                hover:-translate-y-1
                hover:bg-[#007366]
              "
            >
              {uiText("Explore Our Work")}
              <FaArrowRight aria-hidden="true" />
            </Link>

            {/* Secondary action */}
            <Link
              href="/#contact"
              className="
                inline-flex items-center
                justify-center
                rounded-xl border
                border-[#DC422F]/40
                bg-white px-7 py-4
                font-semibold
                text-[#030017]
                transition duration-300
                hover:-translate-y-1
                hover:border-[#DC422F]
                hover:text-[#DC422F]
                dark:bg-[#121126]
                dark:text-white
                dark:hover:text-[#FF725B]
              "
            >
              {uiText("Start a Project")}
            </Link>
          </div>

          {/* Social media links */}
          <div
            className="
              mt-9 flex items-center
              justify-center gap-4
              lg:justify-start
            "
          >
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
                    rounded-full border
                    border-gray-200
                    bg-white text-lg
                    text-[#5C5C5C]
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-[#018A7C]
                    hover:text-[#018A7C]
                    dark:border-white/15
                    dark:bg-[#121126]
                    dark:text-gray-300
                    dark:hover:border-[#32B6A5]
                    dark:hover:text-[#32B6A5]
                  "
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Services */}
          <div
            className="
              mt-10 flex flex-wrap
              items-center justify-center
              gap-x-6 gap-y-4
              border-t border-gray-200
              pt-6
              dark:border-white/10
              lg:justify-start
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              const iconColors = [
                "text-[#018A7C] dark:text-[#32B6A5]",
                "text-[#DC422F] dark:text-[#FF725B]",
                "text-[#F5812D]",
              ];

              return (
                <div
                  key={uiText(service.title)}
                  className="
                    flex items-center gap-2
                    text-sm font-medium
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  <Icon className={iconColors[index]} aria-hidden="true" />

                  {uiText(service.title)}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Studio logo */}
        <div
          className="
            relative flex items-center
            justify-center
          "
        >
          {/* Teal glow */}
          <div
            aria-hidden="true"
            className="
              absolute h-72 w-72
              rounded-full
              bg-[#018A7C]/15
              blur-3xl
              dark:bg-[#018A7C]/25
              sm:h-96 sm:w-96
            "
          />

          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="
              absolute h-80 w-80
              rounded-full border
              border-[#DC422F]/15
              sm:h-[420px] sm:w-[420px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute h-64 w-64
              rounded-full border
              border-[#F5812D]/20
              sm:h-[350px] sm:w-[350px]
            "
          />

          {/* Logo container */}
          <div
            className="
              relative flex h-72 w-72
              items-center justify-center
              rounded-full border
              border-[#018A7C]/20
              bg-white/90 p-8
              shadow-2xl
              shadow-[#018A7C]/10
              transition duration-500
              hover:scale-[1.03]
              dark:bg-[#121126]
              dark:shadow-[#018A7C]/20
              sm:h-96 sm:w-96
            "
          >
            <Image
              src={HeroImg}
              alt="AsmarWeb Studio Logo"
              width={320}
              height={320}
              priority
              objectFit="contain"
            />
          </div>

          {/* Orange accent */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-8 right-8
              h-5 w-5 rounded-full
              bg-[#F5812D]
              shadow-lg
              shadow-[#F5812D]/30
              sm:bottom-12 sm:right-12
            "
          />

          {/* Coral accent */}
          <div
            aria-hidden="true"
            className="
              absolute left-8 top-8
              h-3 w-3 rounded-full
              bg-[#DC422F]
              sm:left-12 sm:top-12
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
