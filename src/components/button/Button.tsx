import React from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
    backgroundColor?: string
    padding?: string
    borderRadius?: number
    fontSize?: string
    color?: string
    hoverBackgroundColor?: string
    children?: React.ReactNode;
    margin?: number
    onClick: () => void
    width?: string;
    fontWeight?: string;
}


const Button = styled.button<ButtonPropsType>`
    display: inline-block;
    background-color: ${props => props.backgroundColor || 'blue'};
    color: ${props => props.color || 'white'};
    padding: ${props => props.padding || '5px 5px'};
    margin: ${props => props.margin || '0'};
    border: none;
    border-radius: ${props => props.borderRadius || '5px'};
    cursor: pointer;
    font-size: ${props => props.fontSize || '16px'};
    transition: background-color 0.3s ease;
    width: ${props => props.width || 'auto'};
    font-weight: ${props => props.fontWeight || '600'};

    &:hover {
        background-color: ${props => props.hoverBackgroundColor || 'darkblue'};
    }
`;

export const UniversalButton = ({ children,onClick, ...props }: ButtonPropsType) => {
    const onClickHandler = () => {
        onClick()
    }
    return <Button onClick={onClickHandler} {...props}>{children}</Button>;
};
