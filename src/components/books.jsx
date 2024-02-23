import { Category } from './category';

import { Center, Flex, List, Heading, Text } from '@chakra-ui/react';

export const Books = ({ books, borrowBook, returnBook }) => {
  const filteredBookList = books.filter((bookItem) => bookItem.category === 'programming');
  // Further code to use filteringBookList...

  return (
    <>
      <div className="App">
        <h2>Books in our library: {books.length}</h2>
      </div>
      <Category title="Programming: " borrowBook={borrowBook} returnBook={returnBook} selectedBooks={filteredBookList} />
    </>
  );
};
