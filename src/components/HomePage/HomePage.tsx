import React from 'react'
import "./HomePage.scss"
//import Home from '../Home/Home'
//import Clients from '../Clients/Clients'
import NavBar from '../NavBar/NavBar'
import SectionLine from '../SectionLine/SectionLine'
import BrainInMotion from '../BrainInMotion/BrainInMotion'
import Contact from '../Contact/Contact'

export default function HomePage (){
    React.useEffect(() => {
        window.addEventListener("mousewheel", () => {
            console.log("ejecutando")
        })
    }, [])

    
    return(
        <div className="all-home-page-container">
            <NavBar/>
            <div className="section-home-container">
                <SectionLine/>
                <Contact/>
            </div>
        </div>
    )
}

