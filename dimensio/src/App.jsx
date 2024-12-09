import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Ribbon from "./Components/Ribbon";

import HeroSection from "./Components/HeroSection";
import ContactPage from "./Components/ContactPage";

import AboutPage from "./Components/AboutPage";
import CareersPage from "./Components/CareersPage";
import ServicePage from "./Components/ServicePage";
import ProductsPage from "./Components/ProductsPage";

import './style.css';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Ribbon></Ribbon>

      <AboutPage/>
      <ContactPage/>

      <CareersPage/>
      <ServicePage/>
      <ProductsPage/>

      <br />

      <Footer></Footer>
    </>
  )
}

export default App

// <p className="text"></p>