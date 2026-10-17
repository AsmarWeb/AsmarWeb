import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaDesktop,
  FaLayerGroup,
  FaEnvelopeOpenText,
  FaCheckCircle,
} from "react-icons/fa";

import netflixImg from "../public/assets/projects/netflix.jpg";

/* ==========================================
   ASMARWEB STUDIO
   Landing Page — Project Showcase
========================================== */

const project = {
  title: "Landing Page",
  category: "Web Design / Frontend",
  type: "Product & Service Landing Page",
  image: netflixImg,

  demoUrl: "https://demos.onepagelove.com/html/ava/",

  githubUrl: "https://github.com/AsmarWeb",

  technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"],
};

const highlights = [
  {
    icon: FaDesktop,
    title: "Landing Page Design",
    description:
      "A focused page structure for introducing a product or service with clear visual sections.",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Lead Capture",
    description:
      "An introductory signup or contact field designed to encourage visitors to take action.",
  },
  {
    icon: FaLayerGroup,
    title: "Product Showcase",
    description:
      "A screenshot preview area and content sections that help explain the product or service.",
  },
  {
    icon: FaCode,
    title: "Frontend Structure",
    description:
      "An exploration of responsive layouts, interface styling, and familiar frontend technologies.",
  },
];

const features = [
  "Landing Page Layout",
  "Lead Capture Section",
  "Screenshot Preview",
  "Product Overview",
  "Service Presentation",
  "Call-to-Action Elements",
  "Responsive Design",
];

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Landing Page — Web Design | AsmarWeb Studio</title>

        <meta
          name="description"
          content="Explore a product and service landing page showcase featuring lead capture, screenshot previews, and modern frontend design concepts."
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
            min-h-[430px]
            items-end overflow-hidden
            bg-[#030017]
            pb-16 pt-36
            text-white
            md:min-h-[540px]
            md:pb-20
          "
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt="Landing page design preview"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#030017]
              via-[#030017]/80
              to-[#030017]/40
            "
          />

          {/* Accent line */}
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

            <div className="max-w-3xl">
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

              <h1
                className="
                  mt-6 text-5xl
                  font-extrabold
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Landing <span className="text-[#F5812D]">Page.</span>
              </h1>

              <p
                className="
                  mt-5 max-w-2xl
                  text-base leading-8
                  text-gray-200
                  sm:text-xl
                "
              >
                Exploring engaging landing page experiences through clear
                content structure, product presentation, and purposeful design.
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
                  A Landing Page{" "}
                  <span className="studio-gradient-text">
                    Built to Communicate.
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
                  This landing page showcase explores how a single-page website
                  can introduce a product or service through focused content and
                  engaging visuals.
                </p>

                <p
                  className="
                    mt-5 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  The referenced Ava landing page includes an introductory lead
                  capture field, a screenshot preview area, and sections
                  dedicated to explaining product or service features.
                </p>

                {/* Attribution */}
                <div
                  className="
                    mt-6 rounded-xl
                    border-l-4
                    border-[#F5812D]
                    bg-[#F5812D]/5
                    px-5 py-4
                    text-sm leading-7
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <strong>Reference note:</strong> The external demo showcases
                  the Ava landing page hosted on One Page Love. It is included
                  as a design reference, not as a claim of original development
                  of that template.
                </div>

                {/* Action buttons */}
                <div
                  className="
                    mt-9 flex flex-wrap
                    items-center gap-4
                  "
                >
                  <a
                    href={project.demoUrl}
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
                    View Reference Demo
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
                    <FaGithub size={17} aria-hidden="true" />
                    Explore GitHub
                  </a>
                </div>

                {/* Highlights */}
                <div className="mt-16">
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                    "
                  >
                    Key Highlights
                  </h3>

                  <div
                    className="
                      mt-7 grid
                      grid-cols-1 gap-5
                      md:grid-cols-2
                    "
                  >
                    {highlights.map((highlight) => {
                      const Icon = highlight.icon;

                      return (
                        <div
                          key={highlight.title}
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
                            <Icon size={21} aria-hidden="true" />
                          </div>

                          <h4
                            className="
                                mt-5 text-lg
                                font-bold
                              "
                          >
                            {highlight.title}
                          </h4>

                          <p
                            className="
                                mt-3 text-sm
                                leading-7
                                text-gray-600
                                dark:text-gray-300
                              "
                          >
                            {highlight.description}
                          </p>
                        </div>
                      );
                    })}
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
                      Technologies Listed
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
                      Page Elements
                    </p>

                    <div
                      className="
                        mt-4 grid grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        lg:grid-cols-1
                      "
                    >
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className="
                              flex items-center
                              gap-3 text-sm
                              text-gray-700
                              dark:text-gray-300
                            "
                        >
                          <FaCheckCircle
                            className="
                                shrink-0
                                text-[#018A7C]
                                dark:text-[#32B6A5]
                              "
                            size={14}
                            aria-hidden="true"
                          />

                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ==================================
            VISUAL PREVIEW
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
              <span className="studio-badge">Visual Preview</span>

              <h2
                className="
                  mt-5 text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Explore the{" "}
                <span className="studio-gradient-text">Layout.</span>
              </h2>

              <p
                className="
                  mt-4 text-base
                  leading-8
                  text-gray-600
                  dark:text-gray-300
                "
              >
                A closer look at the landing page's visual structure and
                presentation.
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
                alt="Landing page visual showcase"
                layout="responsive"
                width={1200}
                height={750}
                objectFit="contain"
                className="rounded-xl"
              />
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
                Let's Create Together
              </span>

              <h2
                className="
                  mx-auto mt-5
                  max-w-2xl
                  text-3xl font-extrabold
                  sm:text-4xl
                "
              >
                Need a Landing Page{" "}
                <span className="text-[#F5812D]">That Stands Out?</span>
              </h2>

              <p
                className="
                  mx-auto mt-5
                  max-w-xl
                  text-base leading-8
                  text-gray-300
                "
              >
                Let's explore how a focused design and modern frontend approach
                can help present your product, service, or business.
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
                    transition duration-300
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
