import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPrint,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaPalette,
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* ==========================================
   ASMARWEB STUDIO
   Professional Resume — Asim Ahmed
========================================== */

const profile = {
  name: "Asim Ahmed",

  title: "Web Developer | UI/UX Designer | Digital Creative",

  location: "United Arab Emirates",

  email: "mr.asmar.web@gmail.com",

  github: "https://github.com/AsmarWeb",

  linkedin: "https://www.linkedin.com/in/mr-asim/",

  website: "/",

  summary:
    "Self-taught web developer and designer with experience creating digital interfaces, responsive websites, and visual content for businesses. Combines frontend development with UI/UX design, WordPress, graphic design, and social media management to deliver practical digital experiences.",
};

const skillGroups = [
  {
    title: "Web Development",
    icon: FaCode,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Design",
      "WordPress",
      "Frontend Development",
    ],
  },
  {
    title: "Design & Creative",
    icon: FaPalette,
    skills: [
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Identity",
      "Graphic Design",
      "Social Media Design",
    ],
  },
  {
    title: "Digital Marketing",
    icon: FaBriefcase,
    skills: [
      "SEO",
      "Google Ads",
      "Social Media Management",
      "Content Creation",
      "Digital Marketing",
      "Video Editing",
      "Photography",
    ],
  },
];

const experiences = [
  {
    company: "November Furniture L.L.C",
    location: "Sharjah, United Arab Emirates",
    role: "Web Developer & Social Media Manager",
    period: "2021 – Present*",
    highlights: [
      "Developed and maintained a furniture-focused e-commerce website using WordPress and related web technologies.",
      "Worked on responsive layouts, product presentation, and customer-facing website interfaces.",
      "Designed digital content and managed social media activities to support the company's online presence.",
      "Contributed to website usability improvements, including product browsing and checkout experiences.",
    ],
  },
  {
    company: "Woi Studio",
    location: "Khartoum, Sudan",
    role: "Frontend Developer Intern",
    period: "2019 – 2020",
    highlights: [
      "Translated interface designs and wireframes into frontend code using HTML, CSS, and JavaScript.",
      "Collaborated with developers, designers, and content teams on digital projects.",
      "Supported the implementation of responsive layouts and user interface improvements.",
      "Reviewed UI/UX concepts for technical feasibility and contributed ideas for new features.",
    ],
  },
];

const freelanceServices = [
  "UI/UX and website design",
  "Brand identity and graphic design",
  "Social media post design",
  "Video editing using Adobe After Effects and Premiere Pro",
  "Photography and visual content creation",
];

const Resume = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>Asim Ahmed | Resume — AsmarWeb Studio</title>

        <meta
          name="description"
          content="Professional resume of Asim Ahmed, web developer, UI/UX designer, and digital creative with experience in frontend development, WordPress, graphic design, and digital marketing."
        />
      </Head>

      <main
        className="
          min-h-screen
          bg-[#F8FAF9]
          pb-20 pt-28
          text-[#030017]
          dark:bg-[#030017]
          dark:text-white
          print:bg-white
          print:p-0
          print:text-black
        "
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* ==================================
              PAGE CONTROLS
          ================================== */}
          <div
            className="
              mb-8 flex flex-wrap
              items-center justify-between
              gap-4 print:hidden
            "
          >
            <Link
              href="/"
              className="
                inline-flex items-center
                gap-2 text-sm
                font-semibold
                text-gray-600
                transition-colors
                hover:text-[#018A7C]
                dark:text-gray-300
                dark:hover:text-[#32B6A5]
              "
            >
              <FaArrowLeft size={12} aria-hidden="true" />
              Back to Website
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="
                inline-flex items-center
                justify-center gap-3
                rounded-xl
                bg-[#018A7C]
                px-5 py-3
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#007366]
              "
            >
              <FaPrint size={15} aria-hidden="true" />
              Print / Save as PDF
            </button>
          </div>

          {/* ==================================
              RESUME DOCUMENT
          ================================== */}
          <article
            className="
              overflow-hidden
              rounded-2xl
              border border-gray-200
              bg-white shadow-xl
              dark:border-white/10
              dark:bg-[#121126]
              print:overflow-visible
              print:rounded-none
              print:border-0
              print:bg-white
              print:shadow-none
            "
          >
            {/* HEADER */}
            <header
              className="
                bg-[#030017]
                px-6 py-10
                text-white
                sm:px-10
                md:px-14
                print:bg-white
                print:px-0
                print:py-5
                print:text-black
              "
            >
              <div
                className="
                  flex flex-col
                  gap-7
                  md:flex-row
                  md:items-start
                  md:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs font-bold
                      uppercase tracking-[0.25em]
                      text-[#32B6A5]
                      print:text-black
                    "
                  >
                    Professional Resume
                  </p>

                  <h1
                    className="
                      mt-4 text-4xl
                      font-extrabold
                      tracking-tight
                      sm:text-5xl
                      print:mt-2
                      print:text-3xl
                    "
                  >
                    {profile.name}
                    <span
                      className="
                        text-[#F5812D]
                        print:text-black
                      "
                    >
                      .
                    </span>
                  </h1>

                  <p
                    className="
                      mt-4 max-w-xl
                      text-base font-medium
                      leading-7
                      text-gray-200
                      print:mt-2
                      print:text-black
                    "
                  >
                    {profile.title}
                  </p>
                </div>

                <div
                  className="
                    flex items-center gap-3
                    print:hidden
                  "
                >
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border border-white/15
                      bg-white/10
                      transition-colors
                      hover:bg-[#018A7C]
                    "
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border border-white/15
                      bg-white/10
                      transition-colors
                      hover:bg-[#018A7C]
                    "
                  >
                    <FaGithub size={19} />
                  </a>
                </div>
              </div>

              {/* Contact information */}
              <div
                className="
                  mt-8 flex flex-wrap
                  gap-x-6 gap-y-3
                  border-t border-white/15
                  pt-6
                  text-sm text-gray-200
                  print:mt-4
                  print:border-gray-300
                  print:pt-3
                  print:text-black
                "
              >
                <span className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt
                    size={13}
                    aria-hidden="true"
                    className="print:hidden"
                  />

                  {profile.location}
                </span>

                <a
                  href={`mailto:${profile.email}`}
                  className="
                    inline-flex items-center
                    gap-2 hover:underline
                  "
                >
                  <FaEnvelope
                    size={13}
                    aria-hidden="true"
                    className="print:hidden"
                  />

                  {profile.email}
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    gap-2 hover:underline
                  "
                >
                  <FaLinkedinIn
                    size={13}
                    aria-hidden="true"
                    className="print:hidden"
                  />
                  LinkedIn
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    gap-2 hover:underline
                  "
                >
                  <FaGithub
                    size={13}
                    aria-hidden="true"
                    className="print:hidden"
                  />
                  github.com/AsmarWeb
                </a>
              </div>
            </header>

            <div
              className="
                px-6 py-10
                sm:px-10
                md:px-14
                print:px-0
                print:py-4
              "
            >
              {/* ==================================
                  PROFILE
              ================================== */}
              <section className="mb-10 print:mb-6">
                <SectionHeading title="Professional Profile" />

                <p
                  className="
                    mt-4 text-sm
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                    print:text-black
                  "
                >
                  {profile.summary}
                </p>
              </section>

              {/* ==================================
                  CORE SKILLS
              ================================== */}
              <section className="mb-12 print:mb-6">
                <SectionHeading title="Core Skills" />

                <div
                  className="
                    mt-6 grid
                    grid-cols-1 gap-5
                    md:grid-cols-3
                    print:grid-cols-3
                    print:gap-3
                  "
                >
                  {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                      <div
                        key={group.title}
                        className="
                          rounded-xl
                          border border-gray-200
                          bg-[#F8FAF9]
                          p-5
                          dark:border-white/10
                          dark:bg-[#030017]
                          print:border-gray-300
                          print:bg-white
                          print:p-3
                        "
                      >
                        <div
                          className="
                            flex items-center gap-3
                          "
                        >
                          <Icon
                            size={17}
                            aria-hidden="true"
                            className="
                              text-[#018A7C]
                              print:text-black
                            "
                          />

                          <h3
                            className="
                              text-sm font-bold
                            "
                          >
                            {group.title}
                          </h3>
                        </div>

                        <div
                          className="
                            mt-4 flex flex-wrap
                            gap-2 print:gap-1
                          "
                        >
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                  rounded-md
                                  bg-[#018A7C]/10
                                  px-2.5 py-1.5
                                  text-xs font-medium
                                  text-[#007366]
                                  dark:text-[#7BE0D1]
                                  print:bg-white
                                  print:px-1
                                  print:py-0.5
                                  print:text-black
                                "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ==================================
                  PROFESSIONAL EXPERIENCE
              ================================== */}
              <section className="mb-12 print:mb-6">
                <SectionHeading title="Professional Experience" />

                <div className="mt-7 space-y-9 print:space-y-5">
                  {experiences.map((experience) => (
                    <div
                      key={experience.company}
                      className="
                        relative border-l-2
                        border-[#018A7C]/30
                        pl-6
                        print:break-inside-avoid
                        print:border-gray-300
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          absolute -left-[7px]
                          top-1.5 h-3 w-3
                          rounded-full
                          bg-[#018A7C]
                          print:bg-black
                        "
                      />

                      <div
                        className="
                          flex flex-col gap-2
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                        "
                      >
                        <div>
                          <h3
                            className="
                              text-lg font-bold
                            "
                          >
                            {experience.company}
                          </h3>

                          <p
                            className="
                              mt-1 text-sm
                              font-semibold
                              text-[#018A7C]
                              dark:text-[#32B6A5]
                              print:text-black
                            "
                          >
                            {experience.role}
                          </p>

                          <p
                            className="
                              mt-1 text-xs
                              text-gray-500
                              dark:text-gray-400
                              print:text-black
                            "
                          >
                            {experience.location}
                          </p>
                        </div>

                        <span
                          className="
                            shrink-0 self-start
                            rounded-full
                            bg-[#018A7C]/10
                            px-3 py-1.5
                            text-xs font-semibold
                            text-[#007366]
                            dark:text-[#7BE0D1]
                            print:bg-white
                            print:text-black
                          "
                        >
                          {experience.period}
                        </span>
                      </div>

                      <ul
                        className="
                          mt-4 list-disc
                          space-y-2 pl-5
                          text-sm leading-7
                          text-gray-600
                          dark:text-gray-300
                          print:text-black
                        "
                      >
                        {experience.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ==================================
                  FREELANCE EXPERIENCE
              ================================== */}
              <section className="mb-12 print:mb-6">
                <SectionHeading title="Freelance & Creative Work" />

                <div className="mt-6">
                  <h3
                    className="
                      text-lg font-bold
                    "
                  >
                    Freelance Designer & Digital Creative
                  </h3>

                  <p
                    className="
                      mt-2 text-sm
                      leading-7
                      text-gray-600
                      dark:text-gray-300
                      print:text-black
                    "
                  >
                    Independent creative work across design, digital media, and
                    visual content.
                  </p>

                  <ul
                    className="
                      mt-4 grid
                      grid-cols-1 gap-3
                      sm:grid-cols-2
                      print:grid-cols-2
                    "
                  >
                    {freelanceServices.map((service) => (
                      <li
                        key={service}
                        className="
                            flex items-start
                            gap-3 text-sm
                            leading-6
                            text-gray-600
                            dark:text-gray-300
                            print:text-black
                          "
                      >
                        <span
                          aria-hidden="true"
                          className="
                              mt-2 h-1.5 w-1.5
                              shrink-0 rounded-full
                              bg-[#018A7C]
                              print:bg-black
                            "
                        />

                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ==================================
                  PORTFOLIO
              ================================== */}
              <section className="print:mb-4">
                <SectionHeading title="Portfolio & Open Source" />

                <p
                  className="
                    mt-4 text-sm
                    leading-8
                    text-gray-600
                    dark:text-gray-300
                    print:text-black
                  "
                >
                  Explore selected website projects, UI/UX concepts, and
                  software repositories through the portfolio and GitHub
                  profile.
                </p>

                <div
                  className="
                    mt-5 flex flex-wrap
                    gap-4 print:hidden
                  "
                >
                  <Link
                    href="/#projects"
                    className="
                      inline-flex items-center
                      gap-2 rounded-xl
                      bg-[#018A7C]
                      px-5 py-3
                      text-sm font-semibold
                      text-white
                      transition-colors
                      hover:bg-[#007366]
                    "
                  >
                    View Portfolio
                    <FaArrowRight size={12} aria-hidden="true" />
                  </Link>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      gap-2 rounded-xl
                      border border-gray-200
                      px-5 py-3
                      text-sm font-semibold
                      transition-colors
                      hover:border-[#018A7C]
                      hover:text-[#018A7C]
                      dark:border-white/10
                      dark:hover:text-[#32B6A5]
                    "
                  >
                    GitHub Projects
                    <FaExternalLinkAlt size={11} aria-hidden="true" />
                  </a>
                </div>

                <p
                  className="
                    mt-3 hidden
                    text-sm
                    print:block
                  "
                >
                  Portfolio: AsmarWeb Studio
                  {" | "}
                  GitHub: github.com/AsmarWeb
                </p>
              </section>

              {/* FOOTNOTE */}
              <p
                className="
                  mt-10 border-t
                  border-gray-200 pt-5
                  text-xs leading-6
                  text-gray-500
                  dark:border-white/10
                  dark:text-gray-400
                  print:mt-5
                  print:text-black
                "
              >
                * Please confirm whether the November Furniture position is
                still ongoing before publishing this resume.
              </p>
            </div>
          </article>

          {/* Bottom navigation */}
          <div
            className="
              mt-8 flex flex-wrap
              items-center justify-between
              gap-4 print:hidden
            "
          >
            <Link
              href="/"
              className="
                inline-flex items-center
                gap-2 text-sm
                font-semibold
                text-gray-600
                hover:text-[#018A7C]
                dark:text-gray-300
              "
            >
              <FaArrowLeft size={12} />
              Back to Home
            </Link>

            <Link
              href="/#contact"
              className="
                inline-flex items-center
                gap-2 text-sm
                font-semibold
                text-[#018A7C]
                hover:text-[#DC422F]
                dark:text-[#32B6A5]
              "
            >
              Get in Touch
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </main>

      {/* Print-specific formatting */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm;
          }

          html,
          body {
            background: white !important;
            color: black !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          nav,
          footer,
          .print\\:hidden {
            display: none !important;
          }

          article {
            box-shadow: none !important;
          }

          section {
            break-inside: auto;
          }

          h2,
          h3 {
            break-after: avoid;
          }
        }
      `}</style>
    </>
  );
};

/* ==========================================
   REUSABLE SECTION HEADING
========================================== */

const SectionHeading = ({ title }) => {
  return (
    <div
      className="
        flex items-center
        gap-4
        border-b border-gray-200
        pb-3
        dark:border-white/10
        print:border-gray-300
      "
    >
      <span
        aria-hidden="true"
        className="
          h-6 w-1
          rounded-full
          bg-[#018A7C]
          print:bg-black
        "
      />

      <h2
        className="
          text-xl
          font-extrabold
          tracking-tight
          sm:text-2xl
          print:text-lg
        "
      >
        {title}
      </h2>
    </div>
  );
};

export default Resume;
