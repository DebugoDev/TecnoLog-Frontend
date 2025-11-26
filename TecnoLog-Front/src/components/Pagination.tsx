import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IPagination } from "../services/api";

interface PaginationProps {
    pagination: IPagination;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
    const { page, totalPages, hasPreviousPage, hasNextPage } = pagination;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-2 py-4">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={!hasPreviousPage}
                className={`flex items-center justify-center px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200
                    ${!hasPreviousPage
                        ? "bg-[#1f3449] text-white opacity-50 cursor-not-allowed"
                        : "bg-[#1f3449] text-white hover:bg-[#175476]"
                    }`}
            >
                <ChevronLeft size={18} />
            </button>

            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200 focus:outline-none
                        ${p === page
                            ? "bg-[#175476] text-white"
                            : "bg-[#1f3449] text-white hover:bg-[#175476]"
                        }`}
                >
                    {p}
                </button>
            ))}

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={!hasNextPage}
                className={`flex items-center justify-center px-3 py-2 rounded-lg border-none shadow-lg transition-colors duration-200
                    ${!hasNextPage
                        ? "bg-[#1f3449] text-white opacity-50 cursor-not-allowed"
                        : "bg-[#1f3449] text-white hover:bg-[#175476]"
                    }`}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
