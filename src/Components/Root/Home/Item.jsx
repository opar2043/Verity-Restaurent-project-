import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../../assets/assets/home/slide1.jpg'
import img2 from '../../../assets/assets/home/slide2.jpg'
import img3 from '../../../assets/assets/home/slide3.jpg'
import img4 from '../../../assets/assets/home/slide4.jpg'
import img5 from '../../../assets/assets/home/slide5.jpg'
import Title from '../../Shared/Title';
import { NavLink } from 'react-router-dom';

const Item = () => {
  return (
    <div className='my-10 py-10'>

         <Title head={'Our item'} sub={' cheack Our item'}></Title>

        <div className='mt-7'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>

      </Swiper>
        </div>

        <div className='mx-auto text-center my-5'>

         <NavLink to={'menu'}>
             <button className='btn btn-outline bg-slate-200 border-0 border-b-4 border-black'>Check Our Menu Page</button>
         </NavLink>
        </div>
    </div>
  )
}

export default Item