/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, {useEffect, useState} from "react";

export default function Companies() {

    const [employers, setEmployers] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/api/employer')
            .then((res) => res.json())
            .then((company) => {
                setEmployers(company)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!employers) return <p>Could not fetch companies</p>

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        <span className="color-brand-2">22 Companies</span> Available Now
                                    </h3>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                       Ta wyszukiwarka jest opcjonalna, jak bedzie za duzo roboty to damy sobie luz
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-industry">
                                                    <option value={0}>Industry</option>
                                                    <option value={1}>Software</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Recruting</option>
                                                    <option value={4}>Management</option>
                                                    <option value={5}>Advertising</option>
                                                    <option value={6}>Development</option>
                                                </select>
                                            </div>
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
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 float-middle">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {employers.map((employer) => (
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                    <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="image-box">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-1.png" alt="jobBox"/>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text mt-10">
                                                            <h5 className="font-bold">
                                                                <Link legacyBehavior href="/company-details">
                                                                    <a>{employer.name}</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-5">
                                                                <img alt="jobBox" src="assets/imgs/template/icons/star.svg"/>
                                                                <img alt="jobBox" src="assets/imgs/template/icons/star.svg"/>
                                                                <img alt="jobBox" src="assets/imgs/template/icons/star.svg"/>
                                                                <img alt="jobBox" src="assets/imgs/template/icons/star.svg"/>
                                                                <img alt="jobBox" src="assets/imgs/template/icons/star.svg"/>
                                                                <span className="font-xs color-text-mutted ml-10">
                                                                    <span>(</span>
                                                                    <span>66</span>
                                                                    <span>)</span>
                                                                </span>
                                                            </div>
                                                            <span className="card-location">{employer.city}, {employer.country}</span>
                                                            <div className="mt-30">
                                                                <Link legacyBehavior href="/jobs-grid">
                                                                    <a className="btn btn-grey-big">
                                                                        <span>12</span>
                                                                        <span> Jobs Open</span>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
