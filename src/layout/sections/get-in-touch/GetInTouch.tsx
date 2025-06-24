import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const GetInTouch = () => {
    return (
        <StyledGetInTouch>
            <FlexWrapper direction="column">
                <h2>Have any project in mind?</h2>
                <p>Let’s work together and I will help you by all my best.</p>
            </FlexWrapper>
            <button>Let's talk</button>
        </StyledGetInTouch>
    )
}

const StyledGetInTouch = styled.div`
    background-color: #0FBF61;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    //хардкод
    height: 250px;
    width: 1116px;


`
