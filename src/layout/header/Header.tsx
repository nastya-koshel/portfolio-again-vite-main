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

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
`
