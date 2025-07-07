import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/about-me/AboutMe.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {GetInTouch} from "./layout/sections/get-in-touch/GetInTouch.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

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
        </div>
    )
}

export default App
