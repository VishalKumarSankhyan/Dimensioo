import careerImage from "../Assets/careerImage.png";
export default function CareersPage (){
    return (
        <section className="CareerPage">
            <h3 className="CareerPageHeading">Careers</h3>
            <div className="CareerPageContainer">
                <div className="CareerPageImageContainer">
                    <img src={careerImage} alt="career image" />
                </div>
                <div className="CareerPageContentContainer"></div>
            </div>
        </section>
    )
}