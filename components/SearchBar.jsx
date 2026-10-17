import React, { useState } from "react";
import { useRouter } from "next/router";

import { FaSearch, FaArrowRight, FaTimes } from "react-icons/fa";

/* ==========================================
   ASMARWEB STUDIO
   Portfolio Search Component
========================================== */

const SearchBar = ({
  placeholder = "Search projects, technologies, designs...",
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();

    const searchTerm = query.trim();

    if (!searchTerm) return;

    router.push({
      pathname: "/",
      query: { search: searchTerm },
      hash: "projects",
    });
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <form
      role="search"
      onSubmit={handleSearch}
      className={`
        mx-auto w-full
        max-w-3xl
        ${className}
      `}
    >
      <label htmlFor="studio-project-search" className="sr-only">
        Search AsmarWeb Studio projects
      </label>

      <div
        className="
          group flex items-center
          gap-2 rounded-2xl
          border border-gray-200
          bg-white p-2
          shadow-lg shadow-gray-200/40
          transition-all duration-300
          focus-within:border-[#018A7C]
          focus-within:ring-4
          focus-within:ring-[#018A7C]/10
          dark:border-white/10
          dark:bg-[#121126]
          dark:shadow-black/20
          dark:focus-within:border-[#32B6A5]
        "
      >
        {/* Search icon */}
        <div
          className="
            flex h-11 w-11
            shrink-0 items-center
            justify-center
            text-[#018A7C]
            dark:text-[#32B6A5]
          "
        >
          <FaSearch size={18} aria-hidden="true" />
        </div>

        {/* Input */}
        <input
          id="studio-project-search"
          type="search"
          name="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="
            min-w-0 flex-1
            border-0 bg-transparent
            px-1 py-3
            text-sm text-[#030017]
            outline-none
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-0
            dark:text-white
            dark:placeholder:text-gray-500
            sm:text-base
          "
        />

        {/* Clear button */}
        {query.length > 0 && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              flex h-9 w-9
              shrink-0 items-center
              justify-center
              rounded-lg
              !bg-transparent
              !text-gray-400
              !shadow-none
              transition-colors
              hover:!text-[#DC422F]
            "
          >
            <FaTimes size={14} aria-hidden="true" />
          </button>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={!query.trim()}
          aria-label="Search projects"
          className="
            flex h-11
            shrink-0 items-center
            justify-center gap-2
            rounded-xl
            !bg-[#018A7C]
            px-4
            !text-white
            !shadow-none
            transition duration-300
            hover:!bg-[#007366]
            disabled:cursor-not-allowed
            disabled:opacity-50
            sm:px-6
          "
        >
          <FaSearch className="sm:hidden" size={16} aria-hidden="true" />

          <span
            className="
              hidden text-sm
              font-semibold
              sm:inline
            "
          >
            Search
          </span>

          <FaArrowRight
            className="hidden sm:inline"
            size={13}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Search helper */}
      <p
        className="
          mt-3 text-center
          text-xs leading-6
          text-gray-500
          dark:text-gray-400
        "
      >
        Explore our creative work, development projects, and technologies.
      </p>
    </form>
  );
};

export default SearchBar;
