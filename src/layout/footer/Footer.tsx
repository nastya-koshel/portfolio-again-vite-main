import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import signs from "../../assets/images/icons-sprite.svg"

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Designed and developed by Rostam Sadiqi 2021</p>
            <FlexWrapper>
                <SocialMedia sign="social-media-1" link="#"/>
                <SocialMedia sign="social-media-2" link="#"/>
                <SocialMedia sign="social-media-3" link="#"/>
                <SocialMedia sign="social-media-4" link="#"/>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: darkgray;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

type SocialMediaPropsType = {
    sign?: string;
    link?: string;
}

const SocialMedia = (props:SocialMediaPropsType) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${signs}#${props.sign}`}><a href={`${props.link}`}></a></use>
        </svg>
    )
}