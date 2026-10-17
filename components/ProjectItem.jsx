import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { FaArrowRight, FaExternalLinkAlt, FaCode } from "react-icons/fa";

/* ==========================================
   ASMARWEB STUDIO
   Project Card Component
========================================== */

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  description,
  category = "Featured Project",
}) => {
  const isExternal =
    typeof projectUrl === "string" && /^https?:\/\//i.test(projectUrl);

  const hasValidUrl =
    typeof projectUrl === "string" && projectUrl.trim().length > 0;

  const projectLink = hasValidUrl ? projectUrl : null;

  const linkClasses = `
    inline-flex items-center
    justify-center gap-2
    rounded-xl bg-[#018A7C]
    px-5 py-3
    text-sm font-semibold
    text-white
    transition-all duration-300
    hover:bg-[#007366]
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-[#F5812D]
  `;

  return (
    <article
      className="
        group relative flex h-full
        flex-col overflow-hidden
        rounded-2xl border
        border-gray-200
        bg-white
        shadow-lg shadow-gray-200/40
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#018A7C]/30
        hover:shadow-xl
        dark:border-white/10
        dark:bg-[#121126]
        dark:shadow-black/20
        dark:hover:border-[#32B6A5]/40
      "
    >
      {/* Project image */}
      <div
        className="
          relative aspect-[16/10]
          w-full overflow-hidden
          bg-gray-100
          dark:bg-[#030017]
        "
      >
        <Image
          src={backgroundImg}
          alt={`${title} project preview`}
          layout="fill"
          objectFit="cover"
          className="
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image gradient */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-[#030017]/35
            via-transparent
            to-transparent
          "
        />

        {/* Category badge */}
        <div
          className="
            absolute left-4 top-4
            inline-flex items-center
            gap-2 rounded-full
            border border-white/20
            bg-[#030017]/75
            px-3 py-2
            text-xs font-semibold
            text-white
            backdrop-blur-md
          "
        >
          <FaCode className="text-[#F5812D]" aria-hidden="true" />

          {category}
        </div>
      </div>

      {/* Project content */}
      <div
        className="
          flex flex-1 flex-col
          p-5 sm:p-6
        "
      >
        {/* Project title */}
        <h3
          className="
            text-xl font-extrabold
            tracking-tight
            text-[#030017]
            dark:text-white
            sm:text-2xl
          "
        >
          {title}
        </h3>

        {/* Technology / project type */}
        {tech && (
          <p
            className="
              mt-3 text-sm
              font-semibold
              text-[#018A7C]
              dark:text-[#32B6A5]
            "
          >
            {tech}
          </p>
        )}

        {/* Optional description */}
        {description && (
          <p
            className="
              mt-4 text-sm leading-7
              text-gray-600
              dark:text-gray-300
            "
          >
            {description}
          </p>
        )}

        {/* Project action */}
        <div
          className="
            mt-auto flex items-center
            justify-between gap-3
            pt-7
          "
        >
          {projectLink ? (
            isExternal ? (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
                aria-label={`View ${title} project`}
              >
                View Project
                <FaExternalLinkAlt size={12} aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={projectLink}
                className={linkClasses}
                aria-label={`View ${title} project`}
              >
                View Project
                <FaArrowRight size={13} aria-hidden="true" />
              </Link>
            )
          ) : (
            <span
              className="
                inline-flex items-center
                rounded-xl
                bg-gray-100
                px-4 py-3
                text-sm font-medium
                text-gray-500
                dark:bg-white/5
                dark:text-gray-400
              "
            >
              Details Coming Soon
            </span>
          )}

          {/* Decorative brand accent */}
          <div aria-hidden="true" className="flex items-center gap-1">
            <span
              className="
                h-2 w-2 rounded-full
                bg-[#018A7C]
              "
            />

            <span
              className="
                h-2 w-2 rounded-full
                bg-[#DC422F]
              "
            />

            <span
              className="
                h-2 w-2 rounded-full
                bg-[#F5812D]
              "
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
