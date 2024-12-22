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

            <div className="ContactPageContainer">
                <div className="ContactPageImageContainer">
                    <img src={contact_page_illustration_1} alt="conatct image" />
                </div>

                <div className="ContactSubContainer">
                    <div className="ContactContentbox">
                        <h1 className="ContactContentboxHeading">We’re Here to Help You Build Your Vision</h1>
                        <p className="ContactContentboxHeading">Have a question or an idea? Let’s collaborate and make something amazing together.</p>
                        <a href="#" className="ContactContentboxButton">Send Us a Message</a>
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
                        <div>
                            <div>
                                <h4>What services does Dimensio offer?</h4>
                                <p>We specialize in web development, product creation, and scalable business solutions.</p>
                            </div>

                            <div>
                                <h4>How long does it take to complete a project?</h4>
                                <p>It depends on the scope and complexity, but we’ll provide a clear timeline after our initial discussion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactRibbon">
                <h2>Other Ways to Contact Us</h2>

                <div className="contactContainer">
                    <div className="contactCard">

                    </div>

                    <div className="contactCard">

                    </div>

                    <div className="contactCard">

                    </div>
                </div>
            </div>


        </section>
    )
}