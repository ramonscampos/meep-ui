import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
    padding: 5px 15px;
    border: 1px solid #ff1843;
    border-radius: 3px;
    background: #ff1843;
    color: #fff;
    cursor: pointer;
    transition: .5s;

    &:hover {
        background: #fb002f;
    }
    &:active {
        background: #b90022;
    }
    &:disabled {
        background: #d2d2d2;
        border-color: #d2d2d2;
        cursor: not-allowed;
        color: grey;
    }
`;
