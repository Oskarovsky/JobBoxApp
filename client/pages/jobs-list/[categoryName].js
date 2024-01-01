// pages/jobs-list/[categoryName].js
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import RowJobOfferList from "../../components/elements/RowJobOfferList";

const CategoryJobsList = ({ offers, categoryName }) => {
    if (!offers) return <p>Could not fetch offers</p>;

    return (
        <Layout>
            <div>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                <div className="content-page">
                                    <h2>{`Jobs in ${categoryName}`}</h2>
                                    <RowJobOfferList offers={offers} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const { categoryName } = params;

    try {
        const res = await fetch(`http://localhost:8080/api/filterOffers/jobsListByCategory/${encodeURIComponent(categoryName)}`);
        const offers = await res.json();

        return {
            props: { offers, categoryName },
        };
    } catch (error) {
        console.error('Error fetching offers:', error);
        return {
            props: { offers: null, categoryName },
        };
    }
}

export default CategoryJobsList;
