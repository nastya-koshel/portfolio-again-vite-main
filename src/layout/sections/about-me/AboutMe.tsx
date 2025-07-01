import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import image from '../../../assets/images/My-photo-about-me.webp'
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center">
                    <Frame>
                        <AdditionalImg src={image} alt="My photo"/>
                    </Frame>
                    <Box>
                        <SectionTitle title="About Me" align="start"/>
                        <Text>Hello! My name is Rostam Sadiqi and I am a <Highlighting>UX/UI
                            designer</Highlighting> and <Highlighting>Front End
                            Developer</Highlighting>.
                            I enjoy creating things that live on the internet. An experienced Software Engineer with a
                            demonstrated history of working in the Computer Software industry. Skilled in Web Design,
                            UX/UI
                            design, and Front-end Development. Specialize in Information Security and software
                            engineering,
                            creating dynamic and beautiful web pages. I have been in the field for nearly 5 years, and
                            have
                            been loving every minute of it.</Text>
                        <Text>Here are a few technologies I’ve been working with recently:</Text>
                        <TechList>
                            <TechItem>Angular</TechItem>
                            <TechItem>HTML</TechItem>
                            <TechItem>Figma</TechItem>
                            <TechItem>Bootstrap 4,5</TechItem>
                            <TechItem>CSS,SASS</TechItem>
                            <TechItem>Adobe XD</TechItem>
                        </TechList>
                    </Box>
                </FlexWrapper>
            </Container>

        </StyledAboutMe>
    )
}

const StyledAboutMe = styled.section`
    //max-height: 570px;
    margin-bottom: 140px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 570px;
    border: 1px solid indianred;
`

const Frame = styled.div`
    border: 3px solid ${theme.colors.secondary};
    border-radius: 20px;
    max-height: 420px;
 
`

const AdditionalImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    transform: translate(49px, -38px);
`

const Text = styled.p`
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
`

const Highlighting = styled.span`
    color: ${theme.colors.secondary};
`

const TechList = styled.ul`
    column-count: 2;
    column-gap: 150px;
`

const TechItem = styled.li`
    margin-bottom: 22px;
    
`