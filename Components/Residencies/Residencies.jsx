import "./Residencies.css";
import data from "../../src/utils/slider.json";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../../settings";
import { useSwiper } from "swiper/react";

// component
function SliderButtons() {
  const swiper = useSwiper();
  return (
    <>
      <div className="card-buttons d-flex gap-3">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </>
  );
}

export default function Residencies() {
  return (
    <>
      <div className="container py-5 overflow-hidden position-relative">
        <div className="Res-head mb-5">
          <h3 className="orangeText">Best Choices</h3>
          <h1 className="primaryText">Popular Residencies</h1>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="Res-card d-flex flex-column gap-2 p-2 ">
                <img src={card.image} alt="" />
                <span className="secondaryText">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <h2 className="primaryText">{card.name}</h2>
                <p className="secondaryText">{card.detail}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
