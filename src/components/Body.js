import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './ShimmerUI';
import { Link } from 'react-router-dom';
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

  //whenever state variable update, react triggers the reconciliation cycle(rerender the component)
  console.log('🚀 ~ file: Body.js:15 ~ Body ~ searchText:', searchText);

  // useEffect for calling Api
  useEffect(() => {
    console.log('useEffect called from body');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

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
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
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
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
            setListOfRestaurant(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {searchFilteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
