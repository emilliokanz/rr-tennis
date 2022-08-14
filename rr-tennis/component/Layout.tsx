import Header from './Header';
import Footer from './Footer';
import React from "react";
import { Box } from '@chakra-ui/react';

export default function layout({ children }: any) {
  return (
    <Box>
      <Header />
      <section>{children}</section>
      <Footer />
    </Box>
  );
}
