import { getPaginationRange } from "@/hooks/useBlogFilterPagination";
import { ChevronRight } from "lucide-react";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const pageButtonClass =
  "group w-8.75 lg:w-11.25 h-[32.8px] lg:h-10.5 flex justify-center items-center bg-white border-[0.78px] lg:border-[1.45px] border-primary rounded-[3.91px] lg:rounded-[5px] cursor-pointer";

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex justify-center gap-x-[9.39px] lg:gap-x-3">
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        className={`${pageButtonClass} hover:bg-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronRight className="w-[16px] group-hover:text-white group-disabled:group-hover:text-inherit rotate-180" />
      </button>

      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            className="w-8.75 lg:w-11.25 h-[32.8px] lg:h-10.5 flex justify-center items-center text-[#959595]"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`${pageButtonClass} hover:text-white hover:bg-primary ${
              currentPage === page ? "bg-primary! text-white" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        className={`${pageButtonClass} hover:bg-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-[16px] group-hover:text-white group-disabled:group-hover:text-inherit" />
      </button>
    </div>
  );
}
