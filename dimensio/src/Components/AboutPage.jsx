import teamLogo from "../Assets/team.png";
import about_page_illustration_1 from "../Assets/Illustrations/about_page_illustration_1.png";
import about_page_illustration_2 from "../Assets/Illustrations/about_page_illustration_2.png";
import about_page_illustration_3 from "../Assets/Illustrations/about_page_illustration_3.png";
import about_page_illustration_4 from "../Assets/Illustrations/about_page_illustration_4.png";
import about_page_illustration_5 from "../Assets/Illustrations/about_page_illustration_5.png";
import about_page_illustration_6 from "../Assets/Illustrations/about_page_illustration_6.png";

export default function AboutPage() {
    return (
        <section className="pageContainer">

            <div className="container">
                <div className="subContainer">
                    <img src={about_page_illustration_1} alt="about page illustration" />
                </div>
                <div className="subContainer">
                    <div className="contentBox">
                        <h1 className="contentHeading">Empowering Digital Dimensions.</h1>
                        <p className="contentSubHeading">At Dimensio, we transform ideas into impactful digital solutions that drive growth and innovation.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="subContainer">
                    <div className="bulletPointBox">
                        <h2 className="bulletPointBoxHeading">Who We Are</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">At Dimensio, we’re redefining the digital landscape with cutting-edge web development and design solutions. Our mission is to empower businesses by delivering custom-tailored websites and applications that elevate brands and drive success.</li>
                            <li className="bulletPointBoxListItem">Dimensio began as a bold idea in a small workspace, driven by a shared vision: to create impactful digital solutions that empower businesses. As a startup, we’ve faced challenges, embraced change, and grown through innovation and collaboration.</li>
                            <li className="bulletPointBoxListItem">Our journey has been fueled by a relentless passion for problem-solving, creativity, and the desire to leave a mark in the digital world. This startup spirit continues to define who we are today—agile, forward-thinking, and always ready to innovate.</li>
                        </ol>
                    </div>
                </div>

                <div className="subContainer">
                    <img src={about_page_illustration_2} alt="home illustration" />
                </div>
            </div>


            <div className="container">
                <div className="subContainer">
                    <img src={about_page_illustration_3} alt="home illustration" />
                </div>

                <div className="subContainer">
                    <div className="bulletPointBox">
                        <h2 className="bulletPointBoxHeading">Our Mission</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">To craft digital experiences that empower businesses and individuals to achieve their goals in a connected world</li>
                        </ol>
                        <br />
                        <h2 className="bulletPointBoxHeading">Our Vision</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">To be a global leader in web development and digital innovation, helping businesses unlock their true potential.</li>
                        </ol>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="subContainer">
                    <div className="bulletPointBox">
                        <h2 className="bulletPointBoxHeading">Our Values</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">Innovation: Constantly pushing boundaries to deliver cutting-edge solutions</li>
                            <li className="bulletPointBoxListItem">Collaboration: Building strong partnerships with our clients and team.</li>
                            <li className="bulletPointBoxListItem">Integrity: Upholding transparency and trust in everything we do.</li>
                            <li className="bulletPointBoxListItem">Excellence: Striving for perfection in every project we undertake.</li>
                        </ol>
                    </div>
                </div>

                <div className="subContainer">
                    <img src={about_page_illustration_4} alt="home illustration" />
                </div>
            </div>


            <div className="container">
                <div className="subContainer">
                    <img src={about_page_illustration_5} alt="home illustration" />
                </div>
                <div className="subContainer">
                    <div className="bulletPointBox">
                        <h2 className="bulletPointBoxHeading">Our Journey</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">Founded by a group of passionate developers and designers, Dimensio started with a vision to bridge the gap between innovation and user experience. Over the years, we’ve grown into a trusted partner for businesses across industries.</li>
                            <li className="bulletPointBoxListItem">Dimensio is a web development company that goes beyond building websites. We create digital products and services that help businesses thrive in a competitive landscape.</li>

                        </ol>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="subContainer">
                    <div className="bulletPointBox">
                        <h2 className="bulletPointBoxHeading">Why Dimensio?</h2>
                        <ol className="bulletPointBoxList">
                            <li className="bulletPointBoxListItem">Expertise: Skilled team proficient in cutting-edge technologies.</li>
                            <li className="bulletPointBoxListItem">Customized Solutions: Every project is tailored to your unique needs.</li>
                            <li className="bulletPointBoxListItem">Commitment: Dedication to delivering exceptional results on time.</li>
                            <li className="bulletPointBoxListItem">Client-Centric Approach: We work as an extension of your team to achieve your goals.</li>
                        </ol>
                    </div>
                </div>
                <div className="subContainer">
                    <img src={about_page_illustration_6} alt="home illustration" />
                </div>
            </div>

        </section>
    )
}

//  <h4 className="Heading">About us</h4>