import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type NewButtonPropsType = {
    text?: string;
}

export const NewButton = (props:NewButtonPropsType) => {
    return (
        <StyledNewButton>{props.text}</StyledNewButton>
    )
}


const StyledNewButton = styled.button`
    border: none;
    border-radius: 50px;
    padding: 12px 40px;
    cursor: pointer;
    font-size: 18px;
    
    text-align: right;
    color: ${theme.colors.secondary};
`