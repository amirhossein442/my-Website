import { useContext, useEffect } from "react";
import { ContextMe } from "./App";

export const Thems = () => {
    const { thems, setThem } = useContext(ContextMe);

    useEffect(() => {
        document.body.style.backgroundColor = thems.background;

        document.querySelectorAll('p ,h1 ,h2 ,h3 ,li').forEach(p => p.style.color = thems.color);
        
    }, [thems]); 

    return (
        <div>
            <button className="thems" onClick={() => setThem(prev => ({
                    background: prev.background === "white" ? "black" : "white",
                    color: prev.color === "black" ? "white" : "black"
                }))}> Thems </button>
        </div>
    );
};