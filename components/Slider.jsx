import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";

/* ==========================================
   ASMARWEB STUDIO
   Creative Services Slider
========================================== */

const slides = [
  {
    id: 1,
    eyebrow: "Creative Digital Studio",
    title: "We Build Digital",
    highlight: "Experiences.",
    description:
      "From creative concepts to functional websites, we bring design and technology together to help ideas take shape.",
    icon: FaLaptopCode,
    label: "Web Experiences",
    primaryText: "Explore Our Work",
    primaryUrl: "/#projects",
    secondaryText: "Let's Talk",
    secondaryUrl: "/#contact",
    accent: "#018A7C",
  },
  {
    id: 2,
    eyebrow: "Design & Branding",
    title: "Design That Makes",
    highlight: "An Impact.",
    description:
      "Creative visuals, brand identities, and user-focused interfaces designed to communicate ideas clearly.",
    icon: FaPaintBrush,
    label: "Creative Design",
    primaryText: "View Projects",
    primaryUrl: "/#projects",
    secondaryText: "Start a Project",
    secondaryUrl: "/#contact",
    accent: "#DC422F",
  },
  {
    id: 3,
    eyebrow: "Software Development",
    title: "Turning Ideas Into",
    highlight: "Solutions.",
    description:
      "Building practical digital platforms and web applications with modern development tools and open-source thinking.",
    icon: FaCode,
    label: "Software Solutions",
    primaryText: "Our Projects",
    primaryUrl: "/#projects",
    secondaryText: "Collaborate",
    secondaryUrl: "/#contact",
    accent: "#F5812D",
  },
  {
    id: 4,
    eyebrow: "Digital Media & Marketing",
    title: "Creative Content.",
    highlight: "Real Connections.",
    description:
      "Combining visual storytelling, digital content, and creative communication to support a stronger online presence.",
    icon: FaBullhorn,
    label: "Digital Creativity",
    primaryText: "Discover Our Work",
    primaryUrl: "/#projects",
    secondaryText: "Get in Touch",
    secondaryUrl: "/#contact",
    accent: "#018A7C",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];
  const ActiveIcon = activeSlide.icon;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setActiveIndex((previous) => (previous + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (previous) => (previous - 1 + slides.length) % slides.length,
    );
  };

  return (
    <section
      aria-label="AsmarWeb Studio services"
      aria-roledescription="carousel"
      className="
        relative w-full overflow-hidden
        bg-[#F8FAF9] py-16
        dark:bg-[#030017]
        md:py-24
      "
    >
      <div className="studio-container">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            bg-[#030017]
            text-white
            shadow-2xl
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-32 -top-32
              h-96 w-96 rounded-full
              bg-[#018A7C]/20
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-40 -left-20
              h-96 w-96 rounded-full
              bg-[#DC422F]/15
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-full w-px
              bg-white/5
              lg:block
            "
          />

          {/* Slide content */}
          <div
            key={activeSlide.id}
            className="
              relative z-10
              grid min-h-[480px]
              grid-cols-1
              items-center gap-10
              px-6 py-14
              sm:px-10
              md:min-h-[500px]
              lg:grid-cols-2
              lg:px-16
            "
          >
            {/* Text content */}
            <div className="max-w-xl">
              <div
                className="
                  mb-6 inline-flex
                  items-center gap-2
                  rounded-full
                  border border-white/15
                  bg-white/5
                  px-4 py-2
                  text-xs font-semibold
                  uppercase tracking-widest
                  text-[#32B6A5]
                "
              >
                <span
                  className="
                    h-2 w-2
                    rounded-full
                    bg-[#F5812D]
                  "
                />

                {activeSlide.eyebrow}
              </div>

              <h2
                className="
                  text-4xl font-extrabold
                  leading-tight
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {activeSlide.title}

                <span
                  className="
                    mt-2 block
                    text-[#32B6A5]
                  "
                >
                  {activeSlide.highlight}
                </span>
              </h2>

              <p
                className="
                  mt-6 max-w-lg
                  text-base leading-8
                  text-gray-300
                  sm:text-lg
                "
              >
                {activeSlide.description}
              </p>

              {/* CTA buttons */}
              <div
                className="
                  mt-9 flex flex-wrap
                  items-center gap-4
                "
              >
                <Link
                  href={activeSlide.primaryUrl}
                  className="
                    inline-flex items-center
                    justify-center gap-3
                    rounded-xl
                    bg-[#018A7C]
                    px-6 py-3.5
                    text-sm font-semibold
                    text-white
                    transition-all duration-300
                    hover:bg-[#007366]
                  "
                >
                  {activeSlide.primaryText}

                  <FaArrowRight size={13} aria-hidden="true" />
                </Link>

                <Link
                  href={activeSlide.secondaryUrl}
                  className="
                    inline-flex items-center
                    justify-center
                    rounded-xl
                    border border-white/20
                    bg-white/5
                    px-6 py-3.5
                    text-sm font-semibold
                    text-white
                    transition-all duration-300
                    hover:border-[#F5812D]
                    hover:bg-white/10
                  "
                >
                  {activeSlide.secondaryText}
                </Link>
              </div>
            </div>

            {/* Visual content */}
            <div
              className="
                relative hidden
                min-h-[330px]
                items-center justify-center
                lg:flex
              "
            >
              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="
                  absolute h-80 w-80
                  rounded-full
                  border border-white/10
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute h-64 w-64
                  rounded-full
                  border border-white/10
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute h-48 w-48
                  rounded-full
                  border border-white/10
                "
              />

              {/* Main visual card */}
              <div
                className="
                  relative z-10
                  flex h-52 w-52
                  flex-col items-center
                  justify-center gap-5
                  rounded-3xl
                  border border-white/15
                  bg-white/10
                  p-8
                  text-center
                  shadow-2xl
                  backdrop-blur-xl
                  transition-transform duration-500
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                    flex h-20 w-20
                    items-center justify-center
                    rounded-2xl
                    bg-[#018A7C]/20
                  "
                >
                  <ActiveIcon
                    size={38}
                    style={{
                      color: activeSlide.accent,
                    }}
                    aria-hidden="true"
                  />
                </div>

                <span
                  className="
                    text-sm font-bold
                    tracking-wide
                  "
                >
                  {activeSlide.label}
                </span>
              </div>

              {/* Floating decorative elements */}
              <div
                aria-hidden="true"
                className="
                  absolute right-12 top-10
                  h-12 w-12 rounded-2xl
                  bg-[#F5812D]/30
                  blur-sm
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute bottom-10 left-12
                  h-16 w-16 rounded-full
                  bg-[#018A7C]/30
                  blur-sm
                "
              />
            </div>
          </div>

          {/* Slider controls */}
          <div
            className="
              relative z-20
              flex flex-wrap
              items-center justify-between
              gap-4
              border-t border-white/10
              px-6 py-5
              sm:px-10
              lg:px-16
            "
          >
            {/* Slide indicators */}
            <div
              className="
                flex items-center gap-3
              "
              aria-label="Choose a slide"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.label}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`
                    h-2.5 rounded-full
                    !p-0 !shadow-none
                    transition-all duration-300

                    ${
                      activeIndex === index
                        ? `
                          !w-9
                          !bg-[#018A7C]
                        `
                        : `
                          !w-2.5
                          !bg-white/30
                          hover:!bg-white/60
                        `
                    }
                  `}
                />
              ))}
            </div>

            {/* Slide counter */}
            <span
              className="
                text-xs font-semibold
                tracking-widest
                text-gray-400
              "
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            {/* Navigation arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  !border !border-white/20
                  !bg-white/5
                  !text-white
                  !shadow-none
                  transition-all
                  hover:!border-[#018A7C]
                  hover:!bg-[#018A7C]
                "
              >
                <FaChevronLeft size={13} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  !border !border-white/20
                  !bg-white/5
                  !text-white
                  !shadow-none
                  transition-all
                  hover:!border-[#018A7C]
                  hover:!bg-[#018A7C]
                "
              >
                <FaChevronRight size={13} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
