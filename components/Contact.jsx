import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import ContactImg from "../public/assets/contact.jpg";

/* ==========================================
   ASMARWEB STUDIO
   Contact Section
========================================== */

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

const projectTypes = [
  "Web Development",
  "Software Platform",
  "UI/UX Design",
  "Graphic Design & Branding",
  "Digital Marketing",
  "Collaboration / Join the Studio",
  "Other",
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative w-full overflow-hidden
        bg-white py-20
        text-[#030017]
        transition-colors duration-300
        dark:bg-[#030017]
        dark:text-white
        md:py-28
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-10
          h-96 w-96 rounded-full
          bg-[#018A7C]/10 blur-3xl
          dark:bg-[#018A7C]/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-0
          h-72 w-72 rounded-full
          bg-[#DC422F]/10 blur-3xl
          dark:bg-[#DC422F]/10
        "
      />

      <div className="studio-container relative z-10">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <span className="studio-badge">Contact AsmarWeb Studio</span>

          <h2
            id="contact-heading"
            className="
              mt-6 text-4xl
              font-extrabold tracking-tight
              sm:text-5xl
            "
          >
            Let&apos;s Build Something{" "}
            <span className="studio-gradient-text">Remarkable.</span>
          </h2>

          <p className="studio-description mt-5">
            Have a project in mind, need a creative solution, or want to
            collaborate with our studio? Tell us about your idea and let&apos;s
            explore what we can create together.
          </p>
        </div>

        <div
          className="
            grid grid-cols-1
            items-stretch gap-8
            lg:grid-cols-5
          "
        >
          {/* LEFT — Studio information */}
          <div className="lg:col-span-2">
            <div
              className="
                studio-card h-full
                overflow-hidden p-5
                sm:p-6
              "
            >
              {/* Contact image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={ContactImg}
                  alt="AsmarWeb Studio creative workspace"
                  layout="responsive"
                  width={600}
                  height={380}
                  objectFit="cover"
                />
              </div>

              <div className="mt-7">
                <h3
                  className="
                    text-2xl font-extrabold
                    text-[#030017]
                    dark:text-white
                  "
                >
                  AsmarWeb{" "}
                  <span
                    className="
                      text-[#018A7C]
                      dark:text-[#32B6A5]
                    "
                  >
                    Studio.
                  </span>
                </h3>

                <p
                  className="
                    mt-2 text-sm font-semibold
                    text-[#DC422F]
                    dark:text-[#FF725B]
                  "
                >
                  Creative & Technology Studio
                </p>

                <p
                  className="
                    mt-5 text-sm leading-7
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  We help businesses and creators bring ideas to life through
                  software development, creative design, branding, and digital
                  experiences.
                </p>
              </div>

              {/* Contact details */}
              <div
                className="
                  mt-7 space-y-5
                  border-t border-gray-200
                  pt-7 dark:border-white/10
                "
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      flex h-11 w-11
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#018A7C]/10
                      text-[#018A7C]
                      dark:text-[#32B6A5]
                    "
                  >
                    <FaEnvelope aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold">Email Us</p>

                    <a
                      href="mailto:mr.asmar.web@gmail.com"
                      className="
                        break-all text-sm
                        text-gray-600
                        hover:text-[#018A7C]
                        dark:text-gray-300
                        dark:hover:text-[#32B6A5]
                      "
                    >
                      mr.asmar.web@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span
                    className="
                      flex h-11 w-11
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#DC422F]/10
                      text-[#DC422F]
                      dark:text-[#FF725B]
                    "
                  >
                    <FaMapMarkerAlt aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-sm font-bold">Based In</p>

                    <p
                      className="
                        mt-1 text-sm
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      United Arab Emirates
                    </p>

                    <p
                      className="
                        mt-1 text-xs
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Available for remote collaboration
                    </p>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div
                className="
                  mt-8 border-t
                  border-gray-200 pt-7
                  dark:border-white/10
                "
              >
                <p
                  className="
                    text-xs font-bold
                    uppercase tracking-widest
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Connect With Us
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
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
                          flex h-12 w-12
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
                          dark:bg-[#030017]
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

              {/* Collaboration link */}
              <div
                className="
                  mt-8 rounded-2xl
                  border border-[#F5812D]/20
                  bg-[#F5812D]/5 p-5
                "
              >
                <h4 className="text-base font-bold">
                  Want to Join Our Studio?
                </h4>

                <p
                  className="
                    mt-2 text-sm leading-7
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  We welcome developers, designers, and creative professionals
                  interested in collaborating on projects.
                </p>

                <a
                  href="mailto:mr.asmar.web@gmail.com?subject=Join%20AsmarWeb%20Studio"
                  className="
                    mt-4 inline-flex
                    items-center gap-2
                    text-sm font-bold
                    text-[#DC422F]
                    hover:underline
                    dark:text-[#FF725B]
                  "
                >
                  Apply to Collaborate
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact form */}
          <div className="lg:col-span-3">
            <div className="studio-card h-full p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">
                  Tell Us About Your Project
                </h3>

                <p className="studio-description mt-3 text-sm">
                  Complete the form below to send your inquiry to our studio.
                </p>
              </div>

              <form
                action="https://getform.io/f/6f3a52e6-5471-49f4-a62f-39d5faa2c69c"
                method="POST"
              >
                <input
                  type="hidden"
                  name="source"
                  value="AsmarWeb Studio Website"
                />

                <div
                  className="
                    grid grid-cols-1 gap-5
                    md:grid-cols-2
                  "
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="
                        mb-2 block text-sm
                        font-semibold
                      "
                    >
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      className="studio-input"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="
                        mb-2 block text-sm
                        font-semibold
                      "
                    >
                      Phone / WhatsApp
                    </label>

                    <input
                      id="contact-phone"
                      className="studio-input"
                      type="tel"
                      name="phone"
                      placeholder="+971 ..."
                      autoComplete="tel"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="
                        mb-2 block text-sm
                        font-semibold
                      "
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      className="studio-input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="
                        mb-2 block text-sm
                        font-semibold
                      "
                    >
                      Service / Inquiry Type *
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      className="studio-input"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label
                    htmlFor="contact-subject"
                    className="
                      mb-2 block text-sm
                      font-semibold
                    "
                  >
                    Subject *
                  </label>

                  <input
                    id="contact-subject"
                    className="studio-input"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="
                      mb-2 block text-sm
                      font-semibold
                    "
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="contact-message"
                    className="
                      studio-input min-h-[180px]
                      resize-y
                    "
                    rows={7}
                    name="message"
                    placeholder="Tell us about your project, goals, timeline, or collaboration idea..."
                    required
                  />
                </div>

                {/* Consent */}
                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="
                      mt-1 h-4 w-4
                      accent-[#018A7C]
                    "
                  />

                  <label
                    htmlFor="contact-consent"
                    className="
                      text-sm leading-6
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    I agree to be contacted regarding my inquiry.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    mt-8 inline-flex
                    w-full items-center
                    justify-center gap-3
                    rounded-xl
                    bg-[#018A7C]
                    px-7 py-4
                    font-semibold text-white
                    shadow-lg
                    shadow-[#018A7C]/20
                    transition duration-300
                    hover:-translate-y-1
                    hover:bg-[#007366]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#F5812D]
                  "
                >
                  Send Message
                  <FaPaperPlane aria-hidden="true" />
                </button>

                <p
                  className="
                    mt-4 text-center
                    text-xs leading-6
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Your message will be submitted securely over HTTPS to our
                  contact form provider.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/#home"
            aria-label="Back to top"
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-full border
              border-gray-200
              bg-white text-[#018A7C]
              shadow-lg
              transition duration-300
              hover:-translate-y-1
              hover:border-[#018A7C]
              dark:border-white/10
              dark:bg-[#121126]
              dark:text-[#32B6A5]
            "
          >
            <HiOutlineChevronDoubleUp size={26} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
