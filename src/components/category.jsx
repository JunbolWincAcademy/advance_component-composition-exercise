import { Book } from './book'; // there is an issue here in './book' \i resolved it by changing its name and renaming back again how it was

export const Category = ({ title, selectedBooks, borrowBook, returnBook }) => {
  return (
    <>
      <h3>
        {title} ({selectedBooks.length}):
      </h3>
      {selectedBooks.map((book) => (
        <Book key={book.id} book={book} borrowBook={borrowBook} returnBook={returnBook} />
      ))}
    </>
  );
};
