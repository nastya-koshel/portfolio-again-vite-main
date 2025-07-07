import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

export const Header = () => {
  return (
      <StyledHeader>
          <Container>
              <FlexWrapper justifyContent="space-between" alignItems="center">
                  <Logo/>
                  <Menu />
              </FlexWrapper>
          </Container>
      </StyledHeader>
  )
}

export const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryWithoutTransparency};
    min-height: 100px;
    display: flex;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 99;
    
    &::before {
        content: "";
        border-radius: 50%;
        border: 20px solid ${theme.colors.secondary};
        width: 200px;
        height: 200px;
        position: absolute;
        left: -96px;
        top: 142px;
        z-index: -1;
    }
    
    &:after {
        content: "";
        border-radius: 50%;
        border: 20px solid ${theme.colors.secondary};
        width: 200px;
        height: 200px;
        position: absolute;
        right: -80px;
        top: -20px;
        z-index: -10;
    }
    
`
