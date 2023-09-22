import PropTypes from 'prop-types';

const Job = ({job}) => {

    const{logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div>
            <section className='border-2 p-4 rounded-lg space-y-2' >
                <img src={logo} alt="" />
                <h2 className='text-left'>{job_title}</h2>
                <h3 className='text-left'>{company_name}</h3>
                <div className="flex">
                    <button className=' border-2 rounded-md px-5 py-2 font-semibold mr-3'>{remote_or_onsite}</button>
                    <button className=' border-2 rounded-md px-5 py-2 font-semibold mr-3'>{job_type}</button>
                </div>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <p>Salary: {salary}</p>
                </div>
                <button className='btn bg-blue-500 text-white'>View Details</button>
            </section>
        </div>
    );
};

export default Job;

Job.propTypes ={
    job: PropTypes.object,
}