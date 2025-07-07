import styled from "styled-components";
import {HeaderMenu} from "../../components/menu/HeaderMenu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";

export const Header = () => {
  return (
      <StyledHeader>
          <Container>
              <FlexWrapper justifyContent="space-between" alignItems="center">
                  <Logo/>
                  <HeaderMenu />
                  <MobileMenu />
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
    //z-index: 999;
`
