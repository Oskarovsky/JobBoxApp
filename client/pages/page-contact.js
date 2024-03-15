/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function Contact() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover bg-img-about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="mb-10">Get in touch!</h2>
                                        {/*<p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>*/}
                                    </div>
                                    {/*<div className="col-lg-6 text-lg-end">*/}
                                    {/*    <ul className="breadcrumbs mt-40">*/}
                                    {/*        <li>*/}
                                    {/*            <a className="home-icon" href="#">*/}
                                    {/*                Home*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>Blog</li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mb-40">
                                    <h2 className="mt-5 mb-10">About Us</h2>
                                    <div>
                                        <p className="font-md color-text-paragraph-2">
                                            At FindJobIn.tech, we're committed to bridging the gap between talented professionals like yourself and the thrilling opportunities within the rapidly evolving realm of Information Technology in the Nordics. Whether you're an experienced developer, a cybersecurity specialist, a data analyst, or embarking on your tech journey, we're here to guide you through the ever-changing landscape of IT careers.
                                        </p>
                                        <br/>
                                        <p className="font-md color-text-paragraph-2">
                                            Moreover, if you're an employer or a company interested in publishing job listings on our platform to reach top-tier talent in the Nordics, we invite you to get in touch with our team. By partnering with FindJobIn.tech, you'll gain access to a diverse pool of skilled professionals and innovative minds ready to contribute to your organization's success.
                                        </p>
                                        <br/>
                                        <p className="font-md color-text-paragraph-2"> Contact us today at <a href="mailto:contact@findjobin.tech">contact@findjobin.tech</a> to explore our recruitment solutions tailored to your specific needs and requirements. Let's collaborate to bring the best opportunities to the forefront of the IT job market.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <img src="assets/imgs/page/contact/img.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
