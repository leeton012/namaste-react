import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './ShimmerUI';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RESTAURANT_API } from '../utils/constant';
// import resList from '../utils/mockData'; --> // mockData.js file rendered for sample

// not using keys is the bad practices
// using index a key in map() is not recomended in react
// using unique id as keys are the best practices
const Body = () => {
  //local state Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // local variable useState for render all data after search
  const [searchFilteredRestaurant, setSearchFilteredRestaurant] = useState([]);

  //local state variable for search and get text input
  const [searchText, setSearchText] = useState('');

  //call the withPromotedLabel component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //whenever state variable update, react triggers the reconciliation cycle(rerender the component)
  console.log('🚀 ~ file: Body.js:15 ~ Body ~ searchText:', searchText);

  // useEffect for calling Api
  useEffect(() => {
    console.log('useEffect called from body');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(
        // optional chaining
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setSearchFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline......</h1>;

  // show loading untill api returns data and render the whole
  // conditional rendering
  // if (listOfRestaurant.length === 0) {
  //   // return <h1>Loading.....</h1>;
  //   return <Shimmer />;
  // }

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter flex'>
        <div className='search p-4 m-4'>
          <input
            type='text'
            className='border border-solid border-black rounded-sm'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className='px-2 py-0.5 bg-green-100 m-4 rounded-sm'
            // search the logic for the filter restaurants
            onClick={async () => {
              const filteredRestaurants = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurants);
              setSearchFilteredRestaurant(filteredRestaurants);
            }}>
            Search
          </button>
        </div>
        <div className='search p-4 m-4 items-center'>
          <button
            className='px-2 py-0.5 bg-gray-100 m-4 rounded-sm'
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
              setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {searchFilteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            {/** if restaurant.data.promoted value is true then we will pass promoted label to that restaurant */}

            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
