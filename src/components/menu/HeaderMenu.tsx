import {Button} from "../button/Button.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
    
    li {
        list-style: none;
    };

    a {
        color: ${theme.colors.fontBlack};
    }
    
    min-width: 500px;
    z-index: 999999;
`

const MenuItem = styled.li`
    
`