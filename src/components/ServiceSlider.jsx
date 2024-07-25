import React, { useRef, useContext } from 'react';
import Slider from 'react-slick';
import { ThemeContext } from '../ThemeContext';
import ServiceCard from '../Cards/ServiceCard';
import { NextArrow, PrevArrow } from './CustomArrows';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ServiceSlider = ({ services }) => {
  const { theme } = useContext(ThemeContext);
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow theme={theme} />,
    prevArrow: <PrevArrow theme={theme} />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (!services || services.length === 0) return null;

  return (
    <div className="pt-8 pb-8 w-full flex flex-col items-center">
      <div className="slider-container border-4 border-pink-500" style={{ width: '100%', height: '400px' }}>
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <ServiceCard
                img={service.img}
                title={service.title}
                theme={theme}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
