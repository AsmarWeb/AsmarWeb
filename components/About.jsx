import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaCode,
  FaPalette,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import AboutImg from "../public/assets/about.jpg";

/* ==========================================
   ASMARWEB STUDIO
   About Section
========================================== */

const expertise = [
  {
    title: "Software Development",
    icon: FaCode,
    color: "text-[#018A7C] dark:text-[#32B6A5]",
    background: "bg-[#018A7C]/10",
  },
  {
    title: "Creative Design",
    icon: FaPalette,
    color: "text-[#DC422F] dark:text-[#FF725B]",
    background: "bg-[#DC422F]/10",
  },
  {
    title: "Collaboration",
    icon: FaUsers,
    color: "text-[#F5812D]",
    background: "bg-[#F5812D]/10",
  },
];

const strengths = [
  "Full-Stack Web Development",
  "UI/UX & Graphic Design",
  "Branding & Social Media Design",
  "Business Platforms & Digital Solutions",
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative w-full overflow-hidden
        bg-[#F8FAF9] py-20
        text-[#030017]
        transition-colors duration-300
        dark:bg-[#0B0A1C]
        dark:text-white
        md:py-28
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-10
          h-80 w-80 rounded-full
          bg-[#018A7C]/5 blur-3xl
          dark:bg-[#018A7C]/10
        "
      />

      <div className="studio-container relative z-10">
        <div
          className="
            grid grid-cols-1
            items-center gap-12
            lg:grid-cols-12 lg:gap-16
          "
        >
          {/* LEFT — Studio image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative border */}
              <div
                aria-hidden="true"
                className="
                  absolute -left-4 -top-4
                  h-24 w-24
                  rounded-tl-3xl
                  border-l-4 border-t-4
                  border-[#018A7C]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute -bottom-4 -right-4
                  h-24 w-24
                  rounded-br-3xl
                  border-b-4 border-r-4
                  border-[#DC422F]
                "
              />

              {/* Image card */}
              <div
                className="
                  relative overflow-hidden
                  rounded-3xl
                  border border-gray-200
                  bg-white p-3
                  shadow-2xl
                  shadow-gray-300/30
                  dark:border-white/10
                  dark:bg-[#121126]
                  dark:shadow-black/30
                "
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={AboutImg}
                    alt="AsmarWeb Studio creative and development work"
                    layout="responsive"
                    width={600}
                    height={650}
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Floating studio badge */}
              <div
                className="
                  absolute -bottom-5 left-4
                  rounded-2xl
                  border border-[#018A7C]/20
                  bg-white px-5 py-4
                  shadow-xl
                  dark:bg-[#121126]
                  sm:left-8
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl bg-[#018A7C]/10
                      text-[#018A7C]
                      dark:text-[#32B6A5]
                    "
                  >
                    <FaCode size={20} />
                  </span>

                  <div>
                    <p
                      className="
                        text-sm font-bold
                        text-[#030017]
                        dark:text-white
                      "
                    >
                      AsmarWeb Studio
                    </p>

                    <p
                      className="
                        text-xs text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Build • Design • Innovate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — About content */}
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            {/* Section label */}
            <span className="studio-badge">About Our Studio</span>

            {/* Heading */}
            <h2
              id="about-heading"
              className="
                mt-6 text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Where Technology Meets{" "}
              <span className="studio-gradient-text">Creativity.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 text-base
                leading-8 text-gray-600
                dark:text-gray-300
                lg:text-lg
              "
            >
              AsmarWeb Studio is an independent creative technology studio
              focused on building digital products, designing memorable
              experiences, and helping businesses establish a stronger digital
              presence.
            </p>

            <p
              className="
                mt-4 text-base
                leading-8 text-gray-600
                dark:text-gray-300
                lg:text-lg
              "
            >
              Founded on a passion for software development, graphic design, and
              digital innovation, the studio combines technical expertise with
              creative thinking to deliver practical and engaging solutions.
            </p>

            <p
              className="
                mt-4 text-base
                leading-8 text-gray-600
                dark:text-gray-300
                lg:text-lg
              "
            >
              Our vision is to grow into a collaborative studio where
              developers, designers, and creative professionals work together on
              meaningful projects, including open-source initiatives.
            </p>

            {/* Expertise */}
            <div
              className="
                mt-8 grid grid-cols-1
                gap-4 sm:grid-cols-3
              "
            >
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex items-center
                      gap-3 rounded-xl
                      border border-gray-200
                      bg-white p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      dark:border-white/10
                      dark:bg-[#121126]
                    "
                  >
                    <div
                      className={`
                        flex h-10 w-10
                        shrink-0 items-center
                        justify-center
                        rounded-lg
                        ${item.background}
                      `}
                    >
                      <Icon className={item.color} aria-hidden="true" />
                    </div>

                    <span
                      className="
                        text-sm font-semibold
                        text-[#030017]
                        dark:text-white
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Skills list */}
            <div
              className="
                mt-8 grid grid-cols-1
                gap-4 sm:grid-cols-2
              "
            >
              {strengths.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex items-center
                    gap-3 text-sm
                    font-medium
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
                    aria-hidden="true"
                  />

                  {skill}
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div
              className="
                mt-10 flex flex-wrap
                items-center gap-4
              "
            >
              <Link href="/#projects" className="studio-btn-primary">
                Explore Our Projects
                <FaArrowRight aria-hidden="true" />
              </Link>

              <Link href="/#contact" className="studio-btn-secondary">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
