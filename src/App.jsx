import {Header} from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import {Skill} from "./components/Skill.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
  return (
    <div>
        <Header />
        <Profile name="Ana" age={28} profession="Desarrolladora web"/>
        <Skill text="Javascript"/>
        <Skill text="Angular"/>
        <Footer />
    </div>
  )
}

export default App
