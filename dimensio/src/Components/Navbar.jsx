import logo from '../Assets/wordlogo.png'
import mainlogo from '../Assets/icon.png'

import { Link, NavLink } from 'react-router-dom';
function Navbar({toggleMobileMenu}) {
    return (
        <nav className="Navbar">
            <div className='logoContainer'>

                <Link to="/" className='logoContainerLink'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='linkContainer'>
                <ul className='linkContainerList'>
                    <li className='linkContainerListItem'>
                        <NavLink to="/" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`} >Home</NavLink>
                    </li>
                    <li className='linkContainerListItem'>
                        <NavLink to="/products" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`}>Products</NavLink>
                    </li>
                    <li className='linkContainerListItem'>
                        <NavLink to="/service" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`}>Service</NavLink>
                    </li>
                    <li className='linkContainerListItem'>
                        <NavLink to="/careers" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`}>Careers</NavLink>
                    </li>
                    <li className='linkContainerListItem'>
                        <NavLink to="/contact" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`}>Contact</NavLink>
                    </li>
                    <li className='linkContainerListItem'>
                        <NavLink to="/about" className={({isActive})=> `linkContainerListItemLink ${isActive ? 'active' : ''}`}>About</NavLink>
                    </li>
                </ul>
            </div>

            <div className='HamburgerMenu' onClick={toggleMobileMenu}>
                <div className='Hamburger'>
                    <div className='HamburgerLine'></div>
                    <div className='HamburgerLine'></div>
                    <div className='HamburgerLine'></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


/*

       <div className='logoBox'>
                    <img src={mainlogo} alt="" />
                </div>

*/