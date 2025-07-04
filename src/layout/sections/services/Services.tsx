import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Service} from "../../../components/services-section/Service.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ServiceDescription} from "../../../components/services-section/ServiceDescription.tsx";
import Services1 from "../../../assets/images/Services-1.webp"
import Services2 from "../../../assets/images/Services-2.webp"
import Services3 from "../../../assets/images/Services-3.webp"
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import {Container} from "../../../components/Container.tsx";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionSubtitle subtitle="My service"/>
                <SectionTitle title="What I Do"/>
                <FlexWrapper justifyContent="space-between">
                    <Service img="#UI-UX-design" color="#0FBF6133" number="01" title="UX/UI Design"/>
                    <Service img="#front-end-development" color="#2D4CFF21" number="02" title="Front End Development"/>
                    <Service img="#responsive-design" color="#0FBF610D" number="03" title="Responsive Design"/>
                </FlexWrapper>
                <FlexWrapper direction="column" alignItems="center">
                    <ServiceDescription title="UX/UI Design" text="Research, Design, Prototype, and Animation" img={Services1}/>
                    <ServiceDescription title="Front End Development" text="Implement UX design into live and user friendly " img={Services2}/>
                    <ServiceDescription title="Responsive Design" text="I build landing pages and responsive websites and web App" img={Services3}/>
                </FlexWrapper>
            </Container>
        </StyledServices>
    )
}

const StyledServices = styled.section`

`
