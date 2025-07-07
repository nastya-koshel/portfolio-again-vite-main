import {Button} from "../button/Button.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper alignItems="center" justifyContent="space-between">
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
            </FlexWrapper>
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    li {
        list-style: none;
    };

    a:link, a:visited {
        color: ${theme.colors.fontBlack};
    }
    
    a:hover {
        color: ${theme.colors.secondary};
        cursor: pointer;
    }
    
    min-width: 500px;
    font-weight: 500;
    z-index: 999999;
`

const MenuItem = styled.li`
`