import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type StyledSectionTitleType = {
    title?: string;
    align?: string;
    marginBtm?: string;
}

export const SectionTitle = (props:StyledSectionTitleType) => {
    return (
        <StyledSectionTitle align={props.align} marginBtm={props.marginBtm}>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h3<StyledSectionTitleType>`
    color: ${theme.colors.secondary};
    font-size: 40px;
    font-weight: bold;
    text-align: ${props => props.align || "center"};
    margin-bottom: ${props => props.marginBtm || "20px"};
`