import React from 'react';

const ServiceCard = ({ img, title, theme }) => {
  return (
    <div className={`flex flex-col border-4 border-green-500 w-full h-full items-center justify-center overflow-hidden ${theme === 'dark' ? ' text-white' : ' text-black'}`}>
      <img className="object-cover w-full border-4 border-red-500" src={img} alt="Service" />
    </div>
  );
};

export default ServiceCard;
