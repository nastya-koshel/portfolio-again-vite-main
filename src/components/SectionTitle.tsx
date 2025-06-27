import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type StyledSectionTitleType = {
    title: string;
}

export const SectionTitle = (props:StyledSectionTitleType) => {
    return (
        <StyledSectionTitle>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h2`
    color: ${theme.colors.secondary};
    font-size: 40px;
    text-align: center;
`