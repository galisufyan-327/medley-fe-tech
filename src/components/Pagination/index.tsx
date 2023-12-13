import React from "react";
import { ActionButton, PageButton, PaginationContainer } from "./styles";

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageButtons = () => {
    const buttons = [];

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    buttons.push(
      <ActionButton disabled={currentPage <= 1} key="prev" onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </ActionButton>
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          isSelected={currentPage === i}
        >
          {i}
        </PageButton>
      );
    }

    buttons.push(
      <ActionButton disabled={currentPage >= totalPages} key="next" onClick={() => onPageChange(currentPage + 1)}>
        Next
      </ActionButton>
    );

    return buttons;
  };

  return <PaginationContainer>{generatePageButtons()}</PaginationContainer>;
};

export default Pagination;
