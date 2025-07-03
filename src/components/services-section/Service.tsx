import styled from "styled-components";
import sprite from "../../assets/images/icons-sprite.svg"
import {FlexWrapper} from "../FlexWrapper.tsx";

export type ServicePropsType = {
    title?: string;
    number?: string;
    color?: string;
    img?: string;
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Box>
                <FlexWrapper>
                    <StyledPin color={props.color} img={props.img}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${sprite}${props.img}`}></use>
                        </svg>
                    </StyledPin>
                </FlexWrapper>
                <FlexWrapper direction="column" justifyContent="center" >
                    <p>{props.number}</p>
                    <p>{props.title}</p>
                </FlexWrapper>
            </Box>
        </StyledService>
    )
}

const StyledService = styled.div`

`

const StyledPin = styled.a<ServicePropsType>`
    height: 120px;
    width: 120px;
    border-radius: 20px;
    background-color: ${props => props.color || "pink"};
    display: flex;
    align-items: center;
    justify-content: center;
`
const Box = styled.div`
    display: flex;
    gap: 30px;
    border: 1px solid red;
    margin-bottom: 150px;
`
