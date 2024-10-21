import React from "react"
import Navbar from "../../../Component/navbar"
export default function Contact(){
    return(
        <div>
        <Navbar/>
        <div className="card">
             <h1>Contact Me</h1><br></br>
             <ul>
                <li> Gmail: </li>
                <p><a href="mailto:zaara.khan1795.zy@gmail.com">Send me an email 📧</a></p><br></br>
                <li> LinkedIn:</li>
                <p><a href="https://www.linkedin.com/in/zara-yousuf-7081751b6/"target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></p><br></br>
             </ul>
        </div>
        </div>
    )
}