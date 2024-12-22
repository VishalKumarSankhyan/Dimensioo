import React from "react";
import Ribbon from "../Components/Ribbon";
import homeIllustration from "../Assets/homepageillustration.png";
import home_page_illustration_1 from "../Assets/Illustrations/home_page_illustration_1.png";
import home_page_illustration_2 from "../Assets/Illustrations/home_page_illustration_2.png";

import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section>

            <div className="container">
                <div className="subContainer">
                    <img src={home_page_illustration_1} alt="home illustration" />
                </div>
                <div className="subContainer">
                    <div className="contentBox">
                        <h1 className="contentHeading">Building Digital Dimensions for Your Success.</h1>
                        <p className="contentSubHeading">We design and develop custom web solutions that elevate your online presence.</p>
                        <a href="#" className="button">Schedule a Call</a>
                    </div>
                </div>
            </div>

            <Ribbon></Ribbon>

            <div className="container">
                <div className="subContainer">
                    <div className="contentBox">
                        <h2 className="contentHeading">Why Dimensio?</h2>
                        <p className="contentSubHeading">We build user-focused websites, craft bespoke digital products, and provide scalable services that adapt to your business needs.</p>
                        <Link to="/about" className="button">Learn More About Us</Link>
                    </div>
                </div>

                <div className="subContainer">
                    <img src={home_page_illustration_2} alt="home illustration" />
                </div>
            </div>

        </section>
    )
}