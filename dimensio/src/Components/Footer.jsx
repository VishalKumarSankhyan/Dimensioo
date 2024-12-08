function Footer() {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerSubContainer">

                    <nav className="footerNavigationBar">
                        <h3>Navigation</h3>
                        <ul className="footerNavigationBarList">
                            <li className="footerNavigationBarListItem">
                                <a href="#">Home</a>
                            </li>
                            <li className="footerNavigationBarListItem">
                                <a href="#">Service</a>
                            </li>
                            <li className="footerNavigationBarListItem">
                                <a href="#">Products</a>
                            </li>
                            <li className="footerNavigationBarListItem">
                                <a href="#">Careers</a>
                            </li>
                            <li className="footerNavigationBarListItem">
                                <a href="#">Contact</a>
                            </li>
                            <li className="footerNavigationBarListItem">
                                <a href="#">About</a>
                            </li>


                        </ul>
                    </nav>
                </div>

                <div className="line">

                </div>

                <div className="footerSubContainer"></div>
            </div>

            <div className="bottomFooter">
                <p>&copy; 2024-2025 Dimensio. All rights reserved.</p>
            </div>
        </footer>
    )
}
//  <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>

export default Footer;