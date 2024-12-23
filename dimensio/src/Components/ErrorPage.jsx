import NotFound from '../Assets//Illustrations/notfound_page_illustration.png';
function ErrorPage(){
    return (
        <section className='pageContainer'>
            <div className='ErrorPageImageContainer'>
                <img src={NotFound} alt="404 Not Found" />
            </div>

        </section>
    )
}

export default ErrorPage;

//<h2 className='EroorPageHeading'>Page Not Found</h2>