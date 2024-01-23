﻿/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Link from "next/link";
import CategoryTab from "../components/elements/CategoryTab";
import {JobProvider} from "../components/elements/JobContext";
import JobSearch from "./job-search";
import {useState} from "react";
import JobSearchMain from "./job-search-main";

export default function Home() {

    const [currentFilter, setCurrentFilter] = useState({
        positionTitle: '',
        offerCountry: ''
    })

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

    return (
        <>
        <JobProvider>
            <Layout>
                <div className="bg-homepage1" />
                <section className="section-box">
                    <div className="banner-hero hero-1 banner-homepage4">
                        <div className="banner-inner">
                            <div className="row">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="block-banner">
                                        <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                                            <span className="color-brand-2">Find</span> your new  <span className="color-brand-2">job in tech</span> now!
                                            <br className="d-none d-lg-block" />
                                        </h1>
                                        <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                          To na srodek, zmiana w wyszukiwaniu
                                            <br className="d-none d-lg-block" />
                                        </div>
                                            <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                                <JobSearchMain onSearch={handleSearch}/>
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
                        <CategoryTab/>
                    </div>
                </section>
            </Layout>
        </JobProvider>
        </>
    );
}
