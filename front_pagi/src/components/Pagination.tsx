import React from 'react';

interface PaginationProps {
  booksPerPage: number;
  totalBooks: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers: number[] = [];
  const maxPageItems = 3; // Define o número máximo de botões de página em cada lado

  for (let i = Math.max(1, currentPage - maxPageItems); i <= Math.min(currentPage + maxPageItems, Math.ceil(totalBooks / booksPerPage)); i++) {
    pageNumbers.push(i);
  }

  // Calcula os índices do primeiro e do último livro na página atual
  const indexOfLastBook = Math.min(currentPage * booksPerPage, totalBooks);
  const indexOfFirstBook = Math.min(indexOfLastBook - booksPerPage + 1, totalBooks);

  return (
    <nav>
      <div className='pagination-counter'>
        Exibindo de {indexOfFirstBook} até {indexOfLastBook} de {totalBooks} livros
      </div>
      <ul className='pagination'>
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => paginate(1)} href='!#' className={currentPage === 1 ? 'disabled' : ''}>&lt;&lt;</a>
        </li >
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => paginate(currentPage - 1)} href='!#'>&lt;</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
        <li className={currentPage === Math.ceil(totalBooks / booksPerPage) ? 'disabled' : ''}>
          <a onClick={() => paginate(currentPage + 1)} href='!#'>&gt;</a>
        </li>
        <li className={currentPage === Math.ceil(totalBooks / booksPerPage) ? 'disabled' : ''}>
          <a onClick={() => paginate(Math.ceil(totalBooks / booksPerPage))} href='!#' className={currentPage === Math.ceil(totalBooks / booksPerPage) ? 'disabled' : ''}>&gt;&gt;</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
