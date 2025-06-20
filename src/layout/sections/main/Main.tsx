import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import image from "../../../assets/images/My-photo-main.webp";
import {Button} from "../../../components/button/Button.tsx";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems="center">
                <FlexWrapper direction="column" >
                    <p>Hello, I’m</p>
                    <h2>Fabio Scaletta</h2>
                    <p>I’m a UX/UI designer and Front End Developer based in Kuala Lumpur, Malaysia! 🇲🇾. I love designing, coding, creating and building stuff.</p>
                    <FlexWrapper>
                        <Button text="Send Email" />
                    </FlexWrapper>
                </FlexWrapper>
                <img src={image} alt={"My photo"}/>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: rgba(15, 191, 97, 0.1);
    `