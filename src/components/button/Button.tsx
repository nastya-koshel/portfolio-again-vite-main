import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type ButtonPropsType = {
    text: string;
}
export const Button = (props:ButtonPropsType) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: ${theme.colors.secondary};
    border-radius: 50px;
    border: none;
    min-height: 54px;
    padding: 0 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`