import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    // Show four data in homepage
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="text-center">
            <h1 className="text-5xl">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="my-12 grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`${dataLength === jobs.length && 'hidden'}`}>
                <button className="btn btn-primary" onClick={() => setDataLength(jobs.length)}
                >See All Jobs</button>
            </div>    
        </div>

    );
};

export default FeaturedJobs;