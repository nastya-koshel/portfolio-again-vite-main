import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import image from '../../../assets/images/My-photo-about-me.webp'

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle title="About Me"/>
            <FlexWrapper >
                <img src={image} alt="My photo"/>
                <FlexWrapper direction="column">
                    <p>Hello! My name is Rostam Sadiqi and I am a <StyledHighlighting>UX/UI
                        designer</StyledHighlighting> and <StyledHighlighting>Front End Developer</StyledHighlighting>.
                        I enjoy creating things that live on the internet. An experienced Software Engineer with a
                        demonstrated history of working in the Computer Software industry. Skilled in Web Design, UX/UI
                        design, and Front-end Development. Specialize in Information Security and software engineering,
                        creating dynamic and beautiful web pages. I have been in the field for nearly 5 years, and have
                        been loving every minute of it.</p>

                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <StyledList>
                        <li>Angular</li>
                        <li>HTML</li>
                        <li>Figma</li>
                        <li>Bootstrap 4,5</li>
                        <li>CSS,SASS</li>
                        <li>Adobe XD</li>
                    </StyledList>
                </FlexWrapper>
            </FlexWrapper>
        </StyledAboutMe>
    )
}

const StyledAboutMe = styled.section`
    background-color: antiquewhite;
`

const StyledHighlighting = styled.span`
    color: #0FBF61FF;
`
const StyledList = styled.ul`
`