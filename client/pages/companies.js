/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, {useEffect, useState} from "react";
import IndustryBox from "../components/elements/IndustryBox";
import CountryBoxEmployer from "../components/elements/CountryBoxEmployer";
import EmployerList from "../components/elements/EmployerList";

export default function Companies() {

    const [countOfCompanies, setCountOfComapnies] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/api/filterEmployer/countOfEmployersAvailable')
            .then((res) => res.json())
            .then((countOfCompanies) => {
                setCountOfComapnies(countOfCompanies)
                setIsLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!countOfCompanies) return <p>Could not fetch companies</p>

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        Available number of companies: <span className="color-brand-2">{countOfCompanies.countOfEmployers} </span>
                                    </h3>
                                    {/*<div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">*/}
                                    {/*    <form>*/}
                                    {/*        <IndustryBox/>*/}
                                    {/*        <CountryBoxEmployer/>*/}
                                    {/*        <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />*/}
                                    {/*        <button className="btn btn-default btn-find font-sm">Search</button>*/}
                                    {/*    </form>*/}
                                    {/*</div>*/}
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
                                        <EmployerList/>
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
