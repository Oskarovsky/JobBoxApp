import Link from "next/link";
import Layout from "../components/Layout/Layout";
export default function BlogDetails() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div>
                        <img src="assets/imgs/page/blog/img-single.png" />
                    </div>
                </section>
                <section className="section-box">
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <div className="box-white">
                                <div className="max-width-single">
                                    <h2 className="mb-30 mt-20 text-center">11 Tips to Help You Get New Clients Through Cold Calling</h2>
                                    <div className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
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
                                        <div className="font-lg mb-30">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus, quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.</p>
                                        </div>
                                    </div>
                                    <figure>
                                        <img src="assets/imgs/page/blog/img-content.png" />
                                    </figure>
                                    <div className="max-width-single">
                                        <div className="content-single">
                                            <p />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus, quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.</p>
                                            <h4>In ut odio libero</h4>
                                            <ul>
                                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                                <li>Excellent interpersonal skills </li>
                                                <li>Aware of trends in mobile, communications, and collaboration</li>
                                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                                <li>History of impacting shipping products with your work</li>
                                                <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                            </ul>
                                            <p />
                                            <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio.</p>
                                        </div>
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
