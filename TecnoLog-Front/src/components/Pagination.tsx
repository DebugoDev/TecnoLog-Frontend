import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200 focus:outline-none
          ${
            currentPage === 1
              ? "bg-[#1f3449] text-white hover:bg-[#175476] cursor-not-allowed"
              : "bg-[#1f3449] text-white hover:bg-[#175476]"
          }`}
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200 focus:outline-none
            ${
              page === currentPage
                ? "bg-[#175476] text-white"
                : "bg-[#1f3449] text-white hover:bg-[#175476]"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200
          ${
            currentPage === totalPages
              ? "bg-[#1f3449] text-white hover:bg-[#175476] cursor-not-allowed"
              : "bg-[#1f3449] text-white hover:bg-[#175476]"
          }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
