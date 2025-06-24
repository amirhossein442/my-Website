import { useContext } from "react";
import { ContextMe } from "./App";
import { useNavigate } from "react-router-dom";

export const Service = ()=> {
    const { thems } = useContext(ContextMe);
    const navigate = useNavigate()

    return(
        <div class="contentService" style={{ background: thems.background, color: thems.color }}>
            <ul>
                <h2>service</h2>
                <li>Web Design & development</li>
                <li>React Frontend Development</li>
                <li>Expanding Python Backend Skills</li>
            </ul>
          <button className="backHomeS" onClick={()=>navigate('/')}>Back to home</button>

        </div>

    )
}