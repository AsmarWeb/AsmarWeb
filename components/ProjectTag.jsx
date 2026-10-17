import React from "react";

/* ==========================================
   ASMARWEB STUDIO
   Project Category Filter
========================================== */

const ProjectTag = ({ name, onClick, isSelected = false }) => {
  return (
    <button
      type="button"
      onClick={() => onClick?.(name)}
      aria-pressed={isSelected}
      className={`
        inline-flex items-center
        justify-center gap-2
        rounded-full border
        px-5 py-2.5
        text-sm font-semibold
        transition-all duration-300
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#018A7C]
        !shadow-none

        ${
          isSelected
            ? `
              !border-[#018A7C]
              !bg-[#018A7C]
              !text-white
            `
            : `
              !border-gray-200
              !bg-white
              !text-gray-700
              hover:!border-[#018A7C]
              hover:!bg-[#018A7C]/5
              hover:!text-[#018A7C]
              dark:!border-white/10
              dark:!bg-[#121126]
              dark:!text-gray-300
              dark:hover:!border-[#32B6A5]
              dark:hover:!text-[#32B6A5]
            `
        }
      `}
    >
      {isSelected && (
        <span
          aria-hidden="true"
          className="
            h-2 w-2
            rounded-full
            bg-[#F5812D]
          "
        />
      )}

      {name}
    </button>
  );
};

export default ProjectTag;
