import contactIllustration from "../Assets/contactpageillustration.png";
export default function ContactPage() {

    const submitContactForm = (event) => {
        event.preventDefault();
        let formObject = new FormData(event.target);

        let api = "https://script.google.com/macros/s/AKfycbxpgJZLRob2k5_7ZVvdMHBj0554XhuWrKXwIv9AFbMsXoCfScsCNUyAN8zms7celBtieg/exec";
        fetch(api, { method: "POST", body: formObject }).then(res => res.text()).then(data => console.log(data))
    }

    return (

        <section className="ContactPage">
            <h2 className="ContactPageHeading">How can we help?</h2>

            <div className="ContactPageContainer">
                <div className="ContactPageImageContainer">
                    <img src={contactIllustration} alt="conatct image" />
                </div>

                <div className="ContactSubContainer">
                    <form className="ContactForm" method="post" onSubmit={(event)=> submitContactForm(event)}>
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
            </div>
        </section>
    )
}