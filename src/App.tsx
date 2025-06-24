import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/about-me/AboutMe.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Services />
            <Portfolio />
        </div>
    )
}

export default App
