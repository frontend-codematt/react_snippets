import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    let links = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];

    return (
        
        <>
            <div className="navbar">
                <div className="flex justify-center">
                    logo
                </div>
                {menuOpen ? (
                    <span className="hidden" onClick={() => setMenuOpen(!menuOpen)}>close</span>
                    ) : (
                    <button className="absolute top-0 left-0 z-30" onClick={() => setMenuOpen(!menuOpen)}>menu</button>
                    )
                }
                <div className={`top-0 left-0 absolute bg-green-500 w-[35vw] h-full p-10 z-40 ease-in-out duration-300 ${menuOpen ? "translate-x-0 " : "-translate-x-full"}`}>
                    <button className="absolute top-5 right-10 z-50" onClick={() => setMenuOpen(!menuOpen)}>close</button>
                    <nav>
                        <ul>
                            {
                                links.map((link) => (
                                    <li key={link.name} >
                                        <Link href={link.path}>
                                            <a onClick={() => setMenuOpen(!menuOpen)}> 
                                                {link.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>

    )
}

export default Navbar
