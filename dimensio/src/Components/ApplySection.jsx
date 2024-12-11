import DropDownSelection from "./DropDownSelection";

function ApplySection({ job, showApplySection, closeApplySection, submitForm }) {

    return (
        <>
            { showApplySection ? 
                <section className="ApplySection">
                    <div className="ApplySectionConatiner">
                        <form className="ApplySectionForm" method="post" onSubmit={(event)=>submitForm(event)}>
                            <div className="ApplySectionFormContainer">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" name="name" required />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" required />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input id="phoneNumber" type="number" name="phoneNumber" required />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="age">Age</label>
                                <input id="age" type="number" name="age" required />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="male">Gender</label>
                                <div className="ApplySectionFormSubContainer">
                                    <input type="radio" name="gender" id="male" value='male'  defaultChecked={true} />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="ApplySectionFormSubContainer">
                                    <input type="radio" name="gender" id="female" value='female' />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="ApplySectionFormSubContainer">
                                    <input type="radio" name="gender" id="other" value='other' />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="qualification">Education Qualification:</label>
                                <select id="qualification" name="qualification" required>
                                    <option value="">Select your qualification</option>
                                    <option value="high-school">High School</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="experience">Years of Experience:</label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    min="0"
                                    max="50"
                                    placeholder="Enter years of experience"
                                    required
                                />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="">Position Applied For</label>
                                <input type="text" name="positionApplied" id="" readOnly={true} value={job.title} />
                            </div>

                            <div className="ApplySectionFormContainer">
                                <label htmlFor="uploadResume">Upload Resume</label>
                                <label className="ChooseFileButton" htmlFor="uploadResume">Choose File</label>
                                <div className="ApplySectionFormChooseFileContainer">
                                    <input type="file" name="resumeFilled" id="uploadResume" required />
                                </div>
                            </div>

                            <div className="ApplySectionFormButtonsContainer">
                                <input type="submit" value="Apply" />
                                <input type="reset" value="Cancel" onClick={closeApplySection}  />
                            </div>

                        </form>
                    </div>
                </section>
                : ''
            }
        </>
    )
}

export default ApplySection;