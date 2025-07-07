import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type PortfolioBtnPropsType = {
    text?: string;
}
export const PortfolioBtn = (props:PortfolioBtnPropsType) => {
    return (
        <StyledPortfolioBtn>{props.text}</StyledPortfolioBtn>
    )
}

const StyledPortfolioBtn = styled.button<PortfolioBtnPropsType>`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.fontWhite};
    border-radius: 50px;
    border: none;
    min-height: 54px;
    padding: 0 64px;
    font-size: 20px;
    line-height: 1.5;
    cursor: pointer;
`