import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type ButtonPropsType = {
    text?: string;
    fontColor?: string;
}
export const Button = (props:ButtonPropsType) => {
    return (
        <StyledButton fontColor={props.fontColor}>{props.text}</StyledButton>
    )
}

const StyledButton = styled.button<ButtonPropsType>`
    background-color: ${theme.colors.secondary};
    color: ${props => props.fontColor || "black"};
    border-radius: 50px;
    border: none;
    min-height: 54px;
    padding: 0 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`