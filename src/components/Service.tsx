import styled from "styled-components";
import image from "../assets/images/icons-sprite.svg"
import {FlexWrapper} from "./FlexWrapper.tsx";

type ServicePropsType = {
    text?: string;
    number?: string;
    color?: string;
    img?: string;
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper >
                <FlexWrapper>
                    <StyledRin color={props.color} img={props.img}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${image}${props.img}`}></use>
                        </svg>
                    </StyledRin>
                </FlexWrapper>
                <FlexWrapper direction="column" justifyContent="center" >
                    <p>{props.number}</p>
                    <p>{props.text}</p>
                </FlexWrapper>
            </FlexWrapper>
        </StyledService>
    )
}

const StyledService = styled.div`
    background-color: #eddbdb;
`

const StyledRin = styled.a<ServicePropsType>`
    height: 120px;
    width: 120px;
    border-radius: 20px;
    background-color: ${props => props.color || "pink"};
    display: flex;
    align-items: center;
    justify-content: center;
`
