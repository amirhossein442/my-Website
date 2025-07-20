import { useState, useEffect } from 'react';
export const Txt= ()=>{
  const [text, setText]= useState("")
    useEffect(()=>{
        console.log('component is mounting')
        return()=>{
            console.log('component is unmounting')
      }
    },[])

    useEffect(()=>{
        console.log('component is updating')
    },[text])

    return (
        <div className="App">
            <input onChange={(e)=>setText(e.target.value)}></input>
            <h1>{text}</h1>
        </div>
    );
  }
