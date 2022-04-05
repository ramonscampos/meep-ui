import React from 'react';
import { Container } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export { Button };
