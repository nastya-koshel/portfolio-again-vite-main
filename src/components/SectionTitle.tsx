import styled from "styled-components";

type StyledSectionTitleType = {
    title: string;
}

export const SectionTitle = (props:StyledSectionTitleType) => {
    return (
        <StyledSectionTitle>{props.title}</StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h2`
    color: #0FBF61;
    font-size: 40px;
    text-align: center;
`