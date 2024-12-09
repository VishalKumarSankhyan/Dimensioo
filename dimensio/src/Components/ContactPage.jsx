import contactIllustration from "../Assets/contactpageillustration.png";
export default function ContactPage() {
    return (

        <section className="ContactPage">
            <h2 className="ContactPageHeading">How can we help?</h2>

            <div className="ContactPageContainer">
                <div className="ContactPageImageContainer">
                   <img src={contactIllustration} alt="conatct image" />
                </div>

                <div className="ContactSubContainer">
                    <form action="" className="ContactForm">
                        <div className="ContactFormSubContainer">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter Name" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Enter Email" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="">Phone</label>
                            <input type="number" placeholder="Enter Phone" />
                        </div>

                        <div className="ContactFormSubContainer">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" placeholder="Leave us a note" ></textarea>
                        </div>

                        <div className="ContactFormSubContainer">
                            <input type="button" value="Submit" className="ContactFormButton" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}