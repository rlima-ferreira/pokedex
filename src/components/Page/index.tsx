import React from 'react';
import Header from '../Header';
import { Footer, Main } from './styled';

type PropType = {
  children: any;
};

export default function Page({ children }: PropType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
