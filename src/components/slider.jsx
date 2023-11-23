import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div className="section">
      <div className="section-content">
        <div className="relative w-full select-none overflow-hidden rounded-xl">
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{ dynamicBullets: true }}
            slidesPerView={1}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center bg-slate-200">
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center bg-slate-200">
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center bg-slate-200">
                Slide 3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-96 items-center justify-center bg-slate-200">
                Slide 4
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
