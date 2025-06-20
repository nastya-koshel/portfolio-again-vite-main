import styled from "styled-components";

type ButtonPropsType = {
    text: string;
}
export const Button = (props:ButtonPropsType) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: rgba(15, 191, 97, 1);
    border-radius: 50px;
    border: none;
`