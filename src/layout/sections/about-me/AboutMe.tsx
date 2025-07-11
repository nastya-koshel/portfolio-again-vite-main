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
                    <PhotoWrapper>
                        <Photo src={image} alt="My photo"/>
                    </PhotoWrapper>
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
    margin: 140px 0;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 570px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    
    &::before {
        content: '';
        border: 3px solid ${theme.colors.secondary};
        border-radius: 20px;
        width: 280px;
        height: 420px;
        
        position: absolute;
        left: -50px;
        bottom: -40px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 280px;
    height: 420px;
    object-fit: cover;
`

const Text = styled.p`
    font-weight: 400;
    color: ${theme.colors.fontMain};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    color: ${theme.colors.fontMain};
`

const Highlighting = styled.span`
    color: ${theme.colors.secondary};
`

const TechList = styled.ul`
    column-count: 2;
    list-style-image: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.00878 7.00875L2.23206 11.6823C1.90191 12.0053 1.36804 12.0053 1.04139 11.6823L0.247617 10.9057C-0.0825389 10.5826 -0.0825389 10.0603 0.247617 9.74071L3.63347 6.428L0.247617 3.11528C-0.0825389 2.79226 -0.0825389 2.26992 0.247617 1.95033L1.03788 1.16683C1.36804 0.843805 1.90191 0.843805 2.22855 1.16683L7.00527 5.84037C7.33894 6.16339 7.33894 6.68573 7.00878 7.00875ZM13.7524 5.84037L8.97566 1.16683C8.64551 0.843805 8.11164 0.843805 7.785 1.16683L6.99122 1.94346C6.66106 2.26648 6.66106 2.78882 6.99122 3.10841L10.3771 6.42112L6.99122 9.73384C6.66106 10.0569 6.66106 10.5792 6.99122 10.8988L7.785 11.6754C8.11515 11.9984 8.64902 11.9984 8.97566 11.6754L13.7524 7.00188C14.0825 6.68573 14.0825 6.16339 13.7524 5.84037Z' fill='%230FBF61' /%3E%3C/svg%3E");
    padding-left: 20px;
`

const TechItem = styled.li`
    margin-bottom: 22px;
    
    font-weight: 400;
    color: ${theme.colors.fontMain};
`
