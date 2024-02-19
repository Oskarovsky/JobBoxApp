import Link from "next/link";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";

export default function BlogGrid() {
    const [blogPostFrontEnd, setBlogPostsFrontEnd] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/blog/allBlogPosts');
                const data = await response.json();
                setBlogPostsFrontEnd(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

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
                                        {/*<p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row mt-30">
                                    {blogPostFrontEnd.map((blogPost) => (
                                        <div key={blogPost.id} className="col-lg-4 mb-30">
                                            <div className="card-grid-3 hover-up">
                                                <div className="text-center card-grid-3-image">
                                                    <Link href={`/${blogPost.id}`}>
                                                        <figure>
                                                            <img alt="Blog Post" src={blogPost.urlToMiniature}/>
                                                        </figure>
                                                    </Link>
                                                </div>
                                                <div className="card-block-info">
                                                    <h5>
                                                        <Link href={`/${blogPost.id}`}>
                                                            {blogPost.headline}
                                                        </Link>
                                                    </h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">{blogPost.blogText.shortText}</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-6">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

