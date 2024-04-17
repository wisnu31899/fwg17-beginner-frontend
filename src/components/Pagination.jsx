import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, handlePageClick, handlePrevPage, handleNextPage }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    buttons.push(
      <button
        className={`text-[#FF8906] ${
          currentPage === 1 ? "text-[#FF8906]" : "text-[#A0A3BD]"
        }`}
        key="prev"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <FiArrowLeftCircle className="text-[white] fill-[#FF8906] w-[40px] h-[40px]" />
      </button>
    );
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          className={`flex justify-center items-center border-none rounded-full ${
            currentPage === i ? "bg-[#FF8906] text-white" : "bg-[#E8E8E8] text-[#A0A3BD]"
          } w-[33px] h-[33px]`}
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    buttons.push(
      <button
        className={`text-[#FF8906] ${
          currentPage === totalPages ? "text-[#FF8906]" : "text-[#A0A3BD]"
        }`}
        key="next"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <FiArrowRightCircle className="text-[white] fill-[#FF8906] w-[40px] h-[40px]" />
      </button>
    );
    return buttons;
  };

  return <div className="flex justify-center gap-[10px] items-center">{renderPaginationButtons()}</div>;
};

export default Pagination;
