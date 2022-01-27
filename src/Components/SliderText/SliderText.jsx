import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  SliderTextContainer,
  SliderContent,
  SliderContentText,
  SliderAuthor,
} from "./SliderTextStyles";
import { TextSlider } from "./SliderTextData";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

const SliderText = () => {
  return (
    <SliderTextContainer>
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
        {TextSlider.map((text, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderContent>
                <SliderContentText>{text.title1}</SliderContentText>
                <SliderAuthor>{text.title2}</SliderAuthor>
              </SliderContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderTextContainer>
  );
};

export default SliderText;
