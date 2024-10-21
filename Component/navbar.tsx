import Link from "next/link";
export default function Navbar(){
    return(
        <div>
                <header className="header">
                        <Link href="/" className="logo">Zara Yousuf</Link>
                    <nav className="navbar">
                        <Link href="/" className="active">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/skills">Skills</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </header>

                </div>
                

    )
}