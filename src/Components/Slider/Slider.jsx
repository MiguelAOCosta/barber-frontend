import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Slide, SlideContent, SlideP, SlideH1 } from "./SliderStyles";
import { ImgSlider } from "./SliderData";
import { SlideBtn } from "../../GlobalStyles";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
    >
      {ImgSlider.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide style={{ backgroundImage: `url(${item.img})` }}>
              <SlideContent>
                <SlideP>{item.title1}</SlideP>
                <SlideH1>{item.title2}</SlideH1>
                <SlideBtn>Fazer Marcação</SlideBtn>
              </SlideContent>
            </Slide>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
