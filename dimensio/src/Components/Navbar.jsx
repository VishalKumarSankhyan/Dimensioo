import logo from '../Assets/wordlogo.png'
import mainlogo from '../Assets/icon.png'
function Navbar() {
    return (
        <nav className="Navbar">
            <div className='logoContainer'>

                <a href="#" className='logoContainerLink'>
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className='linkContainer'>
                <ul className='linkContainerList'>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>Home</a>
                    </li>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>Products</a>
                    </li>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>Service</a>
                    </li>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>Careers</a>
                    </li>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>Contact</a>
                    </li>
                    <li className='linkContainerListItem'>
                        <a href="#" className='linkContainerListItemLink'>About</a>
                    </li>
                </ul>
            </div>

            <div className='HamburgerMenu'>
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