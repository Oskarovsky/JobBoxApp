import React, {useEffect, useState} from "react";
import Link from "next/link";

const CategoryTab3 = () => {
    const [active, setActive] = useState(1);

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://www.localhost:8080/api/offer')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <>
            <div className="tab-content mt-50" id="myTabContent-1">
                <div className={`tab-pane fade ${active == 1 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                                {/*{data[3].title}*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 2 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher remote</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 3 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher remote</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                           {/*data[4].title*/}
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 4 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher remote</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>
                                               {/*data[4].title*/}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 5 && "show active"}`}>
                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher remote</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
{data[4].title}
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
{data[4].title}
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 6 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher remote</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy </a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
{data[4].title}
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Swift</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">JavaScript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$350</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
{data[4].title}
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$100</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$50</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$120</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$150</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <span className="card-text-price">$160</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UX Designer &amp; Researcher</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-10.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase mr-15">Remote</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-20 border-bottom pb-20">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Illustrator</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Sketch</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small bg-14 mb-5 mr-5">Lunacy</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="d-flex">
                                                    <img className="img-rounded" src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-14">Linkedin</h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">New York, US</span>
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
                    </div>
                </div>
                <div className="text-center"><a className="btn btn-grey" href="#">Browse more jobs</a></div>
            </div>
        </>
    );
};

export default CategoryTab3;
