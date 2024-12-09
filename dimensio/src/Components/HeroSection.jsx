import homeIllustration from "../Assets/homepageillustration.png";
export default function HeroSection(){
    return (
        <div className="homeContainer">
        <div className="homeIllustrationContainer">
          <img src={homeIllustration} alt="home illustration" />
        </div>
        <div className="homeContentContainer">
            <h2 className="homeContentHeading">Building Digital Dimensions for Your Success.</h2>
            <p className="homeContentSubHeading">We design and develop custom web solutions that elevate your online presence.</p>
            <a href="#" className="homeContentButton">Schedule a Call</a>
        </div>
      </div>
    )
}