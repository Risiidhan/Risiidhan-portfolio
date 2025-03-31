import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useState, useEffect, useMemo } from 'react';
import Cards from './Cards';


const Carousel = ({ data, isLoading }: any) => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        let resizeTimer: any;

        const updateSlidesPerView = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 1300)
                    setSlidesPerView(3);
                else if (window.innerWidth >= 768 && window.innerWidth < 1300)
                    setSlidesPerView(2);
                else
                    setSlidesPerView(1);
            }, 200);
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
        modules: [EffectCoverflow, Pagination, EffectFade],
        className: "mySwiper"
    }), [slidesPerView]);


    return (
        <Swiper {...swiperConfig}>
            {(data || !isLoading) ? data?.map((item: any, index: any) => (
                <SwiperSlide className='!flex w-full justify-center' key={index}>
                    <Cards prop={item} />
                </SwiperSlide>
            )) : (
                new Array(10).fill(null).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Cards prop={null} />
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    )
}

export default Carousel