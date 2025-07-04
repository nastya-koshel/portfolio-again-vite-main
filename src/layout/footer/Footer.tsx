import styled from "styled-components";
import signs from "../../assets/images/icons-sprite.svg"
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justifyContent="space-between">
                    <Text>Designed and developed by Rostam Sadiqi 2021</Text>
                    <Box>
                        <SocialMedia sign="social-media-1" link="#"/>
                        <SocialMedia sign="social-media-2" link="#"/>
                        <SocialMedia sign="social-media-3" link="#"/>
                        <SocialMedia sign="social-media-4" link="#"/>
                    </Box>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primary};
    min-height: 300px;
    padding-bottom: 60px;
    display: flex;
    align-items: end;
`

type SocialMediaPropsType = {
    sign?: string;
    link?: string;
}

const SocialMedia = (props: SocialMediaPropsType) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${signs}#${props.sign}`}><a href={`${props.link}`}></a></use>
        </svg>
    )
}

const Text = styled.p`
    color: ${theme.colors.fontBlack};
    padding: 10px;
`
const Box = styled.div`
    display: flex;
    gap: 20px;

    padding: 10px;
    width: 169px;
    height: 44px;
`