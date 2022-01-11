import SkillBar from "react-skillbars"
import './skillbars.css'
const skills = [
    {
        type: "C++",
        level: 85
    },
    {
        type: "C",
        level: 60
    },
    {
        type: "C#",
        level: 60
    },
    {
        type: "JavaScript",
        level: 70
    },
    {
        type: "Game Dev",
        level: 65
    },
    {
        type: "ReactJS",
        level: 50
    },
    {
        type: "NodeJS",
        level: 50
    },
    {
        type: "Databases",
        level: 90
    },
    {
        type: "html",
        level: 95
    },
    {
        type: "Css",
        level: 75
    },
    {
        type: "ThreeJS",
        level: 20
    },
];

const colors = {
    "bar": "#59b256",
    "title": {
      "text": "#fff",
      "background": "#59b27f"
    }
  }

function Skillbars() {
    return (
        <div className="skills" id="skills">
            <h1 className="skills-title">Skills</h1>
            <div className="skillbar">
                <SkillBar skills={skills} colors={colors}  />
                

            </div>
        </div>
    )
}

export default Skillbars
