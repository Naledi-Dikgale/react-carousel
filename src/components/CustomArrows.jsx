
import React from 'react';
import { TbArrowBigRightLines, TbArrowBigLeftLines } from 'react-icons/tb';

const NextArrow = ({ className, style, onClick, theme }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      <TbArrowBigRightLines fill={theme === 'dark' ? '#dbeafe' : '#93c5fd'} size="2em" />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick, theme }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <TbArrowBigLeftLines fill={theme === 'dark' ? '#dbeafe' : '#93c5fd'} size="2em" />
    </div>
  );
};

export { NextArrow, PrevArrow };
