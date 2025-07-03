import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


type SectionSubtitlePropsType = {
    subtitle?: string,
    align?: string,
}

export const SectionSubtitle = (props:SectionSubtitlePropsType) => {
    return (
        <StyledSectionSubtitle align={props.align}>{props.subtitle}</StyledSectionSubtitle>
    )
}

const StyledSectionSubtitle = styled.p<SectionSubtitlePropsType>`
    color: ${theme.colors.fontMain};
    font-size: 18px;
    font-weight: 400;
    text-align: ${props => props.align || "center"};
`