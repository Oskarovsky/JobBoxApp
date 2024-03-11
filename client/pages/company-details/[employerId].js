import React, {useState, useEffect} from "react";
import Layout from "../../components/Layout/Layout";
import JobsFromTheSameEmployer from "../../components/elements/JobsFromTheSameEmployer";
import {useRouter} from "next/router";

const CompanyDetails = () => {
    const router = useRouter();

    const [employer, setEmployer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (router.query.employerId) {
            fetch(`http://localhost:8080/api/filterEmployer/byId/${router.query.employerId}`)
                .then((response) => response.json())
                .then((data) => {
                    setEmployer(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching employer data:", error);
                    setIsLoading(false);
                });
        }
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!employer) {
        return <p>Employer not found.</p>;
    }
    return (
        <Layout>
            <div>
                <div className="container">
                    <div className="banner-hero banner-image-single">
                        <img src={`data:image/png;base64, ${employer.backgroundImage}`} alt="jobBox"/>
                    </div>
                    <div className="box-company-profile">
                        <div className="image">
                            <img src={`data:image/png;base64, ${employer.miniatureImage}`} alt="jobBox"/>
                        </div>
                        <h2>{employer.employerName}</h2>
                    </div>
                    <div className="border-bottom pt-10 pb-10"/>
                </div>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <h4>Welcome to {employer.employerName}</h4>
                                        <p>{employer.description}</p>
                                    </div>
                                </div>
                                <JobsFromTheSameEmployer employerId={employer.id}/>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <div className="sidebar-heading">
                                        <div className="avatar-sidebar">
                                            <div className="sidebar-info pl-0">
                                                <span className="sidebar-company">{employer.employerName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-briefcase"/>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Industry</span>
                                                    <strong className="small-heading">{employer.industry}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-marker"/>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Headquarter</span>
                                                    <strong
                                                        className="small-heading">{employer.city}, {employer.country}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-checkbox"/>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Jobs Open</span>
                                                    <strong
                                                        className="small-heading">{employer.numberOfJobs}</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-bookmark"/>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Website</span>
                                                    <strong
                                                        className="small-heading">{employer.urlToWebsite}</strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default CompanyDetails;
