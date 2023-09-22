import PropTypes from 'prop-types';

const Job = ({job}) => {

    const{logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="grid grid-cols-2 border-gray-400">
            <section>
                <img src={logo} alt="" />
                <h2>{job_title}</h2>
                <h3>{company_name}</h3>
                <div className="flex">
                    <button>{remote_or_onsite}</button>
                    <button>{job_type}</button>
                </div>
                <div className="flex">
                    <p>{location}</p>
                    <p>Salary: {salary}</p>
                </div>
            </section>
        </div>
    );
};

export default Job;

Job.propTypes ={
    job: PropTypes.object,
}