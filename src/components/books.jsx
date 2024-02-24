import { Category } from './category';

import { Center, Flex, List, Heading, Text } from '@chakra-ui/react';

export const Books = ({ title, amount, children }) => {
 
  // Further code to use filteringBookList...

  return (
    <>
      <div className="App">
        <h2>Books in our library: {amount}</h2>
      </div>
      {children}
    </>
  );
};
