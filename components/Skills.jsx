import useUiText from "../hooks/useUiText";
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";

/* ==========================================
   ASMARWEB STUDIO
   Skills & Technologies
========================================== */

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Technologies for building responsive and interactive web experiences.",
    icon: FaLaptopCode,
    skills: [
      {
        name: "HTML5",
        image: Html,
      },
      {
        name: "CSS3",
        image: Css,
      },
      {
        name: "JavaScript",
        image: Javascript,
      },
      {
        name: "React",
        image: ReactImg,
      },
      {
        name: "Next.js",
        image: NextJS,
      },
      {
        name: "Tailwind CSS",
        image: Tailwind,
      },
    ],
  },
  {
    id: "platforms",
    title: "Platforms & Services",
    description: "Tools and services used in application development.",
    icon: FaCode,
    skills: [
      {
        name: "Firebase",
        image: Firebase,
      },
    ],
  },
  {
    id: "workflow",
    title: "Development Workflow",
    description:
      "Tools that support version control and collaborative development.",
    icon: FaTools,
    skills: [
      {
        name: "GitHub",
        image: Github,
      },
    ],
  },
];

const SkillCard = ({ skill }) => {
  return (
    <div
      className="
        group flex flex-col
        items-center justify-center
        gap-4 rounded-2xl
        border border-gray-200
        bg-white p-5
        text-center
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#018A7C]/40
        hover:shadow-lg
        dark:border-white/10
        dark:bg-[#121126]
        dark:hover:border-[#32B6A5]/40
        sm:p-6
      "
    >
      {/* Skill icon */}
      <div
        className="
          flex h-20 w-20
          items-center justify-center
          rounded-2xl
          bg-[#F8FAF9]
          p-3
          transition-transform duration-300
          group-hover:scale-110
          dark:bg-white/5
        "
      >
        <Image
          src={skill.image}
          alt={`${skill.name} logo`}
          width={56}
          height={56}
          objectFit="contain"
        />
      </div>

      {/* Skill name */}
      <h4
        className="
          text-sm font-bold
          text-[#030017]
          dark:text-white
          sm:text-base
        "
      >
        {skill.name}
      </h4>

      {/* Decorative indicator */}
      <div
        aria-hidden="true"
        className="
          h-1 w-8
          rounded-full
          bg-[#018A7C]
          transition-all duration-300
          group-hover:w-12
          group-hover:bg-[#F5812D]
        "
      />
    </div>
  );
};

const Skills = () => {
  const uiText = useUiText();
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative w-full
        overflow-hidden
        bg-white py-20
        text-[#030017]
        transition-colors duration-300
        dark:bg-[#030017]
        dark:text-white
        md:py-28
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-20
          h-80 w-80 rounded-full
          bg-[#018A7C]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-32 bottom-20
          h-72 w-72 rounded-full
          bg-[#DC422F]/10
          blur-3xl
        "
      />

      <div className="studio-container relative z-10">
        {/* Section heading */}
        <div
          className="
            mx-auto mb-14
            max-w-3xl
            text-center
          "
        >
          <span className="studio-badge">Our Expertise</span>

          <h2
            id="skills-heading"
            className="
              mt-6 text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
            "
          >
            Technologies Behind{" "}
            <span className="studio-gradient-text">Our Work.</span>
          </h2>

          <p className="studio-description mt-5">
            A selection of technologies and development tools that support our
            approach to building modern digital experiences.
          </p>
        </div>

        {/* Skill groups */}
        <div className="space-y-14">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div key={group.id}>
                {/* Group heading */}
                <div
                  className="
                    mb-7 flex flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                  "
                >
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0 items-center
                      justify-center
                      rounded-xl
                      bg-[#018A7C]/10
                      text-[#018A7C]
                      dark:text-[#32B6A5]
                    "
                  >
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-xl font-extrabold
                        sm:text-2xl
                      "
                    >
                      {uiText(group.title)}
                    </h3>

                    <p
                      className="
                        mt-1 text-sm
                        leading-6
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      {uiText(group.description)}
                    </p>
                  </div>
                </div>

                {/* Skills grid */}
                <div
                  className="
                    grid grid-cols-2
                    gap-4
                    sm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-6
                  "
                >
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub & collaboration CTA */}
        <div
          className="
            mt-20 grid
            grid-cols-1 gap-8
            overflow-hidden
            rounded-3xl
            border border-[#018A7C]/20
            bg-[#F8FAF9]
            p-7
            dark:bg-[#121126]
            sm:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <span
              className="
                text-xs font-bold
                uppercase tracking-widest
                text-[#018A7C]
                dark:text-[#32B6A5]
              "
            >
              Learn · Build · Collaborate
            </span>

            <h3
              className="
                mt-3 text-2xl
                font-extrabold
                sm:text-3xl
              "
            >
              Technology Meets Creativity.
            </h3>

            <p
              className="
                mt-4 max-w-2xl
                text-sm leading-7
                text-gray-600
                dark:text-gray-300
                sm:text-base
              "
            >
              We combine technical development with creative thinking to build
              useful digital solutions. Explore our projects or connect with us
              to discuss an idea.
            </p>
          </div>

          <div
            className="
              flex flex-col gap-3
              sm:flex-row
              lg:flex-col
            "
          >
            <a
              href="https://github.com/AsmarWeb"
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
              <FaGithub aria-hidden="true" />
              Explore GitHub
              <FaArrowRight size={12} aria-hidden="true" />
            </a>

            <Link
              href="/#contact"
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
                dark:bg-[#030017]
                dark:text-white
                dark:hover:border-[#32B6A5]
                dark:hover:text-[#32B6A5]
              "
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
