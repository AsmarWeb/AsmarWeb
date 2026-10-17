import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaShieldAlt,
} from "react-icons/fa";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email.trim() || !form.password) {
      setError("Please complete all required fields.");
      return;
    }

    setError(
      "Client login is not available yet. Authentication will be enabled when the client portal is ready.",
    );
  };

  return (
    <>
      <Head>
        <title>Login | AsmarWeb Studio</title>

        <meta
          name="description"
          content="AsmarWeb Studio client portal login."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main
        className="
          flex min-h-screen
          items-center justify-center
          bg-[#F8FAF9]
          px-4 py-24
          text-[#030017]
          dark:bg-[#030017]
          dark:text-white
        "
      >
        <div
          className="
            grid w-full max-w-5xl
            overflow-hidden
            rounded-3xl
            border border-gray-200
            bg-white shadow-2xl
            dark:border-white/10
            dark:bg-[#121126]
            lg:grid-cols-2
          "
        >
          {/* Left branding panel */}
          <div
            className="
              relative hidden
              overflow-hidden
              bg-[#030017]
              p-12 text-white
              lg:flex lg:flex-col
              lg:justify-between
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-24 -top-24
                h-80 w-80 rounded-full
                bg-[#018A7C]/25
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-24 -left-24
                h-72 w-72 rounded-full
                bg-[#DC422F]/20
                blur-3xl
              "
            />

            <div className="relative z-10">
              <Link
                href="/"
                className="
                  inline-flex items-center
                  gap-2 text-xl
                  font-extrabold
                  tracking-tight
                "
              >
                <span className="text-[#32B6A5]">AsmarWeb</span>

                <span>Studio.</span>
              </Link>
            </div>

            <div className="relative z-10 py-16">
              <span
                className="
                  inline-flex items-center
                  gap-2 rounded-full
                  border border-white/15
                  bg-white/5
                  px-4 py-2
                  text-xs font-semibold
                  uppercase tracking-widest
                  text-[#32B6A5]
                "
              >
                <FaShieldAlt size={13} aria-hidden="true" />
                Client Portal
              </span>

              <h1
                className="
                  mt-7 text-4xl
                  font-extrabold
                  leading-tight
                  xl:text-5xl
                "
              >
                Creative Work.
                <span
                  className="
                    mt-2 block
                    text-[#32B6A5]
                  "
                >
                  Connected.
                </span>
              </h1>

              <p
                className="
                  mt-6 max-w-sm
                  text-base leading-8
                  text-gray-300
                "
              >
                A future space for collaborating on projects, sharing updates,
                and connecting with AsmarWeb Studio.
              </p>
            </div>

            <div
              className="
                relative z-10
                flex items-center
                justify-between gap-4
                border-t border-white/10
                pt-6
              "
            >
              <span
                className="
                  text-xs text-gray-400
                "
              >
                © {new Date().getFullYear()} AsmarWeb Studio
              </span>

              <a
                href="https://github.com/AsmarWeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AsmarWeb GitHub"
                className="
                  text-gray-300
                  transition-colors
                  hover:text-[#32B6A5]
                "
              >
                <FaGithub size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right login panel */}
          <div
            className="
              flex flex-col
              justify-center
              px-6 py-12
              sm:px-10
              lg:px-12
              lg:py-16
            "
          >
            <Link
              href="/"
              className="
                mb-10 inline-flex
                items-center gap-2
                self-start
                text-sm font-semibold
                text-gray-500
                transition-colors
                hover:text-[#018A7C]
                dark:text-gray-400
                dark:hover:text-[#32B6A5]
              "
            >
              <FaArrowLeft size={12} aria-hidden="true" />
              Back to Website
            </Link>

            <div>
              <span
                className="
                  text-xs font-bold
                  uppercase tracking-widest
                  text-[#018A7C]
                  dark:text-[#32B6A5]
                "
              >
                Welcome to AsmarWeb Studio
              </span>

              <h2
                className="
                  mt-4 text-3xl
                  font-extrabold
                  tracking-tight
                  sm:text-4xl
                "
              >
                Sign In
                <span className="text-[#F5812D]">.</span>
              </h2>

              <p
                className="
                  mt-4 text-sm
                  leading-7
                  text-gray-600
                  dark:text-gray-300
                "
              >
                The client portal is currently under development.
              </p>
            </div>

            <div
              role="status"
              className="
                mt-8 rounded-xl
                border border-[#018A7C]/20
                bg-[#018A7C]/5
                px-4 py-3
                text-sm leading-6
                text-[#007366]
                dark:text-[#7BE0D1]
              "
            >
              Login is not available yet. You can explore our work or contact us
              in the meantime.
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="
                    mb-2 block
                    text-sm font-semibold
                  "
                >
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope
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
                    id="login-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="
                      w-full rounded-xl
                      border border-gray-200
                      bg-[#F8FAF9]
                      py-3.5 pl-11 pr-4
                      text-sm
                      text-[#030017]
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#018A7C]
                      focus:ring-2
                      focus:ring-[#018A7C]/15
                      dark:border-white/10
                      dark:bg-[#030017]
                      dark:text-white
                      dark:focus:border-[#32B6A5]
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="login-password"
                  className="
                    mb-2 block
                    text-sm font-semibold
                  "
                >
                  Password
                </label>

                <div className="relative">
                  <FaLock
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
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="
                      w-full rounded-xl
                      border border-gray-200
                      bg-[#F8FAF9]
                      py-3.5 pl-11 pr-12
                      text-sm
                      text-[#030017]
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-[#018A7C]
                      focus:ring-2
                      focus:ring-[#018A7C]/15
                      dark:border-white/10
                      dark:bg-[#030017]
                      dark:text-white
                      dark:focus:border-[#32B6A5]
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    className="
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-gray-500
                      transition-colors
                      hover:text-[#018A7C]
                      dark:text-gray-400
                      dark:hover:text-[#32B6A5]
                    "
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} aria-hidden="true" />
                    ) : (
                      <FaEye size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="
                    rounded-xl
                    border border-[#DC422F]/20
                    bg-[#DC422F]/5
                    px-4 py-3
                    text-sm leading-6
                    text-[#DC422F]
                    dark:text-[#FF725B]
                  "
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="
                  flex w-full
                  items-center justify-center
                  gap-3 rounded-xl
                  bg-[#018A7C]
                  px-6 py-4
                  text-sm font-bold
                  text-white
                  transition-all duration-300
                  hover:bg-[#007366]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#018A7C]
                "
              >
                Sign In
                <FaArrowRight size={13} aria-hidden="true" />
              </button>
            </form>

            {/* Contact link */}
            <div
              className="
                mt-8 border-t
                border-gray-200 pt-6
                text-center
                dark:border-white/10
              "
            >
              <p
                className="
                  text-sm
                  text-gray-600
                  dark:text-gray-300
                "
              >
                Interested in working with us?
              </p>

              <Link
                href="/#contact"
                className="
                  mt-3 inline-flex
                  items-center gap-2
                  text-sm font-bold
                  text-[#018A7C]
                  transition-colors
                  hover:text-[#DC422F]
                  dark:text-[#32B6A5]
                "
              >
                Contact AsmarWeb Studio
                <FaArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
