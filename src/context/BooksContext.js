import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
      image: `https://picsum.photos/200/150?random=${Math.floor(Math.random() * 1000)}`
    });
    setBooks([...books, response.data]);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
  };

  const updateBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      image: `https://picsum.photos/200/150?random=${Math.floor(Math.random() * 1000)}`
    });
    const updated = books.map(book => book.id === id ? response.data : book);
    setBooks(updated);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, createBook, deleteBook, updateBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
