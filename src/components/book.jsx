import { Center, Flex, List, Heading, Text, Button } from '@chakra-ui/react';

export const Book = ({ book, borrowBook, returnBook }) => {
  return (
    <>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        {/* I need implement here the ternary operator */}
        {book.available ? (
          <Button size="sm" bgColor="green" type="button" onClick={() => borrowBook(book.id)}>{/*// in order not to trigger the 
          onClick action(borrowBook you need to insert it as arrow function. and pass the book id as an argument*/}
            Borrow
          </Button>
        ) : (
          <Button size="sm" bgColor="green" type="button" onClick={() => returnBook(book.id)}>
            Return
          </Button>
        )}
      </div>
    </>
  );
};
