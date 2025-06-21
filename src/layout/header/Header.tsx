import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
  return (
      <StyledHeader>
          <FlexWrapper justifyContent="space-between" alignItems="center" >
              <Logo/>
              <Menu />
          </FlexWrapper>
      </StyledHeader>
  )
}

export const StyledHeader = styled.header`
    background-color: #0FBF611A;
`