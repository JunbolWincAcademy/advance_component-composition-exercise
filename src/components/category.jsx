
export const Category = ({ title, amount, children }) => {
  return (
    <>
      <h3>Category: {title}</h3>
      <h3>Books found: {amount}</h3>
      {children}
    </>
  );
};

//------saved code
/* {selectedBooks.map((book) => (
  <Book key={book.id} book={book} borrowBook={borrowBook} returnBook={returnBook} />
))} */
