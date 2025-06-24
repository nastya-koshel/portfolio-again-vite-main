import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import Portfolio1 from "../../../assets/images/Portfolio-1.webp"
import Portfolio2 from "../../../assets/images/Portfolio-2.webp"
import Portfolio3 from "../../../assets/images/Portfolio-3.webp"
import Portfolio4 from "../../../assets/images/Portfolio-4.webp"
import {Button} from "../../../components/button/Button.tsx";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <p>Portfolio</p>
            <SectionTitle title="My recent works"/>
            <StyledMenu>
                <FlexWrapper justifyContent="center" >
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">UX/UI Design</a>
                    </li>
                    <li>
                        <a href="">Web Design</a>
                    </li>
                    <li>
                        <a href="">Front End Development</a>
                    </li>
                </FlexWrapper>
            </StyledMenu>
            <FlexWrapper justifyContent="center" wrap="wrap">
                <img src={Portfolio1}></img>
                <img src={Portfolio2}></img>
                <img src={Portfolio3}></img>
                <img src={Portfolio4}></img>
            </FlexWrapper>
            <Button text="See More" />
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.div`
    background-color: #c4e0ea;
`

const StyledMenu = styled.ul`
    li {
        list-style: none;
    };
`