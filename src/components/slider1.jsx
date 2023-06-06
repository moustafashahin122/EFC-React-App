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

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
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
