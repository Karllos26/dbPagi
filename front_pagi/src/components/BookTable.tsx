import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

interface Book {
  _id: string;
  titulo: string;
  autor: string;
  isbn: string;
  paginas: number;
  ano: number;
  valor: string;
}

const BookTable: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get('/books');
      setBooks(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar livros", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (error && books.length === 0) {
      const interval = setInterval(fetchBooks, 5000); // Tenta reconectar a cada 5 segundos
      return () => clearInterval(interval);
    }
  }, [error]);

  // Obtém os livros da página atual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Muda de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error && books.length === 0) {
    return <div>Tentando reconectar à API...</div>;
  }

  return (
    <div className='book-table-container'>
      <h1>Catálogo de livros</h1>
      <table>
        <thead>
          <tr>
            <th className='titulo'>Título</th>
            <th className='autor'>Autor</th>
            <th className='isbn'>ISBN</th>
            <th className='paginas'>Páginas</th>
            <th className='ano'>Ano</th>
            <th className='valor'>Valor</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map(book => (
            <tr key={book._id}>
              <td >{book.titulo}</td>
              <td>{book.autor}</td>
              <td>{book.isbn}</td>
              <td>{book.paginas}</td>
              <td>{book.ano}</td>
              <td>R$ {book.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        booksPerPage={booksPerPage} 
        totalBooks={books.length} 
        paginate={paginate} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default BookTable;
