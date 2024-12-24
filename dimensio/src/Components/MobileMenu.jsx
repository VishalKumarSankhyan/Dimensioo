import { NavLink } from "react-router-dom";
import logo from '../Assets/wordlogoWhite.png'
function MobileMenu({ toggleMobileMenu, showMenu }) {
    return (
        <section className={`MobileMenu ${ showMenu ? 'expend' : ''}`}>
            <div className="MobileMenuContainer">
                <div className="MobileMenuNavbar">
                    <div className="MobileMenuLeftNavbar">
                        <div className="MobileMenuNavbarLogo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="MobileMenuRightNavbar">
                        <div className="MobileMenuNavbarButton" onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </div>
                    </div>
                </div>

                <ul className="MobileMenuList">
                    <li className="MobileMenuListItem">
                        <NavLink to={'/'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>Home</NavLink>
                    </li>
                    <li className="MobileMenuListItem">
                        <NavLink to={'/products'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>Products</NavLink>
                    </li>
                    <li className="MobileMenuListItem">
                        <NavLink to={'/service'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>Service</NavLink>
                    </li>
                    <li className="MobileMenuListItem">
                        <NavLink to={'/careers'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>Careers</NavLink>
                    </li>
                    <li className="MobileMenuListItem">
                        <NavLink to={'/contact'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>Contact</NavLink>
                    </li>
                    <li className="MobileMenuListItem">
                        <NavLink to={'/about'} className='MobileMenuListItemLink' onClick={toggleMobileMenu}>About</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default MobileMenu;