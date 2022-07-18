import React from 'react';
import { Container } from './styled';

type PropType = {
  children?: any;
};

export default function Header({ children }: PropType) {
  return <Container>{children}</Container>;
}
