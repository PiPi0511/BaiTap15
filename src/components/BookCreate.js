import { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a Book"
      />
      <button>Create</button>
    </form>
  );
}

export default BookCreate;
