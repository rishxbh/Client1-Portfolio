import { useState } from 'react'
import './navbar.css'
// import R from '../../assets/RLogo.png'
import {Link} from 'react-scroll'
// import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
        <nav className='navbar'>
            {/* <img src={R} alt='logo' className='logo'/> */}
            <h1 className='R'>RITIKA CHAUHAN MARKETING</h1>
            <div className='menu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-70} duration={500} className='menuListItem'>Home</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Service</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Experience</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Contact Me</Link>
            </div>
            <img src={menu} alt="burger menu" className="menuBar" onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-45} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Service</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-45} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Experience</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-45} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Contact</Link>
            </div>

        </nav>
  )
}

export default Navbar