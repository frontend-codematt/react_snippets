import Link from 'next/link'

const Nav = (props) => {

    let links = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <nav className={props.cname}>
            <ul>
                {
                    links.map((link)=>(
                        <li>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav

