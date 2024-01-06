import React, {useEffect, useState} from "react";
import Link from "next/link";
import {fetchJobOfferData, fetchJobs} from "../services/JobOfferService";

const RowJobOfferList = () => {

    const [jobs, setJobs] = useState([]);
    const [jobOffersMiniature, setJobOffersMiniature] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchJobsOffersWithPagination();
        handleLoadMore()

    }, [currentPage]);

    const API_BASE_URL = 'http://localhost:8080/api';
    const fetchJobsOffersWithPagination = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/offer/all?page=${currentPage}&size=5`);
            const data = await response.json();
            setJobOffersMiniature(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching job offers:', error);
        }
    };

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

    const fetchJobsOffersWithPagination2 = async () => {
        try {
            const result = await fetchJobs(0, 1);
            setJobOffersMiniature((prevJobs) => [...prevJobs, ...result.content]);
            // setCurrentPage(result.pageable.pageNumber + 1);
        } catch (error) {
            // Handle error, e.g., display an error message to the user
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        // Trigger fetching of the next page
        setCurrentPage((prevPage) => prevPage + 1);
    };

    if (isLoading) return <p>Loading...</p>
    if (!jobOffersMiniature) return <p>No profile data</p>

    return (
        <>
            <div>
                <h1>Job Offers</h1>
                <ul>
                    {jobOffersMiniature.map((offer) => (
                        <li key={offer.id}>
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={handlePrevPage} disabled={currentPage === 0}>
                    Previous Page
                </button>
                <span> Page {currentPage + 1} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    Next Page
                </button>
            </div>
            {/*<div className="row display-list">*/}
            {/*    {jobOffersMiniature.map((jobOfferMiniature) => (*/}
            {/*        <div className="col-xl-12 col-12">*/}
            {/*            <div className="card-grid-2 hover-up">*/}
            {/*                <span className="flash"/>*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-lg-6 col-md-6 col-sm-12">*/}
            {/*                        <div className="card-grid-2-image-left">*/}
            {/*                            <div className="image-box">*/}
            {/*                                <img src="assets/imgs/brands/brand-1.png" alt="jobBox"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="right-info">*/}
            {/*                                <Link legacyBehavior href="#">*/}
            {/*                                    <a className="name-job">{jobOfferMiniature.employerName}</a>*/}
            {/*                                </Link>*/}
            {/*                                <span*/}
            {/*                                    className="location-small">{jobOfferMiniature.offerCity}, {jobOfferMiniature.offerCountry}</span>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">*/}
            {/*                        <div className="pl-15 mb-15 mt-30">*/}
            {/*                            {jobOfferMiniature.technologyStack.map((tech) => (*/}
            {/*                                <Link legacyBehavior href="/jobs-grid">*/}
            {/*                                    <a className="btn btn-grey-small mr-5">{tech}</a>*/}
            {/*                                </Link>*/}
            {/*                            ))}*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="card-block-info">*/}
            {/*                    <h4>*/}
            {/*                        <Link legacyBehavior href="/job-details">*/}
            {/*                            <a>{jobOfferMiniature.positionTitle}</a>*/}
            {/*                        </Link>*/}
            {/*                    </h4>*/}
            {/*                    <div className="mt-5">*/}
            {/*                        <span className="card-briefcase">{jobOfferMiniature.employmentModel}</span>*/}
            {/*                        <span className="card-time"><span>{jobOfferMiniature.postedOn}</span>*/}
            {/*                                                </span>*/}
            {/*                    </div>*/}
            {/*                    <div className="card-2-bottom mt-20">*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    );
};

export default RowJobOfferList;
