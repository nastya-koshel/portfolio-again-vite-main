import {Button} from "../button/Button.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper justifyContent="space-between">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Service</a>
                </li>
                <li>
                    <a href="">My work</a>
                </li>
                <li>
                    <a href=""><Button text="Resume"/></a>
                </li>
            </FlexWrapper>
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    li {
        list-style: none;
    };
    min-width: 500px;
`