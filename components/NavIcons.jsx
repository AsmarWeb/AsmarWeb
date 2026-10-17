import React from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

/* ==========================================
   ASMARWEB STUDIO
   Navigation Social Icons
========================================== */

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AsmarWeb",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mr-asim/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asmar.web/",
    icon: FaInstagram,
  },
];

const NavIcons = () => {
  return (
    <div
      className="
        hidden items-center
        gap-2 xl:gap-3
        lg:flex
      "
    >
      {/* Social links */}
      <div className="flex items-center gap-1">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                text-gray-600
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#018A7C]/10
                hover:text-[#018A7C]
                dark:text-gray-300
                dark:hover:text-[#32B6A5]
              "
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>

      {/* Separator */}
      <span
        aria-hidden="true"
        className="
          mx-1 h-7 w-px
          bg-gray-200
          dark:bg-white/15
        "
      />

      {/* Collaboration CTA */}
      <Link
        href="/#contact"
        className="
          inline-flex items-center
          justify-center gap-2
          whitespace-nowrap
          rounded-xl
          bg-[#018A7C]
          px-4 py-2.5
          text-sm font-semibold
          text-white
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-[#007366]
        "
      >
        Let's Collaborate
        <FaArrowRight size={12} aria-hidden="true" />
      </Link>
    </div>
  );
};

export default NavIcons;
