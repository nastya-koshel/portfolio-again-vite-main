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
    color: rgba(15, 191, 97, 1);
    font-size: 40px;
    text-align: center;
`