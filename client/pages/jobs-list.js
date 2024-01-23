import Link from "next/link";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import LocationFilter from "../components/filter/LocationFilter";
import ExperienceLevelFilter from "../components/filter/ExperienceLevelFilter";
import RoleFilter from "../components/filter/RoleFilter";
import EmploymentModel from "../components/filter/EmploymentModel";
import EmploymentType from "../components/filter/EmploymentType";
import JobsAvailable from "../components/elements/JobsAvailable";
import JobSearch from "./job-search";

export default function JobList() {

    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(6)
    const [currentFilter, setCurrentFilter] = useState({
        positionTitle: router.query.search,
        offerCountry: router.query.country
    })

    const [jobOffersMiniature, setJobOffersMiniature] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentSize, setCurrentSize] = useState(size)
    const [isLoading, setLoading] = useState(true)


    const handleSearch = async ({ searchTerm, selectedCountry}) => {
        try {
            setCurrentFilter({
                positionTitle: searchTerm,
                offerCountry: selectedCountry
            });
        } catch (error) {
            console.error('Error fetching job offers:', error);
        }
    };

    const {categoryName} = router.query; // Pobierz categoryName z parametrów zapytania URL

    const API_BASE_URL = 'http://localhost:8080/api';

    useEffect(() => {

        fetch(`${API_BASE_URL}/filterOffers/rowJobOfferFilteredPage?page=${currentPage}&size=${currentSize}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentFilter)
        })
            .then((response) => response.json())
            .then((data) => {
                setJobOffersMiniature(data.content)
                setTotalPages(data.totalPages)
                setLoading(false)
            })
    }, [currentPage, currentFilter]);

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

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <JobsAvailable/>
                                    <div
                                        className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                                        data-wow-delay=".1s">
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
                                         data-wow-delay=".2s">
                                        <JobSearch onSearch={handleSearch}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        Showing <strong>41-60 </strong>of <strong>944 </strong>jobs
                                                    </span>
                                                </div>
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border mr-10">
                                                            <span className="text-sortby">Show:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle"
                                                                        id="dropdownSort" type="button"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                                        data-bs-display="static">
                                                                    <span>12</span>
                                                                    <i className="fi-rr-angle-small-down"/>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light"
                                                                    aria-labelledby="dropdownSort">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">10</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">12</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">20</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-border">
                                                            <span className="text-sortby">Sort by:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle"
                                                                        id="dropdownSort2" type="button"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                                        data-bs-display="static">
                                                                    <span>Newest Post</span>
                                                                    <i className="fi-rr-angle-small-down"/>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light"
                                                                    aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Newest
                                                                                Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Oldest Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Rating Post</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-view-type">
                                                            <Link legacyBehavior
                                                                  href={`/jobs-list${categoryName ? `?categoryName=${encodeURIComponent(categoryName)}` : ''}`}>
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-list.svg"
                                                                         alt="jobBox"/>
                                                                </a>
                                                            </Link>
                                                            <Link legacyBehavior
                                                                  href={`/jobs-grid${categoryName ? `?categoryName=${encodeURIComponent(categoryName)}` : ''}`}>
                                                                <a className="view-type">
                                                                    <img
                                                                        src="assets/imgs/template/icons/icon-grid-hover.svg"
                                                                        alt="jobBox"/>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row display-list">
                                            {jobOffersMiniature.map((jobOfferFrontEndEntity) => (
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up">
                                                        <span className="flash"/>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="image-box">
                                                                        <img src="assets/imgs/brands/brand-1.png"
                                                                             alt="jobBox"/>
                                                                    </div>
                                                                    <div className="right-info">
                                                                        <Link
                                                                            href={`/company-details/${jobOfferFrontEndEntity.employer.id}`}>
                                                                            <span
                                                                                className="name-job">{jobOfferFrontEndEntity.employer.name}</span>
                                                                        </Link>
                                                                        <span className="location-small">{jobOfferFrontEndEntity.offerCity}, {jobOfferFrontEndEntity.offerCountry}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
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
                                                                <Link
                                                                    href={`/job-details/${jobOfferFrontEndEntity.jobOfferId}`}>
                                                                    {jobOfferFrontEndEntity.positionTitle}
                                                                </Link>
                                                            </h4>
                                                            <div className="mt-5">
                                                                <span
                                                                    className="card-briefcase">{jobOfferFrontEndEntity.employmentModel}</span>
                                                                <span
                                                                    className="card-time"><span>{jobOfferFrontEndEntity.postedOn}</span>
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
                                                    <button className="pager-prev" onClick={handlePrevPage}
                                                            disabled={currentPage === 0}/>
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
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Advance Filter
                                                    <Link legacyBehavior href="#">
                                                        <a className="link-reset">Reset</a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <LocationFilter/>
                                            <ExperienceLevelFilter/>
                                            <RoleFilter/>
                                            <EmploymentModel/>
                                            <EmploymentType/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
