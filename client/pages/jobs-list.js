/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import LocationFilter from "../components/filter/LocationFilter";
import ExperienceLevelFilter from "../components/filter/ExperienceLevelFilter";
import RoleFilter from "../components/filter/RoleFilter";
import EmploymentModel from "../components/filter/EmploymentModel";
import EmploymentType from "../components/filter/EmploymentType";
import JobsAvailable from "../components/elements/JobsAvailable";
import RowJobOfferList from "../components/elements/RowJobOfferList";
export default function JobList() {

    const [offers, setOffers] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://www.localhost:8080/api/offer')
            .then((res) => res.json())
            .then((offer) => {
                setOffers(offer)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!offers) return <p>Could not fetch offers</p>

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <JobsAvailable/>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-location">
                                                    <option value="DK">Denmark</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="No">Norway</option>
                                                    <option value="Remote">Remote</option>
                                                </select>
                                            </div>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
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
                                                                <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>12</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
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
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Newest Post</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Newest Post</a>
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
                                                            <Link legacyBehavior href="/jobs-list">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="row display-list">*/}
                                        {/*    {offers.map((offer) => (*/}
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
                                        {/*                                    <a className="name-job">{offer.employer.name}</a>*/}
                                        {/*                                </Link>*/}
                                        {/*                                <span*/}
                                        {/*                                    className="location-small">{offer.city}, {offer.country}</span>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                    </div>*/}
                                        {/*                    <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">*/}
                                        {/*                        <div className="pl-15 mb-15 mt-30">*/}
                                        {/*                            {offer.technologyStack.map((tech) => (*/}
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
                                        {/*                            <a>{offer.positionTitle}</a>*/}
                                        {/*                        </Link>*/}
                                        {/*                    </h4>*/}
                                        {/*                    <div className="mt-5">*/}
                                        {/*                        <span className="card-briefcase">{offer.employmentModel}</span>*/}
                                        {/*                        <span className="card-time">*/}
                                        {/*                        <span>4</span>*/}
                                        {/*                        <span> mins ago</span>*/}
                                        {/*                    </span>*/}
                                        {/*                    </div>*/}
                                        {/*                    <p className="font-sm color-text-paragraph mt-10">{offer.jobOfferDescription}</p>*/}
                                        {/*                    <div className="card-2-bottom mt-20">*/}
                                        {/*                        <div className="row">*/}
                                        {/*                            <div className="col-lg-7 col-7">*/}
                                        {/*                                <span className="card-text-price">$500</span>*/}
                                        {/*                                <span className="text-muted">/Hour</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <div className="col-lg-5 col-5 text-end">*/}
                                        {/*                                <div className="btn btn-apply-now"*/}
                                        {/*                                     data-bs-toggle="modal"*/}
                                        {/*                                     data-bs-target="#ModalApplyJobForm">*/}
                                        {/*                                    Apply now*/}
                                        {/*                                </div>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    ))}*/}
                                        {/*</div>*/}
                                        <RowJobOfferList/>
                                    </div>
                                    <div className="paginations">
                                        <ul className="pager">
                                            <li>
                                                <a className="pager-prev" href="#" />
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">1</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">2</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">3</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">4</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">5</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number active">6</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">7</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="pager-next" href="#" />
                                            </li>
                                        </ul>
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
