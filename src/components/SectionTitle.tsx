import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type StyledSectionTitleType = {
    title?: string;
    align?: string;
}

export const SectionTitle = (props:StyledSectionTitleType) => {
    return (
        <StyledSectionTitle align={props.align}>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h3<StyledSectionTitleType>`
    color: ${theme.colors.secondary};
    font-size: 40px;
    text-align: ${props => props.align || "center"};
`