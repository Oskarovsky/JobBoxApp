import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function BlogGrid() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h2 className="mb-10">Blog</h2>
                                        <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row mt-30">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-4 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img alt="jobBox" src="assets/imgs/page/blog/img1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>39 Strengths and Weaknesses To Discuss in a Job Interview</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-6">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img alt="jobBox" src="assets/imgs/page/blog/img1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>39 Strengths and Weaknesses To Discuss in a Job Interview</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-6">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img alt="jobBox" src="assets/imgs/page/blog/img1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>39 Strengths and Weaknesses To Discuss in a Job Interview</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-6">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
