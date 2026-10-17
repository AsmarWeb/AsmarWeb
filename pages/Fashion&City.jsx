import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaPaintBrush,
  FaLayerGroup,
  FaDesktop,
  FaCheckCircle,
  FaDribbble,
} from "react-icons/fa";

import propertyImg from "../public/assets/projects/property.jpg";

/* ==========================================
   ASMARWEB STUDIO
   Fashion & City Project Case Study
========================================== */

const project = {
  title: "Fashion & City",
  category: "UI/UX Design",
  type: "Fashion Website Concept",
  tools: ["Figma"],
  image: propertyImg,
  demoUrl: "https://dribbble.com/shots/19518816-Fashion-City-Web-Page",
};

const projectHighlights = [
  {
    icon: FaPaintBrush,
    title: "Visual Design",
    description:
      "A fashion-inspired interface concept with an emphasis on layout, typography, and visual presentation.",
  },
  {
    icon: FaDesktop,
    title: "Website Experience",
    description:
      "A webpage concept exploring how fashion-related content can be presented through a modern digital interface.",
  },
  {
    icon: FaLayerGroup,
    title: "UI/UX Structure",
    description:
      "A design approach focused on visual hierarchy, interface elements, and page composition.",
  },
];

const projectFeatures = [
  "UI/UX Design",
  "Fashion Website Concept",
  "Web Page Design",
  "Landing Page Design",
  "Visual Hierarchy",
  "Interface Layout",
];

const FashionCity = () => {
  return (
    <>
      <Head>
        <title>Fashion &amp; City — UI/UX Design | AsmarWeb Studio</title>

        <meta
          name="description"
          content="Explore Fashion & City, a fashion website UI/UX design concept created with Figma and featured in the AsmarWeb Studio portfolio."
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
              alt="Fashion and City website design preview"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Dark overlay */}
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
            {/* Back link */}
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
                Fashion <span className="text-[#F5812D]">&amp;</span> City
              </h1>

              <p
                className="
                  mt-5 max-w-2xl
                  text-base leading-8
                  text-gray-200
                  sm:text-xl
                "
              >
                A fashion-inspired website design concept exploring creativity,
                visual identity, and modern user experiences.
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
                  Where Fashion Meets{" "}
                  <span className="studio-gradient-text">Digital Design.</span>
                </h2>

                <p
                  className="
                    mt-6 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Fashion &amp; City is a UI/UX webpage design concept created
                  using Figma. The project explores the presentation of fashion
                  content through a modern website interface.
                </p>

                <p
                  className="
                    mt-5 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  The design focuses on visual composition, typography, page
                  structure, and interface consistency. It demonstrates an
                  approach to creating attractive digital experiences for
                  fashion-related brands.
                </p>

                {/* Project action */}
                <div className="mt-9">
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
                    <FaDribbble size={17} aria-hidden="true" />
                    View on Dribbble
                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                  </a>
                </div>

                {/* Design focus */}
                <div className="mt-16">
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                    "
                  >
                    Design Focus
                  </h3>

                  <div
                    className="
                      mt-7 grid
                      grid-cols-1 gap-5
                      md:grid-cols-2
                    "
                  >
                    {projectHighlights.map((highlight) => {
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

              {/* Sidebar */}
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
                  {/* Project type */}
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

                  {/* Tools */}
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
                      Design Tools
                    </p>

                    <div
                      className="
                        mt-3 flex flex-wrap
                        gap-2
                      "
                    >
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="
                              rounded-full
                              bg-[#018A7C]/10
                              px-3 py-1.5
                              text-xs font-semibold
                              text-[#018A7C]
                              dark:text-[#32B6A5]
                            "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design elements */}
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
                      Design Elements
                    </p>

                    <div
                      className="
                        mt-4 grid grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        lg:grid-cols-1
                      "
                    >
                      {projectFeatures.map((feature) => (
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
              <span className="studio-badge">Visual Preview</span>

              <h2
                className="
                  mt-5 text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Explore the{" "}
                <span className="studio-gradient-text">Design.</span>
              </h2>

              <p
                className="
                  mt-4 text-base
                  leading-8
                  text-gray-600
                  dark:text-gray-300
                "
              >
                A visual preview of the Fashion &amp; City interface concept.
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
                alt="Fashion and City UI/UX design showcase"
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
                Your Next Idea Deserves{" "}
                <span className="text-[#F5812D]">Great Design.</span>
              </h2>

              <p
                className="
                  mx-auto mt-5
                  max-w-xl
                  text-base leading-8
                  text-gray-300
                "
              >
                Have a website, brand, or digital product in mind? Let's explore
                how to turn your ideas into a creative experience.
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
};

export default FashionCity;
