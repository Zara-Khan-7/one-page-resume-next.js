import Link from "next/link";
import React from "react";
export default function Portfolio(){
    return(
        <div>
                <title>Portfolio</title>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            

            <body>
                <header className="header">
                        <Link href="/" className="logo">Zara Yousuf</Link>
                    <nav className="navbar">
                        <Link href="/" className="active">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/skills">Skills</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </header>
                

                <section className="home">
                    <div className="home-image">
                        <img src="/img1.png" alt="Profile Picture"></img>
                    </div>

                    <div className="home-content">
                        <h1>Hi, I'm Zara Yousuf</h1>
                        <h3>Pharmacist & Frontend Developer</h3>
                        <p>From filling prescriptions to coding websites, my journey from pharmacist to front-end developer has been nothing short of exciting. Can't wait to see where this dual expertise takes me next!</p>

                    <div className="home-sci">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-gmail'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>

                         <a href="#" className="btn">Download CV</a>
                    </div>
                </section>
    
            </body>

        </div>
    )
}