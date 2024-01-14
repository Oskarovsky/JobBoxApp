/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import SimilarJobs from "../../components/elements/SimilarJobs";
import EmployerInfoForJobDetails from "../../components/elements/EmployerInfoForJobDetails";

export default function JobDetails({jobOfferFrontEndEntity}) {
    if (!jobOfferFrontEndEntity) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src="/assets/imgs/page/job-single/thumb.png" alt="jobBox"/>
                            </div>
                            <div className="row mt-10">
                                <div className="col-lg-8 col-md-12">
                                    <h3>{jobOfferFrontEndEntity.positionTitle}</h3>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                                    <Link href={`/${jobOfferFrontEndEntity.urlToApply}`} legacyBehavior>
                                        <a className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                            Apply now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10"/>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="job-overview">
                                        <h5 className="border-bottom pb-15 mb-30">Employment Information</h5>
                                        <div className="row">
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/industry.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span
                                                        className="text-description industry-icon mb-10">Industry</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.employerIndustry}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/job-level.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span
                                                        className="text-description joblevel-icon mb-10">Employment Model</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.employmentModel}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/salary.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description salary-icon mb-10">Job Category</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.categoryToBrowse}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/experience.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span
                                                        className="text-description experience-icon mb-10">Experience</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.experienceLevel}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/job-type.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span
                                                        className="text-description jobtype-icon mb-10">Employment type</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.employmentType}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/updated.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">Posted On</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.postedOn}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/updated.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">Technology Stack</span>
                                                    <strong className="small-heading">
                                                        {jobOfferFrontEndEntity.technologyStack.join(', ')}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img src="/assets/imgs/page/job-single/location.svg" alt="jobBox"/>
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description mb-10">Location</span>
                                                    <strong className="small-heading">{jobOfferFrontEndEntity.offerCity}, {jobOfferFrontEndEntity.offerCountry}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-single">
                                        <h4>Job Description</h4>
                                        {jobOfferFrontEndEntity.jobOfferDescription.description.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                        <h4>Responsibilities</h4>
                                        <ul>
                                            {jobOfferFrontEndEntity.jobOfferDescription.responsibilities.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))}
                                        </ul>
                                        <h4>Preferred Experience</h4>
                                        <ul>
                                            {jobOfferFrontEndEntity.jobOfferDescription.preferredExperience.map((experience, index) => (
                                                <li key={index}>{experience}</li>
                                            ))}
                                        </ul>
                                        <h4>About {jobOfferFrontEndEntity.employer.name}</h4>
                                        <ul>
                                            <p>{jobOfferFrontEndEntity.employer.description}</p>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    {/* Użycie komponentu EmployerInfo z przekazaniem employerId */}
                                    <EmployerInfoForJobDetails employerId={jobOfferFrontEndEntity.employer.id} />
                                    <SimilarJobs categoryName={jobOfferFrontEndEntity.categoryToBrowse} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    // Ta implementacja zakłada, że nie generujesz ścieżek w czasie budowy.
    // Strony będą generowane na żądanie przy pierwszym dostępie do nich.
    return {
        paths: [], // Pusta tablica oznacza, że nie ma pre-renderowanych stron w czasie budowy
        fallback: 'blocking', // 'blocking' oznacza, że nowe ścieżki będą generowane na żądanie na serwerze
    };
}

export async function getStaticProps({ params }) {
    const jobOfferFrontEndEntity = await fetchJobData(params.jobId);

    return {
        props: {
            jobOfferFrontEndEntity,
        },
        revalidate: 86400, // Strona będzie odświeżana co 24 godziny
    };
}

async function fetchJobData(jobId) {
    const url = `http://localhost:8080/api/filterOffers/${jobId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jobData = await response.json();
        return jobData;
    } catch (error) {
        console.error("Could not fetch job data:", error);
        return null; // Zwróć null, aby obsłużyć błąd na poziomie komponentu
    }
}