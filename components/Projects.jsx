import React, { useState } from "react";
import Link from "next/link";

import { FaArrowRight, FaGithub, FaLayerGroup } from "react-icons/fa";

import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import aqmishaImg from "../public/assets/projects/aqmisha.jpg";
import murwajImg from "../public/assets/projects/murwaj.jpg";

import ProjectItem from "./ProjectItem";

/* ==========================================
   ASMARWEB STUDIO
   Projects & Portfolio
========================================== */

const categories = [
  "All Projects",
  "UI/UX Design",
  "Web Development",
  "WordPress",
];

const projects = [
  {
    id: 1,
    title: "Fashion & City",
    backgroundImg: propertyImg,
    projectUrl: "/Fashion&City",
    tech: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "A creative interface concept focused on visual design and user experience.",
  },
  {
    id: 2,
    title: "Hongo Shop",
    backgroundImg: cryptoImg,
    projectUrl: "/hongo",
    tech: "Hero Section · UI Design",
    category: "UI/UX Design",
    description:
      "A modern storefront hero section designed for an engaging shopping experience.",
  },
  {
    id: 3,
    title: "Landing Page",
    backgroundImg: netflixImg,
    projectUrl: "/LandingPage",
    tech: "HTML · CSS",
    category: "Web Development",
    description:
      "A responsive landing page showcasing front-end layout and styling.",
  },
  {
    id: 4,
    title: "Novemberfurniture",
    backgroundImg: twitchImg,
    projectUrl: "/Novemberfurniture",
    tech: "WordPress",
    category: "WordPress",
    description:
      "A furniture-focused website project built around product presentation.",
  },
  {
    id: 5,
    title: "Alaqmisha",
    backgroundImg: aqmishaImg,
    projectUrl: "/Alaqmisha",
    tech: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "A digital interface design project focused on a clear visual experience.",
  },
  {
    id: 6,
    title: "Murwaj",
    backgroundImg: murwajImg,
    projectUrl: "/Murwaj",
    tech: "JavaScript · PHP",
    category: "Web Development",
    description:
      "A web development project combining interactive front-end features with PHP.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-20
          h-80 w-80 rounded-full
          bg-[#018A7C]/10 blur-3xl
          dark:bg-[#018A7C]/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-20
          h-72 w-72 rounded-full
          bg-[#DC422F]/10 blur-3xl
          dark:bg-[#DC422F]/10
        "
      />

      <div className="studio-container relative z-10">
        {/* Section heading */}
        <div
          className="
            mx-auto mb-12
            max-w-3xl text-center
          "
        >
          <span className="studio-badge">Our Portfolio</span>

          <h2
            id="projects-heading"
            className="
              mt-6 text-4xl
              font-extrabold tracking-tight
              sm:text-5xl
            "
          >
            Projects That Bring{" "}
            <span className="studio-gradient-text">Ideas to Life.</span>
          </h2>

          <p className="studio-description mt-5">
            Explore a selection of our work across web development, creative
            design, and digital experiences.
          </p>
        </div>

        {/* Category filters */}
        <div
          className="
            mb-12 flex flex-wrap
            items-center justify-center
            gap-3
          "
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`
                  rounded-full border
                  px-5 py-2.5
                  text-sm font-semibold
                  !normal-case
                  !shadow-none
                  transition-all duration-300

                  ${
                    isActive
                      ? `
                        !border-[#018A7C]
                        !bg-[#018A7C]
                        !text-white
                      `
                      : `
                        !border-gray-200
                        !bg-white
                        !text-gray-700
                        hover:!border-[#018A7C]
                        hover:!text-[#018A7C]
                        dark:!border-white/10
                        dark:!bg-[#121126]
                        dark:!text-gray-300
                        dark:hover:!border-[#32B6A5]
                        dark:hover:!text-[#32B6A5]
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <div
          className="
            mb-6 flex items-center
            justify-between gap-4
          "
        >
          <div
            className="
              flex items-center gap-2
              text-sm font-medium
              text-gray-600
              dark:text-gray-300
            "
          >
            <FaLayerGroup
              className="
                text-[#018A7C]
                dark:text-[#32B6A5]
              "
              aria-hidden="true"
            />

            <span aria-live="polite">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <span
            className="
              hidden text-xs font-semibold
              uppercase tracking-widest
              text-[#DC422F]
              dark:text-[#FF725B]
              sm:block
            "
          >
            Build · Design · Innovate
          </span>
        </div>

        {/* Projects grid */}
        <div
          className="
            grid grid-cols-1
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>

        {/* Open-source CTA */}
        <div
          className="
            mt-16 flex flex-col
            items-center justify-between
            gap-6 rounded-3xl
            border border-[#018A7C]/20
            bg-white p-7
            shadow-sm
            dark:bg-[#121126]
            sm:p-10
            lg:flex-row
          "
        >
          <div className="max-w-xl">
            <div
              className="
                mb-4 flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-[#018A7C]/10
                text-[#018A7C]
                dark:text-[#32B6A5]
              "
            >
              <FaGithub size={23} aria-hidden="true" />
            </div>

            <h3
              className="
                text-2xl font-extrabold
                sm:text-3xl
              "
            >
              Explore Our Open-Source Work
            </h3>

            <p
              className="
                mt-3 text-sm leading-7
                text-gray-600
                dark:text-gray-300
                sm:text-base
              "
            >
              Discover our software projects and development experiments on
              GitHub. Explore the code, follow progress, and contribute to
              collaborative development.
            </p>
          </div>

          <a
            href="https://github.com/AsmarWeb"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex shrink-0
              items-center justify-center
              gap-3 rounded-xl
              bg-[#018A7C]
              px-6 py-4
              text-sm font-semibold
              text-white
              transition duration-300
              hover:-translate-y-1
              hover:bg-[#007366]
            "
          >
            Visit Our GitHub
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
