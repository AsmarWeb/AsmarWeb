import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaWordpress,
  FaShoppingCart,
  FaMobileAlt,
  FaEnvelope,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";

import twitchImg from "../public/assets/projects/twitch.jpg";

/* ==========================================
   ASMARWEB STUDIO
   November Furniture — Project Showcase
========================================== */

const project = {
  title: "November Furniture",
  category: "WordPress / E-commerce",
  type: "Furniture Website",
  image: twitchImg,

  websiteUrl: "https://novemberfurniture.com/",
  githubUrl: "https://github.com/AsmarWeb",

  technologies: [
    "WordPress",
    "WooCommerce",
    "Mailchimp",
    "HTML",
    "JavaScript",
    "Elementor",
    "Themes & Plugins",
  ],
};

const highlights = [
  {
    icon: FaWordpress,
    title: "WordPress Website",
    description:
      "A furniture-focused website experience using WordPress and a design tailored to product presentation.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Experience",
    description:
      "A storefront-oriented layout exploring furniture collections, product presentation, and shopping functionality.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "A layout designed to adapt across desktop, tablet, and mobile screen sizes.",
  },
  {
    icon: FaEnvelope,
    title: "Customer Enquiries",
    description:
      "A contact and enquiry section that helps visitors communicate with the business.",
  },
  {
    icon: FaInstagram,
    title: "Social Integration",
    description:
      "An Instagram feed section for presenting visual content and connecting the website with social media.",
  },
  {
    icon: FaEnvelope,
    title: "Newsletter Signup",
    description:
      "A newsletter subscription area intended to support ongoing communication with customers.",
  },
];

const features = [
  "Furniture Website Design",
  "WordPress CMS",
  "WooCommerce",
  "Responsive Layout",
  "Customer Enquiry Form",
  "Instagram Feed",
  "Newsletter Signup",
  "Footer Design",
];

export default function NovemberFurniture() {
  return (
    <>
      <Head>
        <title>November Furniture — WordPress Website | AsmarWeb Studio</title>

        <meta
          name="description"
          content="Explore November Furniture, a WordPress furniture website project featuring responsive design, e-commerce elements, customer enquiries, and newsletter integration."
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
              alt="November Furniture website preview"
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
                November <span className="text-[#F5812D]">Furniture.</span>
              </h1>

              <p
                className="
                  mt-5 max-w-2xl
                  text-base leading-8
                  text-gray-200
                  sm:text-xl
                "
              >
                A furniture-inspired WordPress website experience combining
                product presentation, responsive design, and customer
                engagement.
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
                  Bringing Furniture{" "}
                  <span className="studio-gradient-text">Online.</span>
                </h2>

                <p
                  className="
                    mt-6 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  November Furniture is a WordPress website project centered on
                  presenting furniture products through a modern digital
                  storefront experience.
                </p>

                <p
                  className="
                    mt-5 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  The project description highlights a responsive website
                  recreation styled with furniture themes. It includes a footer
                  area with a customer enquiry form, Instagram feed, and
                  newsletter signup section.
                </p>

                <p
                  className="
                    mt-5 text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  The overall concept brings together product presentation,
                  visual content, and communication elements to support a
                  furniture-focused online presence.
                </p>

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
                    Explore GitHub
                  </a>
                </div>

                {/* ==================================
                    PROJECT HIGHLIGHTS
                ================================== */}
                <div className="mt-16">
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                    "
                  >
                    Key Highlights
                  </h3>

                  <p
                    className="
                      mt-3 text-sm
                      leading-7
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    The main design and website elements described in the
                    project.
                  </p>

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
                      Technologies & Tools
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

                  {/* Features */}
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
                      Website Elements
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

                  {/* Website */}
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
                      Website
                    </p>

                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-3 inline-flex
                        items-center gap-2
                        break-all
                        text-sm font-semibold
                        text-[#018A7C]
                        hover:underline
                        dark:text-[#32B6A5]
                      "
                    >
                      novemberfurniture.com
                      <FaExternalLinkAlt size={11} aria-hidden="true" />
                    </a>
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
              <span className="studio-badge">Website Preview</span>

              <h2
                className="
                  mt-5 text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Explore the{" "}
                <span className="studio-gradient-text">Website.</span>
              </h2>

              <p
                className="
                  mt-4 text-base
                  leading-8
                  text-gray-600
                  dark:text-gray-300
                "
              >
                A visual preview of the November Furniture website project.
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
                alt="November Furniture website design showcase"
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
                Visit Website
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
                Ready to Bring Your{" "}
                <span className="text-[#F5812D]">Brand Online?</span>
              </h2>

              <p
                className="
                  mx-auto mt-5
                  max-w-xl
                  text-base leading-8
                  text-gray-300
                "
              >
                From business websites to online stores, let's explore a digital
                experience tailored to your products and customers.
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
