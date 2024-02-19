import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useJobContext } from './JobContext';

const CategoryTab = () => {

    const { jobsOfferFrontEndEntity, setJobsOffer } = useJobContext();
    const [isLoading, setLoading] = useState(true);
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/api/filterOffers/jobsOfTheDay')
            .then((res) => res.json())
            .then((jobOfTheDay) => {
                setJobsOffer(jobOfTheDay);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        console.log("Loading...");
        return <p>Loading...</p>;
    }

    if (!jobsOfferFrontEndEntity || jobsOfferFrontEndEntity.length === 0) {
        console.log("No data in context:", jobsOfferFrontEndEntity);
        return <p>No profile data</p>;
    }

    return (
        <>
            <div className="tab-content mt-50" id="myTabContent-1">
                <div className={`tab-pane fade ${"show active"}`}>
                    <div className="row">
                        {jobsOfferFrontEndEntity.map((singleJob) => (
                            <div key={singleJob.jobOfferId} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-grid-2 grid-bd-16 hover-up">
                                    <div className="card-block-info pt-25">
                                        <h6>
                                            <Link href={`/job-details/${singleJob.jobOfferId}`}>
                                                {singleJob.positionTitle}
                                            </Link>
                                        </h6>
                                        <div className="mt-5">
                                            <span className="card-briefcase mr-15">{singleJob.employmentModel}</span>
                                            <span className="card-time">{singleJob.postedOn}</span>
                                        </div>
                                        <div className="mt-20 border-bottom pb-20">
                                            {singleJob.technologyStack.map((tech, techIndex) => (
                                                // <Link key={techIndex} href="/jobs-grid">
                                                <span key={techIndex} className="btn btn-grey-small bg-14 mb-5 mr-5">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="card-2-bottom mt-20">
                                            <div className="row">
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="d-flex">
                                                        <img className="img-rounded"
                                                             src="assets/imgs/brands/brand-1.png" alt="jobBox"/>
                                                        <div className="info-right-img">
                                                            <h6 className="color-brand-1 lh-14">{singleJob.employerName}</h6>
                                                            <span
                                                                className="card-location font-xxs pl-15 color-text-paragraph-2">{singleJob.offerCity}, {singleJob.offerCountry}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center"><a className="btn btn-grey" href="/jobs-list">Browse more jobs</a></div>
            </div>
        </>
    );
};

export default CategoryTab;
