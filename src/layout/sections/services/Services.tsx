import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Service} from "../../../components/Service.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Services = () => {
    return (
        <StyledServices>
            <p>My service</p>
            <SectionTitle title="What I Do" />
            <FlexWrapper justifyContent="space-between">
                <Service img="#UI-UX-design" color="#0FBF6133" number="01" text="UX/UI Design "/>
                <Service img="#front-end-development" color="#2D4CFF21" number="02" text="Front End Development"/>
                <Service img="#responsive-design" color="#0FBF610D" number="03" text="Responsive Design"/>
            </FlexWrapper>

        </StyledServices>
    )
}

const StyledServices = styled.div`
    background-color: #f6d6fd;
`
