﻿/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Link from "next/link";
import CategoryTab3 from "../components/elements/CategoryTab3";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="bg-homepage1" />
                <section className="section-box">
                    <div className="banner-hero hero-1 banner-homepage4">
                        <div className="banner-inner">
                            <div className="row">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="block-banner">
                                        <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                                            Find your new  <span className="color-brand-2">job in tech</span> now!
                                            <br className="d-none d-lg-block" />
                                        </h1>
                                        <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                          Gdybys mogl to wyposrodkowac
                                            <br className="d-none d-lg-block" />
                                        </div>
                                        <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
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
                                        <div className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                            <strong>Popular Searches:</strong>
                                            <Link legacyBehavior href="#">
                                                <a>Designer, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>Web, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>IOS, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>Developer, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>PHP, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>Senior, </a>
                                            </Link>
                                            <Link legacyBehavior href="#">
                                                <a>Engineer, </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-100" />
                <section className="section-box mt-80">
                    <div className="section-box wow animate__animated animate__fadeIn">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Browse by category</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                            </div>
                            <div className="box-swiper mt-50">
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                        </div>
                        <CategoryTab3 />
                    </div>
                </section>
            </Layout>
        </>
    );
}