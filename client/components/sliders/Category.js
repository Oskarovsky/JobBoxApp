import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
SwiperCore.use([Navigation]);

import "swiper/css/grid";
import { Grid } from "swiper";

const CategorySlider = () => {

    const [categoryNameAndCount, setCategoryNameAndCount] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/filterOffers/categoryNameAndCount')
            .then((res) => res.json())
            .then((categoryNameAndCount) => {
                setCategoryNameAndCount(categoryNameAndCount);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching category data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!categoryNameAndCount) return <p>No profile data</p>

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
                >
                    {categoryNameAndCount.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link href="/jobs-list/[categoryName]" as={`/jobs-list/${encodeURIComponent(item.categoryName)}`}>
                                    <div className="item-logo">
                                        <div className="text-info-right">
                                            <h4>{item.categoryName}</h4>
                                            <p className="font-xs">{item.count}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default CategorySlider;
