import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
// import {Button} from "../../../components/button/Button.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {NewButton} from "../../../components/button/GetInTouchBtn.tsx";

export const GetInTouch = () => {
    return (
        <StyledGetInTouch>
            <Container>
                <Tablet>
                    <FlexWrapper direction="column">
                        <MainText>Have any project in mind?</MainText>
                        <SecondaryText>Let’s work together and I will help you by all my best.</SecondaryText>
                    </FlexWrapper>
                    <Triangle width="172" height="176" viewBox="0 0 172 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.05" d="M1.03782 22.6024C-2.94098 9.18534 10.09 -3.02371 23.2197 1.81961L160.697 52.5326C172.56 56.9086 175.664 72.2427 166.437 80.8878L70.6203 170.661C61.3932 179.306 46.2936 175.211 42.6987 163.088L1.03782 22.6024Z" fill="white" />
                    </Triangle>
                    <NewButton text="Let's talk"/>
                </Tablet>
            </Container>

        </StyledGetInTouch>
    )
}

const StyledGetInTouch = styled.section`
  
`
const Tablet = styled.div`
    background-color: #0FBF61;
    border: 1px solid #000;
    border-radius: 15px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 45px;


    min-height: 250px;
    width: 100%;

    margin: auto;
    position: relative;
    top: 50px
`

const MainText = styled.h3`
    font-weight: 500;
    font-size: 45px;
    color: ${theme.colors.fontWhite};
`

const SecondaryText = styled.p`

    font-size: 18px;
    line-height: 1.66667;
    color: ${theme.colors.fontWhite};
`

const Triangle = styled.svg`

`