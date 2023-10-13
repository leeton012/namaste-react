import { useState, useEffect } from 'react';
import Shimmer from './ShimmerUI';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      console.log('upto here');
      const response = await fetch(MENU_API + resId);

      const json = await response.json();
      console.log(json);
      setResInfo(json.data.cards);
    } catch (e) {
      console.log(e);
    }
  };

  if (!resInfo.length) return <Shimmer />;

  //destructure the data from api
  const { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;

  //destructure data from api for restaurant items
  const { itemCards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { cards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log('cards -->  ', cards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      <ul>
        {}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} ----- {' Rs '}{' '}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{' '}
          </li>
        ))}
        {/* <li>{}</li>
        <li>Burger</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
