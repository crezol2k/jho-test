import { FC, useState } from "react";
import "./pagination.css";
import { PaginationProps } from "../../../models";
import NextIcon from "../../../assets/icons/pagination/next.svg";
import PrevIcon from "../../../assets/icons/pagination/prev.svg";
import FirstIcon from "../../../assets/icons/pagination/first.svg";
import LastIcon from "../../../assets/icons/pagination/last.svg";
import ArrorDownIcon from "../../../assets/icons/dashboard/arrow-down.svg";

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const [elementsPerPage, setElementsPerPage] = useState<number>(25);

  const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof event.target.value === "string") {
      setElementsPerPage(Number(event.target.value));
    }
  };
  return (
    <section className='section-pagination'>
      <div className='section-pagination__left'>
        <span>Éléments par page</span>
        <div className='custom-select'>
          <select value={elementsPerPage} onChange={handleSelect}>
            {[10, 15, 20, 25].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          <img src={ArrorDownIcon} alt='icon' />
        </div>
        <span>1-{elementsPerPage} sur 500 éléments</span>
      </div>

      <div className='section-pagination__middle'>
        <div className='pagination-list'>
          <button
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageClick(1)}
          >
            <img src={FirstIcon} alt='icon' />
          </button>

          <button
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <img src={PrevIcon} alt='icon' />
          </button>

          <div className='current-page'>
            <span className='current-page__to'>{"1"}</span>
            <span className='current-page__from'>{`de 50`}</span>
          </div>

          <button
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <img src={NextIcon} alt='icon' />
          </button>
          <button
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageClick(totalPages)}
          >
            <img src={LastIcon} alt='icon' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
