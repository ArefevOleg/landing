import React from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
    backgroundColor?: string
    padding?: string
    borderRadius?: number
    fontSize?: number
    color?: string
    hoverBackgroundColor?: string
    children?: React.ReactNode;
}


const Button = styled.button<ButtonPropsType>`
  background-color: ${props => props.backgroundColor || 'blue'};
  color: ${props => props.color || 'white'};
  padding: ${props => props.padding || '10px 20px'};
  border: none;
  border-radius: ${props => props.borderRadius || '5px'};
  cursor: pointer;
  font-size: ${props => props.fontSize || '16px'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || 'darkblue'};
  }
`;

export const UniversalButton = ({ children, ...props }: ButtonPropsType) => {
    return <Button {...props}>{children}</Button>;
};
