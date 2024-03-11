/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Link from "next/link";
import CategoryTab from "../components/elements/CategoryTab";
import {JobProvider} from "../components/elements/JobContext";
import {useState} from "react";
import JobSearch from "./job-search";

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
                <div className="bg-homepage4" />
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
                                            Each month, more than 3 million job seekers turn to website in their search for work,
                                            <br className="d-none d-lg-block" />
                                            making over 140,000 applications every single day
                                        </div>
                                        <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <br className="d-none d-lg-block" />
                                        </div>
                                            <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                                <JobSearch onSearch={handleSearch}/>
                                            </div>
                                        <div className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                            <strong>Popular Searches:</strong>
                                            <Link href="/jobs-list?search=Java&country=">
                                                Java
                                            </Link>
                                            <Link href="/jobs-list?search=frontend&country=">
                                                Frontend
                                            </Link>
                                            <Link href="/jobs-list?search=architect&country=">
                                              Architect
                                            </Link>
                                            <Link href="/jobs-list?search=backend&country=">
                                               Backend
                                            </Link>
                                            <Link href="/jobs-list?search=engineer&country=">
                                                Engineer
                                            </Link>
                                            <Link href="/jobs-list?search=senior&country=">
                                                Senior
                                            </Link>
                                            <Link href="/jobs-list?search=cloud&country=">
                                                Cloud
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-12 d-none d-xl-block col-md-6">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1">
                                            <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage4/banner.png" />
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
                        </div>
                        <CategoryTab/>
                    </div>
                </section>
            </Layout>
        </JobProvider>
        </>
    );
}
