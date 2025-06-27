import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import image from "../../../assets/images/My-photo-main.webp";
import {Button} from "../../../components/button/Button.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems="center">
                    <FlexWrapper direction="column">
                        <p>Hello, I’m</p>
                        <h1>Fabio Scaletta</h1>
                        <p>I’m a UX/UI designer and Front End Developer based in Kuala Lumpur, Malaysia! 🇲🇾. I love
                            designing, coding, creating and building stuff.</p>
                        <FlexWrapper>
                            <Button text="Send Email"/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <img src={image} alt={"My photo"}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    //background-color: #0FBF611A;
    background-color: rgba(211, 169, 169, 0.53);
`