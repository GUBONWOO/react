import React from 'react';

export default function PriceCart({ text, price }) {
  return (
    <div className='bg-gray-50 px-8 mx-2 rounded-2xl text-center text-lg md:text-xl'>
      <p className=''>{text}</p>
      <p className='font-bold text-brand text-xl md:text-2xl'>{price}</p>
    </div>
  );
}
