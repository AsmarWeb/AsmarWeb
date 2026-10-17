import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaCar,
  FaMobileAlt,
  FaLaptop,
  FaShoppingBag,
  FaCode,
  FaDatabase,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

import murwajImg from "../public/assets/projects/murwaj.jpg";

/* ==========================================
   ASMARWEB STUDIO
   Murwaj — Project Case Study
========================================== */

const project = {
  title: "Murwaj",
  category: "Web Platform Development",
  type: "Classified Ads Marketplace",
  status: "Under Development",

  image: murwajImg,

  websiteUrl: "https://www.murwaj.com/",

  githubUrl: "https://github.com/AsmarWeb/murwaj",

  technologies: [
    "Laravel",
    "PHP",
    "Alpine.js",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "MySQL",
    "Bootstrap",
    "CSS",
  ],
};

const categories = [
  {
    icon: FaCar,
    title: "Vehicles",
    description:
      "A marketplace category for buying and selling used cars and other vehicles.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Phones",
    description:
      "A dedicated category concept for mobile phones and related listings.",
  },
  {
    icon: FaLaptop,
    title: "Computers",
    description:
      "A category for computers, laptops, and related technology products.",
  },
  {
    icon: FaShoppingBag,
    title: "General Classifieds",
    description:
      "A broader marketplace concept supporting listings across different product categories.",
  },
];

const developmentAreas = [
  "Classified Listings",
  "Product Categories",
  "Marketplace Interface",
  "Responsive Web Design",
  "Backend Development",
  "Database Integration",
];

export default function Murwaj() {
  return (
    <>
      <Head>
        <title>Murwaj — Classified Marketplace | AsmarWeb Studio</title>

        <meta
          name="description"
          content="Discover Murwaj, a classified ads marketplace project under development for buying and selling vehicles, mobile phones, computers, and more."
        />
      </Head>

      <main
        className="
          min-h-screen
          bg-white
          text-[#030017]
          transition-colors duration-300
          dark:bg-[#030017]
          dark:text-white
        "
      >
        {/* ==================================
            PROJECT HERO
        ================================== */}
        <section
          className="
            relative flex
            min-h-[440px]
            items-end overflow-hidden
            bg-[#030017]
            pb-16 pt-36
            text-white
            md:min-h-[560px]
            md:pb-20
          "
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt="Murwaj classified marketplace project preview"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Overlay */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#030017]
              via-[#030017]/85
              to-[#030017]/45
            "
          />

          {/* Accent */}
          <div
            aria-hidden="true"
            className="
              absolute right-0 top-0
              h-full w-1
              bg-[#018A7C]
            "
          />

          <div className="studio-container relative z-10 w-full">
            <Link
              href="/#projects"
              className="
                mb-10 inline-flex
                items-center gap-2
                text-sm font-semibold
                text-gray-200
                transition-colors
                hover:text-[#32B6A5]
              "
            >
              <FaArrowLeft size={12} aria-hidden="true" />
              Back to Projects
            </Link>

            {/* Status and category */}
            <div className="flex flex-wrap gap-3">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#32B6A5]/40
                  bg-[#018A7C]/20
                  px-4 py-2
                  text-xs font-bold
                  uppercase tracking-widest
                  text-[#7BE0D1]
                "
              >
                {project.category}
              </span>

              <span
                className="
                  inline-flex items-center
                  gap-2 rounded-full
                  border border-[#F5812D]/40
                  bg-[#F5812D]/15
                  px-4 py-2
                  text-xs font-bold
                  text-[#FFB37C]
                "
              >
                <FaTools size={12} aria-hidden="true" />

                {project.status}
              </span>
            </div>

            <div className="mt-6 max-w-3xl">
              <h1
                className="
                  text-5xl
                  font-extrabold
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Murwaj
                <span className="text-[#F5812D]">.</span>
              </h1>

              <p
                className="
                  mt-5 max-w-2xl
                  text-base leading-8
                  text-gray-200
                  sm:text-xl
                "
              >
                A classified marketplace project designed around buying and
                selling vehicles, mobile phones, computers, and everyday
                products.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================
            PROJECT OVERVIEW
        ================================== */}
        <section className="studio-section">
          <div className="studio-container">
            <div
              className="
                grid grid-cols-1
                items-start gap-10
                lg:grid-cols-[minmax(0,1fr)_320px]
                lg:gap-14
              "
            >
              {/* Main content */}
              <div>
                <span className="studio-badge">Project Overview</span>

                <h2
                  className="
                    mt-5 text-3xl
                    font-extrabold
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  A Marketplace for{" "}
                  <span className="studio-gradient-text">
                    Everyday Trading.
                  </span>
                </h2>

                <p
                  className="
                    mt-6 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Murwaj is a classified advertising platform project focused on
                  connecting buyers and sellers across multiple product
                  categories.
                </p>

                <p
                  className="
                    mt-5 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  The platform concept covers used vehicles, mobile phones,
                  computers, and other goods. Its development explores how
                  modern web technologies can support a structured online
                  classifieds experience.
                </p>

                {/* Development status */}
                <div
                  className="
                    mt-7 flex items-start
                    gap-4 rounded-2xl
                    border border-[#F5812D]/25
                    bg-[#F5812D]/5
                    p-5
                  "
                >
                  <FaTools
                    size={21}
                    aria-hidden="true"
                    className="
                      mt-1 shrink-0
                      text-[#F5812D]
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-base font-bold
                      "
                    >
                      Development in Progress
                    </h3>

                    <p
                      className="
                        mt-2 text-sm
                        leading-7
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      Murwaj is listed as an ongoing project. Features,
                      availability, and the live website may change during
                      development.
                    </p>
                  </div>
                </div>

                {/* Project actions */}
                <div
                  className="
                    mt-9 flex flex-wrap
                    items-center gap-4
                  "
                >
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      justify-center gap-3
                      rounded-xl
                      bg-[#018A7C]
                      px-6 py-3.5
                      text-sm font-semibold
                      text-white
                      transition duration-300
                      hover:bg-[#007366]
                    "
                  >
                    Visit Website
                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      justify-center gap-3
                      rounded-xl border
                      border-gray-200
                      bg-white
                      px-6 py-3.5
                      text-sm font-semibold
                      text-[#030017]
                      transition duration-300
                      hover:border-[#018A7C]
                      hover:text-[#018A7C]
                      dark:border-white/10
                      dark:bg-[#121126]
                      dark:text-white
                      dark:hover:border-[#32B6A5]
                      dark:hover:text-[#32B6A5]
                    "
                  >
                    <FaGithub size={18} aria-hidden="true" />
                    View Repository
                  </a>
                </div>

                {/* ==================================
                    MARKETPLACE CATEGORIES
                ================================== */}
                <div className="mt-16">
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                    "
                  >
                    Marketplace Categories
                  </h3>

                  <p
                    className="
                      mt-3 text-sm
                      leading-7
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    The marketplace concept is organized around different types
                    of products and listings.
                  </p>

                  <div
                    className="
                      mt-7 grid
                      grid-cols-1 gap-5
                      md:grid-cols-2
                    "
                  >
                    {categories.map((category) => {
                      const Icon = category.icon;

                      return (
                        <div
                          key={category.title}
                          className="
                              rounded-2xl
                              border border-gray-200
                              bg-[#F8FAF9]
                              p-6
                              transition-all
                              hover:border-[#018A7C]/40
                              dark:border-white/10
                              dark:bg-[#121126]
                            "
                        >
                          <div
                            className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-xl
                                bg-[#018A7C]/10
                                text-[#018A7C]
                                dark:text-[#32B6A5]
                              "
                          >
                            <Icon size={22} aria-hidden="true" />
                          </div>

                          <h4
                            className="
                                mt-5 text-lg
                                font-bold
                              "
                          >
                            {category.title}
                          </h4>

                          <p
                            className="
                                mt-3 text-sm
                                leading-7
                                text-gray-600
                                dark:text-gray-300
                              "
                          >
                            {category.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ==================================
                    DEVELOPMENT AREAS
                ================================== */}
                <div className="mt-16">
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                    "
                  >
                    Development Focus
                  </h3>

                  <p
                    className="
                      mt-3 text-sm
                      leading-7
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    Key areas involved in building the classified marketplace
                    experience. This list describes development scope, not
                    verified completion.
                  </p>

                  <div
                    className="
                      mt-6 grid
                      grid-cols-1 gap-4
                      sm:grid-cols-2
                    "
                  >
                    {developmentAreas.map((area) => (
                      <div
                        key={area}
                        className="
                            flex items-center
                            gap-3 rounded-xl
                            border border-gray-200
                            bg-white p-4
                            text-sm font-medium
                            dark:border-white/10
                            dark:bg-[#121126]
                          "
                      >
                        <FaCheckCircle
                          size={15}
                          aria-hidden="true"
                          className="
                              shrink-0
                              text-[#018A7C]
                              dark:text-[#32B6A5]
                            "
                        />

                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================
                  PROJECT SIDEBAR
              ================================== */}
              <aside
                className="
                  rounded-2xl
                  border border-gray-200
                  bg-[#F8FAF9]
                  p-6 shadow-sm
                  dark:border-white/10
                  dark:bg-[#121126]
                  lg:sticky
                  lg:top-28
                "
              >
                <h3
                  className="
                    text-xl
                    font-extrabold
                  "
                >
                  Project Details
                </h3>

                <div className="mt-6 space-y-5">
                  {/* Type */}
                  <div>
                    <p
                      className="
                        text-xs font-bold
                        uppercase tracking-widest
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Project Type
                    </p>

                    <p
                      className="
                        mt-2 text-sm
                        font-semibold
                      "
                    >
                      {project.type}
                    </p>
                  </div>

                  {/* Status */}
                  <div
                    className="
                      border-t border-gray-200
                      pt-5
                      dark:border-white/10
                    "
                  >
                    <p
                      className="
                        text-xs font-bold
                        uppercase tracking-widest
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Development Status
                    </p>

                    <span
                      className="
                        mt-3 inline-flex
                        items-center gap-2
                        rounded-full
                        bg-[#F5812D]/10
                        px-3 py-1.5
                        text-xs font-bold
                        text-[#C66A21]
                        dark:text-[#FFB37C]
                      "
                    >
                      <FaTools size={11} aria-hidden="true" />

                      {project.status}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div
                    className="
                      border-t border-gray-200
                      pt-5
                      dark:border-white/10
                    "
                  >
                    <p
                      className="
                        text-xs font-bold
                        uppercase tracking-widest
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Technologies
                    </p>

                    <div
                      className="
                        mt-3 flex flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                              rounded-full
                              bg-[#018A7C]/10
                              px-3 py-1.5
                              text-xs font-semibold
                              text-[#018A7C]
                              dark:text-[#32B6A5]
                            "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div
                    className="
                      border-t border-gray-200
                      pt-5
                      dark:border-white/10
                    "
                  >
                    <p
                      className="
                        text-xs font-bold
                        uppercase tracking-widest
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Project Links
                    </p>

                    <div className="mt-4 space-y-3">
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center
                          justify-between gap-3
                          text-sm font-semibold
                          text-[#018A7C]
                          hover:underline
                          dark:text-[#32B6A5]
                        "
                      >
                        Live Website
                        <FaExternalLinkAlt size={11} aria-hidden="true" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center
                          justify-between gap-3
                          text-sm font-semibold
                          text-[#018A7C]
                          hover:underline
                          dark:text-[#32B6A5]
                        "
                      >
                        GitHub Repository
                        <FaGithub size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ==================================
            PROJECT PREVIEW
        ================================== */}
        <section
          className="
            bg-[#F8FAF9] py-16
            dark:bg-[#0B0A1C]
            md:py-20
          "
        >
          <div className="studio-container">
            <div className="mb-8 max-w-2xl">
              <span className="studio-badge">Platform Preview</span>

              <h2
                className="
                  mt-5 text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Explore <span className="studio-gradient-text">Murwaj.</span>
              </h2>

              <p
                className="
                  mt-4 text-base
                  leading-8
                  text-gray-600
                  dark:text-gray-300
                "
              >
                A visual preview of the Murwaj classified marketplace project.
              </p>
            </div>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-white p-3
                shadow-xl
                dark:border-white/10
                dark:bg-[#121126]
                sm:p-5
              "
            >
              <Image
                src={project.image}
                alt="Murwaj marketplace interface preview"
                layout="responsive"
                width={1200}
                height={750}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  justify-center gap-3
                  rounded-xl
                  bg-[#018A7C]
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#007366]
                "
              >
                Explore Website
                <FaExternalLinkAlt size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================
            COLLABORATION CTA
        ================================== */}
        <section className="studio-section">
          <div className="studio-container">
            <div
              className="
                rounded-3xl
                bg-[#030017]
                px-6 py-12
                text-center
                text-white
                sm:px-10
                md:py-16
              "
            >
              <span
                className="
                  text-xs font-bold
                  uppercase tracking-widest
                  text-[#32B6A5]
                "
              >
                Build With AsmarWeb Studio
              </span>

              <h2
                className="
                  mx-auto mt-5
                  max-w-2xl
                  text-3xl font-extrabold
                  sm:text-4xl
                "
              >
                Have a Platform <span className="text-[#F5812D]">Idea?</span>
              </h2>

              <p
                className="
                  mx-auto mt-5
                  max-w-xl
                  text-base leading-8
                  text-gray-300
                "
              >
                From marketplace concepts to custom web applications, let's
                explore the right approach for your digital project.
              </p>

              <div
                className="
                  mt-9 flex flex-wrap
                  items-center justify-center
                  gap-4
                "
              >
                <Link
                  href="/#contact"
                  className="
                    inline-flex items-center
                    justify-center gap-3
                    rounded-xl
                    bg-[#018A7C]
                    px-6 py-3.5
                    text-sm font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#007366]
                  "
                >
                  Start a Conversation
                  <FaArrowRight size={13} aria-hidden="true" />
                </Link>

                <Link
                  href="/#projects"
                  className="
                    inline-flex items-center
                    justify-center gap-3
                    rounded-xl
                    border border-white/20
                    px-6 py-3.5
                    text-sm font-semibold
                    text-white
                    transition duration-300
                    hover:border-[#F5812D]
                    hover:bg-white/5
                  "
                >
                  <FaArrowLeft size={12} aria-hidden="true" />
                  More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
