import { collection } from './collection';
import { useState } from 'react';
import { Books } from './components/books';

import { Center, Flex, List, Heading, Text } from '@chakra-ui/react';

export const Library = () => {
  const [books, setBooks] = useState(collection.books); // Initialize useState with current state of the array

  const borrowBook = (id) => {
    // Borrow the book with that id

    const newBorrowedBooks = books.map((bookItem) => {
      // in the past I had collection.books.map the 'collection' was not needed
      // to directly connect with the use state 'books'above
      if (bookItem.id === id) {
        // if you find the book with this id do the following

        return { ...bookItem, available: false }; // create new object using the spread operator and set it availability to false
        /* The curly braces are used to define the object literal. They are necessary to create a new object in JavaScript.
             Without curly braces, the syntax would not be recognized as an object, and thus the operation wouldn't work. 
            Comma Usage: The comma is used within the object literal syntax to separate properties.
            In the case of { ...bookItem, available: false }, it separates the spread properties from the available property
            you're explicitly setting. This syntax allows you to override specific properties in the new object while copying the rest from the original.
            is like saying 'apart' from all the properties created I want to select the following 'available' and change its value to false
            */
      } else {
        return bookItem; //otherwise leave it as it is
      }
    });

    setBooks(newBorrowedBooks);
  };

  const returnBook = (id) => {
    // Borrow the book with that id

    const newReturnedBooks = books.map((bookItem) => {
      if (bookItem.id === id) {
        // if you find the book with this id do the following

        return { ...bookItem, available: true }; // create new object using the spread operator and set it availability to false
      } else {
        return bookItem; //otherwise leave it as it is
      }
    });

    setBooks(newReturnedBooks);
  };

  return (
    <>
      <div className="App">
        <h1>My Library</h1>
      </div>
      <Books books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </>
  );
};
