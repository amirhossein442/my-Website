import './CSS/header.css'
import './CSS/home.css';
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Thems } from './Thems';
import {Home} from './Home'
import {Skills} from './Skills'
import { Service } from './Service';
import { Education } from './Education';
import { Exprience } from './Exprience';
import { Contact } from './Contact';
import {createContext, useState} from 'react'
import picChannel from './picture/anime-boy-black-pfp-18-300x300.jpg'


export const ContextMe= createContext()

function App() {
  const [name,setName]=useState("")
  const [thems, setThem]= useState(false)
  return (
    <div className="App">
      <ContextMe.Provider value={{name, setName, thems, setThem}}>
      <Router>
        <nav className="nav">
          <div className='headerLogo'>
            <img className='pic-chanel' src={picChannel}/>
            <p>Amirhossein Zare</p>
            
          </div>
          <div>
            <Thems/>
            <Link to="/">Home</Link>
            <Link to={"/skills"}>Skills</Link>
            <Link to={"/service"}>Service</Link>
            <Link to={"/education"}>Education</Link>
            <Link to={"/exprience"}>Exprience</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/exprience' element={<Exprience/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<h1>Not defined</h1>}></Route>
        </Routes>
      </Router>
      </ContextMe.Provider>
    </div>

);
  
}

export default App;
