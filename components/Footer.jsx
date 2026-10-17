import React from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaCode,
  FaPalette,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

/* ==========================================
   ASMARWEB STUDIO
   Footer Component
========================================== */

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Studio", href: "/#about" },
  { name: "Our Skills", href: "/#skills" },
  { name: "Portfolio", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const services = [
  "Web Development",
  "Software Platforms",
  "UI/UX Design",
  "Graphic Design & Branding",
  "Digital Marketing",
  "Business Solutions",
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AsmarWeb",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mr-asim/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/asmar.web/",
    icon: FaInstagram,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-gray-200
        bg-[#F8FAF9]
        text-[#030017]
        transition-colors duration-300
        dark:border-white/10
        dark:bg-[#080717]
        dark:text-white
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-80 w-80 rounded-full
          bg-[#018A7C]/10 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-32 -left-32
          h-72 w-72 rounded-full
          bg-[#DC422F]/10 blur-3xl
        "
      />

      <div className="studio-container relative z-10">
        {/* Main footer */}
        <div
          className="
            grid grid-cols-1
            gap-12 py-16
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-10 lg:py-20
          "
        >
          {/* COLUMN 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="
                inline-flex items-baseline
                text-2xl font-extrabold
                tracking-tight
              "
            >
              <span>AsmarWeb</span>
              <span
                className="
                  ml-1 text-[#018A7C]
                  dark:text-[#32B6A5]
                "
              >
                Studio.
              </span>
            </Link>

            <p
              className="
                mt-5 max-w-sm
                text-sm leading-8
                text-gray-600
                dark:text-gray-300
              "
            >
              An independent creative technology studio building digital
              platforms, designing brands, and creating meaningful digital
              experiences.
            </p>

            <div
              className="
                mt-6 flex items-center gap-2
                text-sm font-semibold
                text-[#018A7C]
                dark:text-[#32B6A5]
              "
            >
              <FaCode aria-hidden="true" />
              <span>Build.</span>

              <FaPalette className="ml-2 text-[#DC422F]" aria-hidden="true" />
              <span>Design.</span>

              <span className="ml-2 text-[#F5812D]">Innovate.</span>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl border
                      border-gray-200
                      bg-white text-lg
                      text-gray-700
                      transition duration-300
                      hover:-translate-y-1
                      hover:border-[#018A7C]
                      hover:text-[#018A7C]
                      dark:border-white/10
                      dark:bg-[#121126]
                      dark:text-gray-300
                      dark:hover:border-[#32B6A5]
                      dark:hover:text-[#32B6A5]
                    "
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Quick links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div
              className="
                mt-4 h-1 w-12
                rounded-full bg-[#018A7C]
              "
            />

            <ul className="mt-7 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      inline-flex items-center
                      gap-2 text-sm
                      text-gray-600
                      transition duration-200
                      hover:translate-x-1
                      hover:text-[#018A7C]
                      dark:text-gray-300
                      dark:hover:text-[#32B6A5]
                    "
                  >
                    <FaArrowRight
                      size={11}
                      className="text-[#F5812D]"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>

            <div
              className="
                mt-4 h-1 w-12
                rounded-full bg-[#DC422F]
              "
            />

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    text-sm text-gray-600
                    dark:text-gray-300
                  "
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h3 className="text-lg font-bold">Get In Touch</h3>

            <div
              className="
                mt-4 h-1 w-12
                rounded-full bg-[#F5812D]
              "
            />

            <div className="mt-7 space-y-5">
              <a
                href="mailto:mr.asmar.web@gmail.com"
                className="
                  flex items-start gap-3
                  text-sm text-gray-600
                  hover:text-[#018A7C]
                  dark:text-gray-300
                  dark:hover:text-[#32B6A5]
                "
              >
                <FaEnvelope
                  className="
                    mt-1 shrink-0
                    text-[#018A7C]
                    dark:text-[#32B6A5]
                  "
                  aria-hidden="true"
                />

                <span className="break-all">mr.asmar.web@gmail.com</span>
              </a>

              <div
                className="
                  flex items-start gap-3
                  text-sm text-gray-600
                  dark:text-gray-300
                "
              >
                <FaMapMarkerAlt
                  className="
                    mt-1 shrink-0
                    text-[#DC422F]
                  "
                  aria-hidden="true"
                />

                <span>
                  United Arab Emirates
                  <span
                    className="
                      mt-1 block text-xs
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Remote collaboration available
                  </span>
                </span>
              </div>
            </div>

            {/* Join the studio */}
            <div
              className="
                mt-8 rounded-2xl
                border border-[#018A7C]/20
                bg-[#018A7C]/5 p-5
              "
            >
              <p className="text-sm font-bold">Join Our Creative Network</p>

              <p
                className="
                  mt-2 text-xs leading-6
                  text-gray-600
                  dark:text-gray-300
                "
              >
                Developers and designers are welcome to collaborate with us.
              </p>

              <a
                href="mailto:mr.asmar.web@gmail.com?subject=Join%20AsmarWeb%20Studio"
                className="
                  mt-4 inline-flex
                  items-center gap-2
                  text-sm font-bold
                  text-[#018A7C]
                  hover:underline
                  dark:text-[#32B6A5]
                "
              >
                Join the Studio
                <FaArrowRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div
          className="
            flex flex-col
            items-center justify-between
            gap-5 border-t
            border-gray-200 py-7
            text-center
            dark:border-white/10
            md:flex-row
            md:text-left
          "
        >
          <p
            className="
              text-sm text-gray-600
              dark:text-gray-400
            "
          >
            © {currentYear} <span className="font-bold">AsmarWeb Studio.</span>{" "}
            All rights reserved.
          </p>

          <p
            className="
              flex items-center gap-2
              text-sm text-gray-600
              dark:text-gray-400
            "
          >
            Designed & Developed with
            <FaHeart className="text-[#DC422F]" aria-label="love" />
            by AsmarWeb Studio
          </p>

          <Link
            href="/#home"
            aria-label="Back to top"
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full border
              border-gray-200
              bg-white text-[#018A7C]
              transition duration-300
              hover:-translate-y-1
              hover:border-[#018A7C]
              dark:border-white/10
              dark:bg-[#121126]
              dark:text-[#32B6A5]
            "
          >
            <HiOutlineChevronDoubleUp size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
