import React, {useEffect, useState} from "react";
import Link from "next/link";

const CategoryTab = () => {

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
    if (!offers) return <p>No profile data</p>

    return (
        <>
            <div className="tab-content mt-50" id="myTabContent-1">
                <div className={`tab-pane fade ${"show active"}`}>
                    <div className="row">
                        {offers.map((offer) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-grid-2 grid-bd-16 hover-up">
                                    <div className="card-block-info pt-25">
                                        <h6>
                                            <Link legacyBehavior href="/job-details">
                                                <a>{offer.positionTitle}</a>
                                            </Link>
                                        </h6>
                                        <div className="mt-5">
                                            <span className="card-briefcase mr-15">{offer.employmentModel}</span>
                                            <span className="card-time">3 mins ago</span>
                                        </div>
                                        <div className="mt-20 border-bottom pb-20">
                                            {offer.technologyStack.map((tech) => (
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a className="btn btn-grey-small bg-14 mb-5 mr-5">{tech}</a>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="card-2-bottom mt-20">
                                            <div className="row">
                                                <div className="col-lg-7 col-md-7">
                                                    <div className="d-flex">
                                                        <img className="img-rounded"
                                                             src="assets/imgs/brands/brand-1.png" alt="jobBox"/>
                                                        <div className="info-right-img">
                                                            <h6 className="color-brand-1 lh-14">{offer.employer.name}</h6>
                                                            <span
                                                                className="card-location font-xxs pl-15 color-text-paragraph-2">{offer.city}, {offer.country}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 text-end">
                                                    <span className="card-text-price">$200</span>
                                                    <span className="text-muted">/Hour</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center"><a className="btn btn-grey" href="/jobs-list">Browse more jobs</a></div>
            </div>
        </>
    );
};

export default CategoryTab;
