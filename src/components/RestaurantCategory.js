// import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data, showItems, setShowItemIndex }) => {
  const handleClick = (e) => {
    setShowItemIndex(e.target.value);
  };

  return (
    <div>
      {/** Header  */}
      <div className='w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-2  '>
        <div className='justify-between flex cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
