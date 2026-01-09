import {Header} from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import {Skill} from "./components/Skill.jsx";
import {Footer} from "./components/Footer.jsx";
import {useState} from "react";

function App() {

    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]
    const [showSkills, setShowSkills] = useState(false);

  return (
    <div>
        <Header />
        <Profile name="Ana" age={28} profession="Desarrolladora web"/>
        <h2>Skills</h2>
        <button onClick={() => setShowSkills(!showSkills)}>
            {showSkills ? "Ocultar skills" : "Mostrar skills"}
        </button>
        <Skill array={skills} show={showSkills} />
        <Footer />
    </div>
  )
}

export default App
