import NotFound from '../Assets/404NotFound.png';
function ErrorPage(){
    return (
        <section className='ErrorPageContainer'>
            <div className='ErrorPageImageContainer'>
                <img src={NotFound} alt="404 Not Found" />
                <h2 className='EroorPageHeading'>Page Not Found</h2>
            </div>

        </section>
    )
}

export default ErrorPage;