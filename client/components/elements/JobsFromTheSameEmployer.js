import React, {useEffect, useState} from "react";
import Link from "next/link";

const JobsFromTheSameEmployer = ({employerId}) => {
    const [jobsFromTheSameEmployer, setJobsFromTheSameEmployer] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/api/filterOffers/jobsByTheSameEmployer/${encodeURIComponent(employerId)}`)
            .then((response) => response.json())
            .then((data) => {
                setJobsFromTheSameEmployer(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [employerId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="box-related-job content-page">
            <h5 className="mb-30">Job Offers</h5>
            <div className="box-list-jobs display-list">
                {jobsFromTheSameEmployer.map((jobOfferFrontEndEntity) => (
                    <div key={jobOfferFrontEndEntity.id} className="col-xl-12 col-12">
                        <div className="card-grid-2 hover-up">
                            <span className="flash"/>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="card-grid-2-image-left">
                                        <div className="image-box">
                                            <img src="/assets/imgs/brands/brand-6.png" alt="jobBox"/>
                                        </div>
                                        <div className="right-info">
                                            <Link href="#">
                                                <span className="name-job">{jobOfferFrontEndEntity.employer.name}</span>
                                            </Link>
                                            <span className="location-small">{jobOfferFrontEndEntity.offerCity}, {jobOfferFrontEndEntity.offerCountry}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                    <div className="pl-15 mb-15 mt-30">
                                        {jobOfferFrontEndEntity.technologyStack.map((tech, techIndex) => (
                                            <Link key={techIndex} href="/jobs-grid">
                                                <span className="btn btn-grey-small mr-5">{tech}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h4>
                                    <Link href={`/job-details/${jobOfferFrontEndEntity.jobOfferId}`}>
                                        {jobOfferFrontEndEntity.positionTitle}
                                    </Link>
                                </h4>
                                <div className="mt-5">
                                    <span className="card-briefcase">{jobOfferFrontEndEntity.employmentType}</span>
                                    <span className="card-time">
                            <span>{jobOfferFrontEndEntity.postedOn}</span>
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default JobsFromTheSameEmployer;
