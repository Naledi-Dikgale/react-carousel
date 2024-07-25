
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import ServiceSlider from './ServiceSlider';

const Services = () => {
  const { theme } = useContext(ThemeContext);

  const services = [
    { img: "/logo.png", title: "Tech-Awesome" },
    { img: "/service1.png", title: "Tech-Awesome" },
    { img: "/service2.png", title: "Tech-Awesome" },
    { img: "/service3.png", title: "Tech-Awesome" },
    { img: "/service4.png", title: "Tech-Awesome" },
    { img: "/service5.png", title: "Tech-Awesome" },
    { img: "logo.png", title: "Tech-Awesome" },
    { img: "/logo.png", title: "Tech-Awesome" },
  ];

  return (
    <div id="services" className={`min-h-screen flex flex-col md:px-32 px-5 pt-20 ${theme === 'dark' ? 'text-secondary-dark' : 'text-secondary'}`}>
      <h2 className={`text-3xl font-agbalumo font-semibold ${theme === 'dark' ? 'text-transparent bg-gradient-to-r from-cyan-400 via-violet-200 to-teal-100 bg-clip-text' : 'text-transparent bg-gradient-to-r from-yellow-200 via-zinc-400 to-yellow-800 bg-clip-text'}`}>My Carousel:</h2>
      <ServiceSlider services={services} />
      <hr className={`w-full h-1 my-6 ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary-light'}`} />
    </div>
  );
};

export default Services;
