'use client'
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const GallerySlider = () => {
  return (
    <div>
        <Swiper
            style={{width: 'calc(100% + 14%)', marginLeft: '-9%'}}
            modules={[Navigation]}
            navigation={{
                prevEl: '#gallerySliderPrev',
                nextEl:'#gallerySliderNext'
            }}
            slidesPerView={4}
            loop={true}
            spaceBetween={20}
        >
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery1.png' alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery2.png' alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery3.png' alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery1.png' alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery2.png' alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={400} height={400} src='/assets/gallery3.png' alt=''/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default GallerySlider