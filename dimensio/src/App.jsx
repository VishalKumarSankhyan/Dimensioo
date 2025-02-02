import AppContainer from "./Components/AppContainer";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import './style.css';
import { Outlet } from "react-router-dom";
import MobileMenu from "./Components/MobileMenu";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  // showMenu
  return (
    <>
      <AppContainer>
        <Navbar toggleMobileMenu={toggleMobileMenu} />
        <MobileMenu toggleMobileMenu={toggleMobileMenu} showMenu={showMenu} />
        <Outlet />
        <Footer />
      </AppContainer>
    </>
  )
}

export default App

// <p className="text"></p>
// #2aacac