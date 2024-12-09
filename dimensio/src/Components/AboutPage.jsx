import teamLogo from "../Assets/team.png";
export default function AboutPage() {
    return (
        <section className="AboutPage">
            <h2 className="AboutPageHeading">About us</h2>
            <div className="AboutPageContainer">
                <div className="AboutPageImageContainer">
                    <img src={teamLogo} alt="team logo" />
                </div>

                <div className="AboutPageContentContainer">
                    <h4 className="AboutPageIntroduction">
                        At Dimensio, we’re redefining the digital landscape with cutting-edge web development and design solutions. Our mission is to empower businesses by delivering custom-tailored websites and applications that elevate brands and drive success.
                    </h4>

                    <div className="AboutPageSubContainer">
                        <h3 className="AboutPageSubContainerHeading">Our Story</h3>
                        <p className="AboutPageSubContainerSubHeading">Founded by a group of passionate developers and designers, Dimensio started with a vision to bridge the gap between innovation and user experience. Over the years, we’ve grown into a trusted partner for businesses across industries.</p>
                    </div>

                    <p className="AboutPageSubHeading"><span>Our Vision: </span>To be the go-to partner for businesses seeking innovative and user-focused digital solutions.</p>
                    <p className="AboutPageSubHeading"><span>Our Mission: </span>To combine creativity, technology, and strategy to deliver exceptional web experiences that meet our clients' unique goals.</p>

                </div>


            </div>

        </section>
    )
}