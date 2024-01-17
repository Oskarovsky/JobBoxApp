import React, {useEffect, useState} from "react";
import Link from "next/link";
import {fetchJobOfferData, fetchJobs} from "../services/JobOfferService";

const RowJobOfferList = ({ page, size }) => {

    const [jobOffersMiniature, setJobOffersMiniature] = useState([]);
    const [currentPage, setCurrentPage] = useState(page);
    const [totalPages, setTotalPages] = useState(0);
    const [currentSize, setCurrentSize] = useState(size)
    const [isLoading, setLoading] = useState(true)

    const API_BASE_URL = 'http://localhost:8080/api';

    useEffect(() => {
        fetch(`${API_BASE_URL}/filterOffers/rowJobOfferPage?page=${currentPage}&size=${currentSize}`)
            .then((res) => res.json())
            .then((data) => {
                setJobOffersMiniature(data.content)
                setTotalPages(data.totalPages)
                setLoading(false)
            })
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };


    if (isLoading) return <p>Loading...</p>
    if (!jobOffersMiniature) return <p>No profile data</p>

    return (
        <>
            <div className="row display-list">
                {jobOffersMiniature.map((jobOfferFrontEndEntity) => (
                    <div className="col-xl-12 col-12">
                        <div className="card-grid-2 hover-up">
                            <span className="flash"/>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="card-grid-2-image-left">
                                        <div className="image-box">
                                            <img src="assets/imgs/brands/brand-1.png" alt="jobBox"/>
                                        </div>
                                        <div className="right-info">
                                            <Link href={`/company-details/${jobOfferFrontEndEntity.employer.id}`}>
                                                <span className="name-job">{jobOfferFrontEndEntity.employer.name}</span>
                                            </Link>
                                            <span
                                                className="location-small">{jobOfferFrontEndEntity.offerCity}, {jobOfferFrontEndEntity.offerCountry}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                    <div className="pl-15 mb-15 mt-30">
                                        {jobOfferFrontEndEntity.technologyStack.map((tech) => (
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a className="btn btn-grey-small mr-5">{tech}</a>
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
                                    <span className="card-briefcase">{jobOfferFrontEndEntity.employmentModel}</span>
                                    <span className="card-time"><span>{jobOfferFrontEndEntity.postedOn}</span>
                                    </span>
                                </div>
                                <div className="card-2-bottom mt-20">
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="paginations">
                <ul className="pager">
                    <li>
                        <button className="pager-prev" onClick={handlePrevPage} disabled={currentPage === 0}/>
                    </li>
                    {Array.from({length: totalPages}).map((_, index) => (
                        <li>
                            <Link legacyBehavior href="#">
                                {index === currentPage
                                    ? (<a className="pager-number active">{index}</a>)
                                    : (<a className="pager-number">{index}</a>)
                                }
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className="pager-next" onClick={handleNextPage}
                                disabled={currentPage === totalPages - 1}/>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default RowJobOfferList;
