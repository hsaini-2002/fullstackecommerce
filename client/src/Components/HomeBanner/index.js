import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


const HomeBanner = ()=>{

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
            <Swiper 
                slidesPerView={1}
                spaceBetween={15}
                navigation={true}
                loop={false}
                autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" className="w-100"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" className="w-100"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" className="w-100"/>
                </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        </div>
    )
}
export default HomeBanner;