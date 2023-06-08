import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CSS/slider1.css";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slide1() {
  const [swiperRef, setSwiperRef] = useState(null);



  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img

            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kfcprodnecmsimage.azureedge.net/cmsimages/kfc/imagestemp/desktop/9PcFiestbucket_EG14_En_1104.jpg"
            alt="Not Found"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
