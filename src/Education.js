import { useContext } from "react";
import { ContextMe } from "./App";
import { useNavigate } from "react-router-dom";
export const Education= ()=> {
        const { thems } = useContext(ContextMe);
        const navigate = useNavigate()

    return(
        <div class="contentEducation" style={{ background: thems.background, color: thems.color }}>
            <ul>
                <h2>Education</h2>
                <li>currently Student Computer Science at imam Javad Univercity</li>
            </ul>
          <button className="backHomeEd" onClick={()=>navigate('/')}>Back to home</button>
        </div>
    )
}