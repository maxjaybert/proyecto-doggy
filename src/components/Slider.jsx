import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function SliderTop() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (


        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}

            onAutoplayTimeLeft={onAutoplayTimeLeft}

            className="slider">
            <SwiperSlide><img src="./img/perro3.jpg" className="slider_img" /></SwiperSlide>
            <SwiperSlide><img src="./img/perro6.jpg" className="slider_img" /></SwiperSlide>
            <SwiperSlide><img src="./img/perro7.jpg" className="slider_img" /></SwiperSlide>
            <SwiperSlide><img src="./img/perro8.jpg" className="slider_img" /></SwiperSlide>
            {/* <SwiperSlide><img src="./img/perro9.jpg" className="slider_img" /></SwiperSlide> */}

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 0 0" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>

        </Swiper>
    );
};

export default SliderTop