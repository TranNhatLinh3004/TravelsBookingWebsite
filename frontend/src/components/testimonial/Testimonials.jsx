import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials(props) {
  return (
    <section className="testimonial container section" id="testimonial">
      <Swiper
        className="testimonial__container"
        loop={true}
        // dots={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
