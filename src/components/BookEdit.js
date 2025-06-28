import { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';

function BookEdit({ book, onFinishEdit }) {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(book.id, title);
    onFinishEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Save</button>
    </form>
  );
}

export default BookEdit;
