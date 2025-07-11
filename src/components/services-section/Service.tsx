import styled from "styled-components";
import sprite from "../../assets/images/icons-sprite.svg"
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";

export type ServicePropsType = {
    title?: string;
    number?: string;
    color?: string;
    img?: string;
    href?: string;
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <StyledPin color={props.color} img={props.img} href={props.href}>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}${props.img}`}></use>
                </svg>
            </StyledPin>
            <FlexWrapper direction="column" justifyContent="center">
                <Number>{props.number}</Number>
                <Title>{props.title}</Title>
            </FlexWrapper>
        </StyledService>
    )
}

const StyledService = styled.li`
    list-style: none;

    display: flex;
    gap: 30px;
    margin-bottom: 150px;
`

const StyledPin = styled.a<ServicePropsType>`
    height: 120px;
    width: 120px;
    border-radius: 20px;
    background-color: ${props => props.color || "pink"};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`
const Number = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: ${theme.colors.fontMain};
`
const Title = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: ${theme.colors.fontBlack};
`