import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import sprite from "../../assets/images/icons-sprite.svg";

type ServiceDescriptionPropsType = {
    title?: string;
    text?: string;
    img?: string;
}

export const ServiceDescription = (props: ServiceDescriptionPropsType) => {
    return (
        <StyledServiceDescription>
            <Box>
                <Title>{props.title}</Title>
                <Description>{props.text}</Description>
                <ButtonLearnMore href="#">
                    <span>Learn More</span>
                    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`${sprite}#arrow`}></use>
                    </svg>
                </ButtonLearnMore>
            </Box>
            <Image src={props.img}/>
        </StyledServiceDescription>
    )
}

const StyledServiceDescription = styled.div`
    border: 1px solid #C4C4C4;
    border-radius: 30px;
    min-width: 100%;
    margin-bottom: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const Title = styled.h5`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.875;
    text-transform: uppercase;
    color: ${theme.colors.fontMain};
    margin-bottom: 30px;
`

const Description = styled.h2`
    font-weight: 700;
    font-size: 35px;
    line-height: 1.28571;
    margin-bottom: 70px;
`

const ButtonLearnMore = styled.a`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    margin-right: 25px;
    display: flex;
    align-items: center;
    
    span {
        margin-right: 25px;
    }
`


const Image = styled.img`
    border-radius: 20px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
    height: 100%;
    position: relative;
    top: -50px;
    right: 50px;
`