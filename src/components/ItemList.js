// import { CDN_URL } from '../utils/constant';

import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    //dispatch an action here ......................
    dispatch(addItem(items));
  };
  try {
    return (
      <div>
        {items.map((el) => (
          <div
            key={el.card.info.id}
            data-testid='foodItems'
            className='p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between'>
            <div className='w-10/12'>
              <div className='py-2'>
                <span>{el.card.info.name}</span>
                <p>
                  ₹{el.card.info.price ? el.card.info.price / 100 : el.card.info.defaultPrice / 100}
                </p>
              </div>
              <p className='text-xs'>{el.card.info.description}</p>
            </div>
            <div className='w-2/12'>
              <div className='absolute'>
                <button
                  className='p-1 mx-20 bg-white shadow-lg m-auto rounded-lg'
                  onClick={() => handleAddItem(el)}>
                  Add +
                </button>
              </div>
              <img
                src={
                  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                  el.card.info.imageId
                }
                className='w-full'
              />
            </div>
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.log('🚀 ~ file: ItemList.js:23 ~ ItemList ~ err:', err);
  }
};

export default ItemList;
