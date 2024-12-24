import product_page_illustration_1 from "../Assets/Illustrations/product_page_illustration_1.png";
export default function ProductsPage() {
    return (
        <section className="pageContainer">
            <div className="container">
                <div className="subContainer">
                    <img src={product_page_illustration_1} alt="product page illustration" />
                </div>
                <div className="subContainer">
                    <div className="contentBox">
                        <h1 className="contentHeading">Something Big is Coming!</h1>
                        <p className="contentSubHeading">We’re working on something amazing that will transform your digital experience. Stay tuned!</p>
                    </div>
                </div>
            </div>

            <div className="callToActionContainer">
                <div className="callToActionSubContainer">
                    <h2 className="callToActionHeading">Be the First to Know</h2>
                    <p className="callToActionSubHeading">Join our exclusive mailing list and get updates straight to your inbox</p>
                </div>
                <form action="#" className="callToActionForm">
                    <div className="callToActionFormSubContainer">
                        <input id="callToActionFormInput" type="email" placeholder="Enter Email" required className="callToActionFormInput" />
                        <input type="submit" value="Notify Me" className="callToActionFormButton" />
                    </div>
                </form>
            </div>
        </section>
    )
}

//   <h4 className="Heading">Products</h4>