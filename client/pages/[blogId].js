import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";


const BlogId = () => {
    const router = useRouter();

    const [blogPostFrontEnd, setBlogPostFrontEnd] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (router.query.blogId) {
            fetch(`http://localhost:8080/api/blog/byId/${router.query.blogId}`)
                .then((response) => response.json())
                .then((data) => {
                    setBlogPostFrontEnd(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching blog data:", error);
                    setIsLoading(false);
                });
        }
    }, []);


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!blogPostFrontEnd) {
        return <p>Blog not found.</p>;
    }

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div>
                        <img src={blogPostFrontEnd.urlToImage}/>
                    </div>
                </section>
                <section className="section-box">
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <div className="box-white">
                                <div className="max-width-single">
                                    <h2 className="mb-30 mt-20 text-center">{blogPostFrontEnd.headline}</h2>
                                    <div
                                        className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="post-loop-grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="single-body">
                                    <div className="max-width-single">
                                        <div className="max-width-single">
                                            {blogPostFrontEnd.blogText.shortText}
                                        </div>
                                        <br/>
                                        <h2>{blogPostFrontEnd.blogText.h2}</h2>
                                        <ul>
                                            <li>
                                                {blogPostFrontEnd.blogText.mainText}
                                            </li>
                                        </ul>
                                        <br/>
                                        <h2>{blogPostFrontEnd.blogText.h3}</h2>
                                        <ul>
                                            <li>
                                                {blogPostFrontEnd.blogText.endText}
                                            </li>
                                        </ul>
                                        <ul>
                                            <br></br>
                                            <li>{blogPostFrontEnd.author}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default BlogId;
