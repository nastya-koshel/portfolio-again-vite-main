import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Services} from "./layout/sections/services/Services.tsx";

function App() {
  return (
      <div className="App">
        <Header />
        <Main />
        <Services />
      </div>
  )
}

export default App
