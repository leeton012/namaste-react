import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import resList from '../utils/mockData';

// not using keys is the bad practices
// using index a key in map() is not recomended in react
// using unique id as keys are the best practices
const Body = () => {
  //local state Variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className='body'>
      <div className='fiter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
