function ApplySection(){
    return(
        <section className="ApplySection">
            <div className="ApplySectionBg">

            </div>
            <div className="ApplySectionConatiner">
                <form className="ApplySectionForm" action="" method="post">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="name" type="text" />
                    </div>

                    <div>
                        <label htmlFor="name">Phone Number</label>
                        <input id="name" type="text" />
                    </div>

                    <div>
                        <label htmlFor="name">Age</label>
                        <input id="name" type="text" />
                    </div>

                    <div>
                        <label htmlFor="male">Gender</label>
                        <div>
                            <input type="radio" name="gender" id="male" value='male' />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" id="female" value='female'/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" id="other" value='other' />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

export default ApplySection;