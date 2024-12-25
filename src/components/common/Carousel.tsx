import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useState, useEffect, useMemo } from 'react';
import Cards from './Cards';

const Carousel = ({props}: any) => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        let resizeTimer: any;

        const updateSlidesPerView = () => {
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const swiperConfig = useMemo(() => ({
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: slidesPerView,
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        pagination: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        initialSlide: 3,
        modules: [EffectCoverflow, Pagination, Autoplay, EffectFade],
        className: "mySwiper"
    }), [slidesPerView, props?.length]);

    return (
         <Swiper {...swiperConfig}>
            {props?.map((item: any, index: any) => (
                <SwiperSlide key={index}>
                    <Cards prop={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel