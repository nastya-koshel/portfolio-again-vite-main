import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import Portfolio1 from "../../../assets/images/Portfolio-1.webp"
import Portfolio2 from "../../../assets/images/Portfolio-2.webp"
import Portfolio3 from "../../../assets/images/Portfolio-3.webp"
import Portfolio4 from "../../../assets/images/Portfolio-4.webp"
import {Button} from "../../../components/button/Button.tsx";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import {Container} from "../../../components/Container.tsx";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionSubtitle subtitle="Portfolio" align="start" />
                <SectionTitle title="My recent works" align="start"/>
                <StyledPortfolioMenu>
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
                </StyledPortfolioMenu>
                <Box>
                    <Image src={Portfolio1} alt="My first web-site"></Image>
                    <Image src={Portfolio2} alt="My second web-site"></Image>
                    <Image src={Portfolio3} alt="My third web-site"></Image>
                    <Image src={Portfolio4} alt="My fourst web-site"></Image>
                </Box>
                <FlexWrapper justifyContent="center">
                    <PortfolioBtn text="See More" fontColor="white"/>
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
    margin-bottom: 85px;
`

const StyledPortfolioMenu = styled.menu`
    display: flex;
    justify-content: center;
    gap: 40px;
    li {
        list-style: none;
    };
    
    margin-top: 75px;
    margin-bottom: 95px;
`

const Image = styled.img`
    width: calc(50% - 13px);
`

const Box = styled.div`
    display: flex;
    gap: 26px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 95px;
`

const PortfolioBtn = styled(Button)`
        width: 300px;
`