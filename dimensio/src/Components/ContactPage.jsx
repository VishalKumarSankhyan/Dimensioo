import contactIllustration from "../Assets/contactpageillustration.png";
import contact_page_illustration_1 from "../Assets/Illustrations/contact_page_illustration_1.png";
import contact_page_illustration_2 from "../Assets/Illustrations/contact_page_illustration_2.png";
import contact_page_illustration_3 from "../Assets/Illustrations/contact_page_illustration_3.png";
export default function ContactPage() {

    const submitContactForm = (event) => {
        event.preventDefault();
        let formObject = new FormData(event.target);

        let api = "https://script.google.com/macros/s/AKfycbxpgJZLRob2k5_7ZVvdMHBj0554XhuWrKXwIv9AFbMsXoCfScsCNUyAN8zms7celBtieg/exec";
        fetch(api, { method: "POST", body: formObject }).then(res => res.text()).then(data => console.log(data))
    }

    return (

        <section className="ContactPage">

            <div className="container">
                <div className="subContainer">
                    <img src={contact_page_illustration_1} alt="home illustration" />
                </div>
                <div className="subContainer">
                    <div className="contentBox">
                        <h1 className="contentHeading">We’re Here to Help You Build Your Vision</h1>
                        <p className="contentSubHeading">Have a question or an idea? Let’s collaborate and make something amazing together.</p>
                        <a href="#" className="button">Send Us a Message</a>
                    </div>
                </div>
            </div>


            <h2 className="ContactPageHeading">How can we help?</h2>

            <div className="ContactPageContainer">

                <div className="ContactSubContainer">
                    <form className="ContactForm" method="post" onSubmit={(event) => submitContactForm(event)}>
                        <div className="ContactFormSubContainer">
                            <label htmlFor="contactName">Name</label>
                            <input type="text" id="contactName" name="contactName" placeholder="Enter Name" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" id="contactEmail" name="contactEmail" placeholder="Enter Email" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="contactPhoneNumber">Phone</label>
                            <input type="number" id="contactPhoneNumber" name="contactPhoneNumber" placeholder="Enter Phone" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="contactMessage">Message</label>
                            <textarea id="contactMessage" name="contactMessage" placeholder="Leave us a note" ></textarea>
                        </div>

                        <div className="ContactFormSubContainer">
                            <input type="submit" value="Submit" className="ContactFormButton" />
                        </div>
                    </form>
                </div>
                <div className="ContactPageImageContainer">
                    <img src={contact_page_illustration_2} alt="conatct image" />
                </div>
            </div>

            <div className="ContactPageContainer">
                <div className="ContactPageImageContainer">
                    <img src={contact_page_illustration_3} alt="conatct image" />
                </div>

                <div className="ContactSubContainer">
                    <div className="ContactContentbox">
                        <h2 className="ContactContentboxHeading">Have Questions? We’ve Got Answers!</h2>
                        <div className="ContactContentQuestionConatiner">
                            <div className="ContactContentQuestionbox">
                                <h4>What services does Dimensio offer?</h4>
                                <p>We specialize in web development, product creation, and scalable business solutions.</p>
                            </div>

                            <div className="ContactContentQuestionbox">
                                <h4>How long does it take to complete a project?</h4>
                                <p>It depends on the scope and complexity, but we’ll provide a clear timeline after our initial discussion.</p>
                            </div>


                            <div className="ContactContentQuestionbox">
                                <h4>What industries do you work with?</h4>
                                <p>We work across a variety of industries, including e-commerce, healthcare, education, and startups.</p>
                            </div>


                            <div className="ContactContentQuestionbox">
                                <h4>Do you offer custom web solutions?</h4>
                                <p>Absolutely! We tailor every project to your unique needs and goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactRibbon">
                <h2>Prefer Another Way to Reach Out?</h2>

                <div className="contactContainer">
                    <div className="contactCard">
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="contactCard">
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="contactCard">

                    </div>
                </div>
            </div>


        </section>
    )
}