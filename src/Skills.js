import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextMe } from "./App";

export const Skills = () => {
    const { thems } = useContext(ContextMe);
    const navigate = useNavigate()
    return (
        <div className='contentSkills' style={{ background: thems.background, color: thems.color }}>
            <h1>My Skills</h1>
            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Web Design</li>
                <li>Artificial Intelligence Enthusiast</li>
            </ul>
            <button className="backHomeSk" onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};