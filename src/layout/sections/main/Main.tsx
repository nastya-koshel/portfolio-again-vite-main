import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import image from "../../../assets/images/My-photo-main.webp";
import {Button} from "../../../components/button/Button.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center">
                    <Box>
                        <Greeting>Hello, I’m</Greeting>
                        <Name>Fabio Scaletta</Name>
                        <Text>I’m a UX/UI designer and Front End Developer based in Kuala Lumpur, Malaysia! 🇲🇾. I love
                            designing, coding, creating and building stuff.</Text>
                        <FlexWrapper>
                            <Button text="Send Email"/>
                        </FlexWrapper>
                    </Box>
                    <MainImg src={image} alt={"My photo"}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: ${theme.colors.primary};
    padding-top: 50px;
    padding-bottom: 90px;
    display: flex;
    align-items: center;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 475px;
    z-index: 999;
`

const Greeting = styled.p`
    color: ${theme.colors.secondary};
    font-size: 30px;
`
const Name = styled.h1`
    font-family: Poppins, sans-serif;
    font-size: 60px;
    font-weight: bold;
`

const Text = styled.p`
    margin-bottom: 30px;
    color: ${theme.colors.fontMain};
`

const MainImg = styled.img`
    max-height: 390px;
    z-index: 999;
`

