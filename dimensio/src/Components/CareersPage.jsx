import careerImage from "../Assets/careerImage.png";
import teamworkImage from "../Assets/teamwork.png";
import teamwork2Image from "../Assets/teamwork2.png";
import ApplySection from "./ApplySection";
import HiringCard from "./HiringCard";
import HiringCardContainer from "./HiringCardContainer";
import { useState } from "react";
export default function CareersPage() {
    // <h2 className="CareerPageHeading">Careers</h2>

    const hiring_List = [
        {
            "id": 1,
            "title": "Frontend Developer",
            "location": "Remote or Hybrid",
            "jobType": "Full-time",
            "description": "Responsible for creating responsive, user-friendly interfaces using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular.",
            "showDescription": false
        },
        {
            "id": 2,
            "title": "Backend Developer",
            "location": "Onsite or Remote",
            "jobType": "Full-time",
            "description": "Builds server-side logic, APIs, and database systems using technologies like Node.js, Python, PHP, or Java.",
            "showDescription": false
        },
        {
            "id": 3,
            "title": "Full-Stack Developer",
            "location": "Hybrid",
            "jobType": "Full-time",
            "description": "Handles both frontend and backend development, ensuring seamless integration and functionality across the entire web application.",
            "showDescription": false
        },
        {
            "id": 4,
            "title": "UI/UX Designer",
            "location": "Remote",
            "jobType": "Part-time or Full-time",
            "description": "Designs intuitive and visually appealing user interfaces while optimizing user experience through research and testing.",
            "showDescription": false
        },
        {
            "id": 5,
            "title": "Quality Assurance (QA) Engineer",
            "location": "Remote or Hybrid",
            "jobType": "Part-time",
            "description": "Ensures the quality of web applications through manual and automated testing, bug tracking, and performance analysis.",
            "showDescription": false
        },
        {
            "id": 6,
            "title": "Project Manager",
            "location": "Onsite or Remote",
            "jobType": "Full-time",
            "description": "Oversees web development projects, manages client expectations, and ensures timely delivery by coordinating teams effectively.",
            "showDescription": false
        },
        {
            "id": 7,
            "title": "Digital Marketing Specialist",
            "location": "Remote",
            "jobType": "Internship or Full-time",
            "description": "Implements SEO, SEM, and social media campaigns to enhance the agency's digital presence and drive client engagement.",
            "showDescription": false
        },
        {
            "id": 8,
            "title": "Content Writer",
            "location": "Remote",
            "jobType": "Internship or Part-time",
            "description": "Creates engaging content for blogs, websites, and marketing campaigns, optimizing for search engines and user engagement.",
            "showDescription": false
        },
        {
            "id": 9,
            "title": "DevOps Engineer",
            "location": "Onsite or Remote",
            "jobType": "Full-time",
            "description": "Manages cloud infrastructure, automates deployment pipelines, and ensures high availability and performance of web applications.",
            "showDescription": false
        },
        {
            "id": 10,
            "title": "Web Development Intern",
            "location": "Remote",
            "jobType": "Internship",
            "description": "Assists in web development projects, learning hands-on with real-world applications using technologies like HTML, CSS, JavaScript, and backend tools.",
            "showDescription": false
        }
    ]

    const [jobs, setJobs] = useState(hiring_List);
    const [job, setJob] = useState({});

    const [showApplySection, setShowApplySection] = useState(false);

    const toggleDescription = (id) => {

        const updatedJobs = jobs.map((job) =>
            job.id === id ? { ...job, showDescription: !job.showDescription } : job
        );
        setJobs(updatedJobs);
        console.log(id);
    }

    const openApplySection = (job) => {
        setJob(job)
        setShowApplySection(true);
    }

    const closeApplySection = () => {
        setShowApplySection(false);
    }

    const submitForm = (event) => {
        event.preventDefault();

        let api = "https://script.google.com/macros/s/AKfycbzTDvffrILwqoK5NugHZzTF0R1bVoAYw_7ir6Bde6GGZIObDg07oN1T5ytLHYyR7hHX5w/exec";

        let data = new FormData(event.target);


        fetch(api,{method:"POST", body:data}).then(res=> res.text()).then(data=>console.log(data))

        /*let name = event.target.name.value;
        let email = event.target.email.value;
        let phoneNumber = event.target.phoneNumber.value;
        let age = event.target.age.value;
        let gender = event.target.gender.value;
        let experience = event.target.experience.value;
        let qualification = event.target.qualification.value;
        let positionApplied = event.target.positionApplied.value;
        let resumeFilled = event.target.resumeFilled.value;

        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        console.log(age);
        console.log(gender);
        console.log(qualification);
        console.log(positionApplied);
        console.log(resumeFilled);
        console.log(experience);

        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phoneNumber.value = '';
        event.target.age.value = '';
        event.target.gender.value = '';
        event.target.qualification.value = '';
        event.target.positionApplied.value = '';
        event.target.resumeFilled.value = '';
        event.target.experience.value = '';*/

        setShowApplySection(false);
    }

    return (
        <section className="CareerPage">
            <div className="CareerPageContainer">
                <div className="CareerPageImageContainer">
                    <img src={careerImage} alt="career image" />
                </div>
                <div className="CareerPageContentContainer">
                    <div className="CareerPageContentSubContainer">
                        <h2 className="CareerPageContentHeading">Shape the Future with Dimensio.</h2>
                        <p className="CareerPageContentSubHeading">At Dimensio, we create digital experiences and opportunities that make an impact. Let’s grow together!</p>
                    </div>
                    <div className="CareerPageContentSubContainer">
                        <button className="CareerPageContentButton">Apply Now</button>
                    </div>
                </div>
            </div>

            <br />
            <div className="CareerPageContainer">
                <div className="CareerPageContentContainer">
                    <div className="CareerPageContentSubContainer">
                        <h2 className="CareerPageSubHeading">Why Dimensio?</h2>
                        <ol className="CareerPageContentList">
                            <li className="CareerPageContentListItem">Innovative and creative environment.</li>
                            <li className="CareerPageContentListItem">Opportunities for growth and learning.</li>
                            <li className="CareerPageContentListItem">Flexible working hours or remote options.</li>
                            <li className="CareerPageContentListItem">Diverse and inclusive workplace.</li>
                            <li className="CareerPageContentListItem">Collaborative team culture.</li>
                        </ol>
                    </div>
                </div>
                <div className="CareerPageImageContainer">
                    <img src={teamworkImage} alt="career image" />
                </div>
            </div>

            <h3 className="CareerPageHeading">We’re Hiring!</h3>

            <HiringCardContainer jobs={jobs} toggleDescription={toggleDescription} openApplySection={openApplySection}></HiringCardContainer>
            <ApplySection job={job} showApplySection={showApplySection} closeApplySection={closeApplySection} submitForm={submitForm} />

            <br />

            <div className="CareerPageContainer">
                <div className="CareerPageImageContainer">
                    <img src={teamwork2Image} alt="career image" />
                </div>

                <div className="CareerPageContentContainer">
                    <div className="CareerPageContentSubContainer">
                        <h2 className="CareerPageSubHeading">How to Join Us</h2>
                        <ol className="CareerPageContentList">
                            <li className="CareerPageContentListItem">Submit your application online.</li>
                            <li className="CareerPageContentListItem">Initial screening and interview.</li>
                            <li className="CareerPageContentListItem">Skill assessment (if applicable).</li>
                            <li className="CareerPageContentListItem">Final discussion and onboarding.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="CareerPageRibbon">
                <p>We value your time and strive to make the process seamless and transparent.</p>
            </div>

            <div className="CareerPageContainer">
                <div className="CareerPageContentContainer">
                    <div className="CareerPageContentSubContainer">
                        <h2 className="CareerPageSubHeading">Perks of Joining Dimensio</h2>
                        <ol className="CareerPageContentList">
                            <li className="CareerPageContentListItem">Competitive salary and bonuses.</li>
                            <li className="CareerPageContentListItem">Health insurance and wellness programs.</li>
                            <li className="CareerPageContentListItem">Paid time off and holidays.</li>
                            <li className="CareerPageContentListItem">Flexible work schedules.</li>
                        </ol>
                    </div>
                </div>
                <div className="CareerPageImageContainer">
                    <img src={teamwork2Image} alt="career image" />
                </div>
            </div>

            <div className="CareerPageRibbon">
                <p>Have Questions? Email us at <a href="mailto:careers@dimensio.com">careers@dimensio.com</a></p>
            </div>
        </section>
    )
}