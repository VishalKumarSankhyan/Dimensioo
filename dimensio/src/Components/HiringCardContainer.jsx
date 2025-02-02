import HiringCard from "./HiringCard";

function HiringCardContainer(props){
    return(
        <div className="CareerPageHiringContainer">
            {
                props.jobs.map((job) => {
                    return job != undefined ? <HiringCard job={job} key={job.id} toggleDescription={props.toggleDescription} openApplySection={props.openApplySection} /> : ''
                })

            }

            <HiringCard/>
        </div>
    )
}

export default HiringCardContainer;