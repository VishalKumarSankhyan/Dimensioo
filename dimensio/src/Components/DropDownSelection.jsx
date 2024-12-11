function DropDownSelection({jobs}) {
    return (
        <select id="jobType" name="jobType" required>
            {
                jobs.map((job)=>{
                    return <option value="">{job.title}</option>
                })
            }
        </select>
    )
}

export default DropDownSelection;