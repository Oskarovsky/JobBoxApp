import Link from "next/link";
import {useRouter} from "next/router"; // Dodaj useRouter z next/router
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import LocationFilter from "../components/filter/LocationFilter";
import ExperienceLevelFilter from "../components/filter/ExperienceLevelFilter";
import RoleFilter from "../components/filter/RoleFilter";
import EmploymentModel from "../components/filter/EmploymentModel";
import EmploymentType from "../components/filter/EmploymentType";
import JobsAvailable from "../components/elements/JobsAvailable";
import RowJobOfferList from "../components/elements/RowJobOfferList";
import CountryBoxJobOffer from "../components/elements/CountryBoxJobOffer";

export default function JobList() {

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size, setSize] = useState(6)

    const router = useRouter(); // Inicjalizuj useRouter
    const {categoryName} = router.query; // Pobierz categoryName z parametrów zapytania URL

    const [offers, setOffers] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = categoryName
            ? `http://localhost:8080/api/filterOffers/jobsListByCategory/${encodeURIComponent(categoryName)}`
            : 'http://www.localhost:8080/api/offer';

        fetch(apiUrl)
            .then((res) => res.json())
            .then((offer) => {
                setOffers(offer);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching offers:', error);
                setLoading(false);
            });
    }, [categoryName]);

    const handleChange = () => {
        setSize(10)
        return 10
    }

    if (isLoading) return <p>Loading...</p>;
    if (!offers) return <p>Could not fetch offers</p>;

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
                                        <form>
                                            <CountryBoxJobOffer/>
                                            <input className="form-input input-keysearch mr-10" type="text"
                                                   placeholder="Your keyword... "/>
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
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
                                                                        <Link legacyBehavior href="#" onClick={handleChange} onChange={handleChange}>
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
                                        <RowJobOfferList page={currentPage} size={size}/>
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
