import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

function NavBar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='home'>
                <Logo className='logo' text='{ ka }' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
                        : (<FaBars size={30} style={{ color: '#000000' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={600} onClick={closeMenu}>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-88} duration={600} onClick={closeMenu}>ACERCA DE MI</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={-90} duration={600} onClick={closeMenu}>HABILIDADES</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='portfolio' spy={true} smooth={true} offset={-90} duration={600} onClick={closeMenu}>PORTAFOLIO</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-90} duration={600} onClick={closeMenu}>CONTACTO</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar