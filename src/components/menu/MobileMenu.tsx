import {Button} from "../button/Button.tsx";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.tsx";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <MenuItem>
                        <a href="">Home</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="">About</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="">Service</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="">My work</a>
                    </MenuItem>
                    <MenuItem>
                        <a href=""><Button text="Resume"/></a>
                    </MenuItem>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background: rgba(231, 249, 239, 0.8); 
    display: none;
    

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(231, 249, 239, 0.8);
        
    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

        li {
            list-style: none;
        }
    ;

        a {
            color: ${theme.colors.fontBlack};
        }
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;  
    top: -100px;
    right: -100px;
    height: 200px;
    width: 200px;
    z-index: 999999;
    border: none;
    background: none;
    cursor: pointer;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondary};
        position: absolute;
        left: 32px;
        bottom: 50px;
        

        ${props => props.isOpen && css<{ isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0px);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 26px;
            height: 2px;
            background-color: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: rotate(45deg) translateY(0px);
        `}
        }
    }
`

const MenuItem = styled.li``