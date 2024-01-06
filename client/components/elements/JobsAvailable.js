import React, {useEffect, useState} from "react";
import Link from "next/link";

const JobsAvailable = () => {

    const [jobsAvailable, setJobsAvailable] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/api/filterOffers/all')
            .then((res) => res.json())
            .then((jobsAvailable) => {
                setJobsAvailable(jobsAvailable)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!jobsAvailable) return <p>No profile data</p>

    return (
        <h3 className="wow animate__animated animate__fadeInUp">
            <span className="color-brand-2">{jobsAvailable.countOfJobs} Tech Jobs</span> Available Now in Nordics!
        </h3>
    );
};

export default JobsAvailable;
