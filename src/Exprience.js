import { useContext } from "react";
import { ContextMe } from "./App";
import { useNavigate } from "react-router-dom";

export const Exprience = () => {
    const { thems } = useContext(ContextMe);
    const navigate = useNavigate()

    return (
        <div class="contentExprience" style={{ background: thems.background, color: thems.color }}>
            <ul>
                <h2>Exprience</h2>
                <li>HTML & CSS for Web interface Development</li>
                <li>Developing interactive Web Features With JavaScript</li>
                <li>Currently learning React for Frontend Development</li>
                <li>Introductory Experience in Python Programming</li>
            </ul>
          <button className="backHomeE" onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};