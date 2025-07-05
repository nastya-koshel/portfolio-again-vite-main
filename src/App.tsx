import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/about-me/AboutMe.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {GetInTouch} from "./layout/sections/get-in-touch/GetInTouch.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import styled from "styled-components";
import {theme} from "./styles/Theme.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Services />
            <Portfolio />
            <GetInTouch />
            <Footer />

            <Circle right="-80px" top="-20px" />
            <Circle top="142px" left="-96px" />
        </div>
    )
}

export default App

type CirclePropsType = {
    right?: string,
    left?: string,
    top?: string,
}

const Circle = styled.div<CirclePropsType>`
    border-radius: 50%;
    border: 20px solid ${theme.colors.secondary};
    width: 200px;
    height: 200px;
    
    position: absolute;
    right: ${(props) => props.right};
    left: ${(props) => props.left};
    top: ${(props) => props.top};
    z-index: 999;
`