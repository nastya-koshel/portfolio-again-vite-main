import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

type ServiceDescriptionPropsType = {
    title?: string;
    text?: string;
    img?: string;
}

export const ServiceDescription = (props:ServiceDescriptionPropsType) => {
    return (
        <StyledServiceDescription>
            <FlexWrapper alignItems="center">
                <FlexWrapper direction="column">
                    <h5>{props.title}</h5>
                    <h2>{props.title}</h2>
                    <button>Learn More →</button>
                </FlexWrapper>
                <FlexWrapper>
                    <img src={props.img}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledServiceDescription>
    )
}

const StyledServiceDescription = styled.div`
    border: 1px solid #C4C4C4;
    border-radius: 30px;
`
