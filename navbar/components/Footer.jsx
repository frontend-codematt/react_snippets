import Link from 'next/link'

const Footer = () => {
    
    let footerLinks = [
        { name: "Privacy Policy", path: "/" },
        { name: "Cookie Policy", path: "/" },
        { name: "Pref. Cookie", path: "/" },
    ];

    return (
        <footer>
            <p className='flex justify-center text-sm'>Copyright © 2022 – All rights reserved – P.IVA 00000000000</p>
            <ul className='flex justify-center'>
            {
                 footerLinks.map((link) => (
                     <li className='px-3' key={link.name} >
                         <Link href={link.path}>
                             <a className="text-sm" onClick={() => setMenuOpen(!menuOpen)}> 
                                 {link.name}
                             </a>
                         </Link>
                     </li>
                 ))
            }
            </ul>

        </footer>
    )
}

export default Footer
