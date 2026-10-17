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
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import ContactImg from "../public/assets/contact.jpg";

/* ==========================================
   ASMARWEB STUDIO — CONTACT
========================================== */

const EMAIL = "mr.asmar.web@gmail.com";

const FORM_ENDPOINT =
  "https://getform.io/f/6f3a52e6-5471-49f4-a62f-39d5faa2c69c";

// Replace with your real WhatsApp number.
// International format, digits only.
// Example format: 9715XXXXXXXX
const WHATSAPP_NUMBER = "971559650283";

const WHATSAPP_MESSAGE =
  "Hello AsmarWeb Studio! I would like to discuss a project with you.";

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE,
    )}`
  : null;

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

const inputClass = `
  w-full rounded-xl
  border border-gray-200
  bg-[#F8FAF9]
  px-4 py-3.5
  text-sm text-[#030017]
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
`;

const labelClass = "mb-2 block text-sm font-semibold";

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative overflow-hidden
        bg-white py-20
        text-[#030017]
        dark:bg-[#030017]
        dark:text-white
        md:py-28
      "
    >
      {/* Decorative backgrounds */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-10
          h-96 w-96 rounded-full
          bg-[#018A7C]/10 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-20 -left-32
          h-80 w-80 rounded-full
          bg-[#DC422F]/10 blur-3xl
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
            collaborate? Share your ideas and let&apos;s explore what we can
            build together.
          </p>
        </div>

        <div
          className="
            grid grid-cols-1
            items-stretch gap-8
            lg:grid-cols-5
          "
        >
          {/* ==================================
              LEFT — CONTACT INFORMATION
          ================================== */}
          <div className="lg:col-span-2">
            <div className="studio-card h-full p-5 sm:p-6">
              {/* Image */}
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

              {/* Studio introduction */}
              <div className="mt-7">
                <h3 className="text-2xl font-extrabold">
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
                  software development, web design, branding, and digital
                  experiences.
                </p>
              </div>

              {/* Email */}
              <div
                className="
                  mt-7 border-t
                  border-gray-200 pt-7
                  dark:border-white/10
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#018A7C]/10
                      text-[#018A7C]
                      dark:text-[#32B6A5]
                    "
                  >
                    <FaEnvelope size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold">Email Us</p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="
                        mt-1 block break-all
                        text-sm text-gray-600
                        hover:text-[#018A7C]
                        dark:text-gray-300
                      "
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-6 flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#DC422F]/10
                      text-[#DC422F]
                      dark:text-[#FF725B]
                    "
                  >
                    <FaMapMarkerAlt size={19} />
                  </div>

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

              {/* ==================================
                  WHATSAPP CONTACT
              ================================== */}
              <div
                className="
                  mt-8 rounded-2xl
                  border border-[#25D366]/25
                  bg-[#25D366]/5 p-5
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#25D366]/15
                      text-[#128C7E]
                      dark:text-[#25D366]
                    "
                  >
                    <FaWhatsapp size={25} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">Chat on WhatsApp</h4>

                    <p
                      className="
                        mt-2 text-sm leading-7
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      Prefer a quick conversation? Reach out to discuss your
                      project directly.
                    </p>
                  </div>
                </div>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5 inline-flex w-full
                      items-center justify-center
                      gap-3 rounded-xl
                      bg-[#128C7E]
                      px-5 py-3.5
                      text-sm font-bold
                      text-white
                      transition-colors
                      hover:bg-[#075E54]
                    "
                  >
                    <FaWhatsapp size={20} />
                    Start WhatsApp Chat
                    <FaArrowRight size={12} />
                  </a>
                ) : (
                  <p
                    className="
                      mt-5 rounded-xl
                      border border-dashed
                      border-[#128C7E]/30
                      px-4 py-3
                      text-center text-xs
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    WhatsApp contact will be available soon.
                  </p>
                )}
              </div>

              {/* Social links */}
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
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:border-[#018A7C]
                          hover:text-[#018A7C]
                          dark:border-white/10
                          dark:bg-[#030017]
                          dark:text-gray-300
                          dark:hover:border-[#32B6A5]
                        "
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Collaboration */}
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
                  interested in collaboration.
                </p>

                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    "Join AsmarWeb Studio",
                  )}`}
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
                  <FaArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* ==================================
              RIGHT — CONTACT FORM
          ================================== */}
          <div className="lg:col-span-3">
            <div className="studio-card h-full p-6 sm:p-8">
              <div className="mb-8">
                <span
                  className="
                    inline-flex items-center gap-2
                    text-xs font-bold
                    uppercase tracking-widest
                    text-[#018A7C]
                    dark:text-[#32B6A5]
                  "
                >
                  <FaCheckCircle size={13} />
                  Project Enquiry
                </span>

                <h3
                  className="
                    mt-4 text-2xl
                    font-extrabold
                    sm:text-3xl
                  "
                >
                  Tell Us About Your Project
                </h3>

                <p
                  className="
                    mt-3 text-sm leading-7
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Fill in the form below. Your enquiry will be submitted to our
                  contact form service.
                </p>
              </div>

              <form action={FORM_ENDPOINT} method="POST" acceptCharset="UTF-8">
                {/* Metadata */}
                <input
                  type="hidden"
                  name="source"
                  value="AsmarWeb Studio Website"
                />

                <div
                  className="
                    grid grid-cols-1
                    gap-5 md:grid-cols-2
                  "
                >
                  {/* Full name */}
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                      Phone / WhatsApp
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+971 ..."
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className={labelClass}>
                      Service / Inquiry Type *
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      className={inputClass}
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
                  <label htmlFor="contact-subject" className={labelClass}>
                    Subject *
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className={inputClass}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label htmlFor="contact-message" className={labelClass}>
                    Project Details *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    placeholder="Tell us about your project, goals, timeline, budget, or collaboration idea..."
                    className={`${inputClass} min-h-[180px] resize-y`}
                    required
                  />
                </div>

                {/* Consent */}
                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    value="yes"
                    required
                    className="
                      mt-1 h-4 w-4
                      shrink-0 accent-[#018A7C]
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
                    I agree to be contacted regarding my enquiry.
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
                    transition-all duration-300
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
                  Your information is submitted over HTTPS to our form provider.
                  Email notifications depend on the provider&apos;s settings.
                </p>
              </form>

              {/* Alternative contact */}
              <div
                className="
                  mt-8 border-t
                  border-gray-200 pt-7
                  text-center
                  dark:border-white/10
                "
              >
                <p
                  className="
                    text-sm text-gray-600
                    dark:text-gray-300
                  "
                >
                  Prefer contacting us directly?
                </p>

                <div
                  className="
                    mt-4 flex flex-wrap
                    justify-center gap-3
                  "
                >
                  <a
                    href={`mailto:${EMAIL}`}
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
                    "
                  >
                    <FaEnvelope />
                    Send an Email
                  </a>

                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center
                        gap-2 rounded-xl
                        bg-[#128C7E]
                        px-5 py-3
                        text-sm font-semibold
                        text-white
                        transition-colors
                        hover:bg-[#075E54]
                      "
                    >
                      <FaWhatsapp size={18} />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
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
              rounded-full
              border border-gray-200
              bg-white
              text-[#018A7C]
              shadow-lg
              transition-all duration-300
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
}

export default Contact;
