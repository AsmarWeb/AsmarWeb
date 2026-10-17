import React, { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaTimes,
  FaGithub,
  FaLayerGroup,
} from "react-icons/fa";

import ProjectItem from "../components/ProjectItem";

import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import aqmishaImg from "../public/assets/projects/aqmisha.jpg";
import murwajImg from "../public/assets/projects/murwaj.jpg";

/* ==========================================
   ASMARWEB STUDIO
   All Projects / Portfolio Listing
========================================== */

const projects = [
  {
    id: 1,
    title: "Fashion & City",
    tech: "Figma / UI/UX",
    category: "UI/UX Design",
    description:
      "A fashion-inspired website interface concept focused on visual design and user experience.",
    backgroundImg: propertyImg,
    projectUrl: "/Fashion&City",
  },
  {
    id: 2,
    title: "Hongo Shop",
    tech: "WordPress / E-commerce",
    category: "WordPress",
    description:
      "A WordPress e-commerce theme showcase exploring product landing pages and shopping experiences.",
    backgroundImg: cryptoImg,
    projectUrl: "/hongo",
  },
  {
    id: 3,
    title: "Landing Page",
    tech: "HTML / CSS / Bootstrap",
    category: "Web Development",
    description:
      "A product and service landing page showcase with lead capture and product presentation.",
    backgroundImg: netflixImg,
    projectUrl: "/LandingPage",
  },
  {
    id: 4,
    title: "Novemberfurniture",
    tech: "WordPress / Website",
    category: "WordPress",
    description:
      "A furniture-focused website project featuring a digital storefront presentation.",
    backgroundImg: twitchImg,
    projectUrl: "/Novemberfurniture",
  },
  {
    id: 5,
    title: "Alaqmisha",
    tech: "Figma / UI/UX",
    category: "UI/UX Design",
    description:
      "An e-commerce UI/UX concept exploring product presentation and shopping interfaces.",
    backgroundImg: aqmishaImg,
    projectUrl: "/Alaqmisha",
  },
  {
    id: 6,
    title: "Murwaj",
    tech: "JavaScript / PHP",
    category: "Web Development",
    description:
      "A web development project featuring JavaScript and PHP technologies.",
    backgroundImg: murwajImg,
    projectUrl: "/Murwaj",
  },
];

const categories = [
  "All Projects",
  "UI/UX Design",
  "Web Development",
  "WordPress",
];

const ListPage = () => {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const [searchInput, setSearchInput] = useState("");

  // Support links such as /list?search=wordpress
  const urlSearch =
    typeof router.query.search === "string" ? router.query.search : "";

  const searchTerm = urlSearch.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const searchableText = [
        project.title,
        project.tech,
        project.category,
        project.description,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !searchTerm || searchableText.includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const updateSearch = (value) => {
    setSearchInput(value);

    router.replace(
      {
        pathname: "/list",
        query: value.trim() ? { search: value } : {},
      },
      undefined,
      {
        shallow: true,
        scroll: false,
      },
    );
  };

  const clearFilters = () => {
    setActiveCategory("All Projects");
    setSearchInput("");

    router.replace("/list", undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const displayedSearch = urlSearch !== searchInput ? urlSearch : searchInput;

  return (
    <>
      <Head>
        <title>All Projects | AsmarWeb Studio</title>

        <meta
          name="description"
          content="Explore AsmarWeb Studio's portfolio of UI/UX design, web development, WordPress, and creative digital projects."
        />
      </Head>

      <main
        className="
          min-h-screen
          bg-white
          text-[#030017]
          dark:bg-[#030017]
          dark:text-white
        "
      >
        {/* ==================================
            PAGE HERO
        ================================== */}
        <section
          className="
            relative overflow-hidden
            bg-[#030017]
            pb-20 pt-36
            text-white
            md:pb-24 md:pt-44
          "
        >
          {/* Background accents */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-24 -top-20
              h-80 w-80 rounded-full
              bg-[#018A7C]/20
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-32 left-10
              h-72 w-72 rounded-full
              bg-[#DC422F]/15
              blur-3xl
            "
          />

          <div className="studio-container relative z-10">
            <Link
              href="/"
              className="
                mb-10 inline-flex
                items-center gap-2
                text-sm font-semibold
                text-gray-300
                transition-colors
                hover:text-[#32B6A5]
              "
            >
              <FaArrowLeft size={12} aria-hidden="true" />
              Back to Home
            </Link>

            <div className="max-w-3xl">
              <span
                className="
                  inline-flex items-center
                  gap-2 rounded-full
                  border border-[#32B6A5]/30
                  bg-[#018A7C]/15
                  px-4 py-2
                  text-xs font-bold
                  uppercase tracking-widest
                  text-[#7BE0D1]
                "
              >
                <FaLayerGroup size={12} aria-hidden="true" />
                Creative Portfolio
              </span>

              <h1
                className="
                  mt-6 text-4xl
                  font-extrabold
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Explore Our <span className="text-[#32B6A5]">Projects.</span>
              </h1>

              <p
                className="
                  mt-6 max-w-2xl
                  text-base leading-8
                  text-gray-300
                  sm:text-lg
                "
              >
                Discover a collection of creative designs, website concepts, and
                development projects exploring the intersection of design and
                technology.
              </p>

              <div
                className="
                  mt-8 flex flex-wrap
                  items-center gap-3
                "
              >
                <span
                  className="
                    rounded-full
                    border border-white/15
                    bg-white/5
                    px-4 py-2
                    text-sm text-gray-200
                  "
                >
                  {projects.length} Projects
                </span>

                <span
                  className="
                    rounded-full
                    border border-white/15
                    bg-white/5
                    px-4 py-2
                    text-sm text-gray-200
                  "
                >
                  Design & Development
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================
            SEARCH AND FILTERS
        ================================== */}
        <section className="studio-section">
          <div className="studio-container">
            <div
              className="
                flex flex-col gap-6
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <div>
                <span className="studio-badge">Browse Our Work</span>

                <h2
                  className="
                    mt-4 text-3xl
                    font-extrabold
                    sm:text-4xl
                  "
                >
                  Selected <span className="studio-gradient-text">Work.</span>
                </h2>

                <p
                  className="
                    mt-3 text-sm
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Find projects by name, category, or technology.
                </p>
              </div>

              {/* Search input */}
              <div
                className="
                  relative w-full
                  lg:max-w-sm
                "
              >
                <FaSearch
                  size={16}
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="search"
                  value={displayedSearch}
                  onChange={(event) => updateSearch(event.target.value)}
                  placeholder="Search projects..."
                  aria-label="Search projects"
                  className="
                    w-full rounded-xl
                    border border-gray-200
                    bg-[#F8FAF9]
                    py-3.5 pl-11 pr-11
                    text-sm
                    text-[#030017]
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#018A7C]
                    focus:ring-2
                    focus:ring-[#018A7C]/15
                    dark:border-white/10
                    dark:bg-[#121126]
                    dark:text-white
                    dark:focus:border-[#32B6A5]
                  "
                />

                {displayedSearch && (
                  <button
                    type="button"
                    onClick={() => updateSearch("")}
                    aria-label="Clear search"
                    className="
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-gray-400
                      transition-colors
                      hover:text-[#DC422F]
                    "
                  >
                    <FaTimes size={14} aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Category filters */}
            <div
              className="
                mt-9 flex flex-wrap
                items-center gap-3
              "
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
                      rounded-full
                      border px-5 py-2.5
                      text-sm font-semibold
                      transition-all duration-300

                      ${
                        isActive
                          ? `
                            border-[#018A7C]
                            bg-[#018A7C]
                            text-white
                          `
                          : `
                            border-gray-200
                            bg-white
                            text-gray-600
                            hover:border-[#018A7C]
                            hover:text-[#018A7C]
                            dark:border-white/10
                            dark:bg-[#121126]
                            dark:text-gray-300
                            dark:hover:border-[#32B6A5]
                            dark:hover:text-[#32B6A5]
                          `
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Results summary */}
            <div
              className="
                mt-10 flex flex-wrap
                items-center justify-between
                gap-4
                border-b border-gray-200
                pb-5
                dark:border-white/10
              "
            >
              <p
                className="
                  text-sm
                  text-gray-600
                  dark:text-gray-300
                "
                aria-live="polite"
              >
                Showing{" "}
                <strong
                  className="
                    text-[#018A7C]
                    dark:text-[#32B6A5]
                  "
                >
                  {filteredProjects.length}
                </strong>{" "}
                of {projects.length} projects
              </p>

              {(activeCategory !== "All Projects" || searchTerm) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    inline-flex items-center
                    gap-2 text-sm
                    font-semibold
                    text-[#DC422F]
                    transition-colors
                    hover:text-[#F5812D]
                  "
                >
                  <FaTimes size={12} aria-hidden="true" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* ==================================
                PROJECT GRID
            ================================== */}
            {filteredProjects.length > 0 ? (
              <div
                className="
                  mt-10 grid
                  grid-cols-1 gap-8
                  md:grid-cols-2
                  xl:grid-cols-3
                "
              >
                {filteredProjects.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    backgroundImg={project.backgroundImg}
                    tech={project.tech}
                    projectUrl={project.projectUrl}
                    category={project.category}
                    description={project.description}
                  />
                ))}
              </div>
            ) : (
              <div
                className="
                  mt-10 flex
                  min-h-[300px]
                  flex-col items-center
                  justify-center
                  rounded-2xl
                  border border-dashed
                  border-gray-300
                  bg-[#F8FAF9]
                  px-6 py-12
                  text-center
                  dark:border-white/15
                  dark:bg-[#121126]
                "
              >
                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-[#018A7C]/10
                    text-[#018A7C]
                    dark:text-[#32B6A5]
                  "
                >
                  <FaSearch size={25} aria-hidden="true" />
                </div>

                <h3
                  className="
                    mt-6 text-xl
                    font-extrabold
                  "
                >
                  No Projects Found
                </h3>

                <p
                  className="
                    mt-3 max-w-sm
                    text-sm leading-7
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  We couldn't find a project matching your search. Try another
                  keyword or select a different category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-6 rounded-xl
                    bg-[#018A7C]
                    px-6 py-3
                    text-sm font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#007366]
                  "
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ==================================
            GITHUB SECTION
        ================================== */}
        <section
          className="
            bg-[#F8FAF9] py-16
            dark:bg-[#0B0A1C]
            md:py-20
          "
        >
          <div className="studio-container">
            <div
              className="
                flex flex-col
                items-start gap-8
                rounded-3xl
                bg-[#030017]
                px-6 py-12
                text-white
                sm:px-10
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-14
              "
            >
              <div className="max-w-2xl">
                <span
                  className="
                    text-xs font-bold
                    uppercase tracking-widest
                    text-[#32B6A5]
                  "
                >
                  Open Source & Development
                </span>

                <h2
                  className="
                    mt-4 text-3xl
                    font-extrabold
                    sm:text-4xl
                  "
                >
                  Explore More on{" "}
                  <span className="text-[#F5812D]">GitHub.</span>
                </h2>

                <p
                  className="
                    mt-4 text-base
                    leading-8
                    text-gray-300
                  "
                >
                  Discover repositories, experiments, and development work
                  beyond this portfolio.
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
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#007366]
                "
              >
                <FaGithub size={18} aria-hidden="true" />
                Visit GitHub
                <FaArrowRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================
            CONTACT CTA
        ================================== */}
        <section className="studio-section">
          <div className="studio-container text-center">
            <span className="studio-badge">Let's Collaborate</span>

            <h2
              className="
                mx-auto mt-5
                max-w-2xl
                text-3xl font-extrabold
                sm:text-4xl
              "
            >
              Have a Project{" "}
              <span className="studio-gradient-text">in Mind?</span>
            </h2>

            <p
              className="
                mx-auto mt-5
                max-w-xl
                text-base leading-8
                text-gray-600
                dark:text-gray-300
              "
            >
              Let's discuss your idea and explore how design and technology can
              bring it to life.
            </p>

            <Link
              href="/#contact"
              className="
                mt-8 inline-flex
                items-center justify-center
                gap-3 rounded-xl
                bg-[#018A7C]
                px-7 py-3.5
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#007366]
              "
            >
              Start a Conversation
              <FaArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
