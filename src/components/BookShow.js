import { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const { deleteBook } = useContext(BooksContext);
  const [editing, setEditing] = useState(false);

  const handleDelete = () => deleteBook(book.id);
  const handleEdit = () => setEditing(!editing);

  return (
    <div className="book-show" style={{ border: '1px solid #ddd', padding: 10, margin: 10 }}>
      <img src={book.image} alt={book.title} width={200} height={150} />
      {editing ? (
        <BookEdit book={book} onFinishEdit={() => setEditing(false)} />
      ) : (
        <>
          <h3>{book.title}</h3>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BookShow;
