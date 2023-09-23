import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    // All jobs are find here
    const jobs = useLoaderData();
    const { id } = useParams();
    // Find specifiq job
    const job = jobs.find(job => job.id == id)
    console.log(job);
    return (
        <div>
            <h2 className="text-center my-10">{job.job_title}</h2>
            <div className="max-w-7xl mx-auto my-10 grid gap-4 md:grid-cols-4">
                <div className="border col-span-3 space-y-3">
                    <h2>
                        Job Description: {job.job_description}
                    </h2>
                    <h2>
                        Job Responsibility:: {job.job_responsibility}
                    </h2>
                    <h2>
                        Educational Requirements:: {job.educational_requirements}
                    </h2>
                    <h2>
                        Experiences:: {job.experiences}
                    </h2>
                </div>
                <div className="border col-span-1">
                    <h2>
                        Job Details
                    </h2>
                    <hr />
                    <h1>
                        Salary: {job.salary}
                    </h1>
                    <h2>
                        Job title: {job.job_title}
                    </h2>
                    <h3>
                        Contact Information
                    </h3>
                    <hr />
                    <h2>
                        Phone: {job.contact_information.phone}
                    </h2>
                    <h2>
                        Email: {job.contact_information.email}
                    </h2>
                    <h2>
                        Address: {job.contact_information.address}
                    </h2>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>

        </div>

    );
};

export default JobDetails;