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


//-------NOTES ABOUT THE MECHANICS OF THE BUTTONS SWITCHING
/* the state of available is by nature in the dataset in true in all of the books but that has been change in the borrowBook function to 
false in all of th books so if the user click on that specific book button then that button will show Return because that is set by the
 ternary operator. Why the other buttons of the other books don't turn into Return too? because React knows the id of the book 
 the user has clicked because of => borrowBook(book.id) and tin the borrowBook declaration id  (or the book the user clicked) is 
 use as an argument and the logic inside is turning false only that book id */
