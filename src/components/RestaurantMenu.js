import { useState, useEffect } from 'react';
import Shimmer from './ShimmerUI';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  //for taking the res id from browser url
  const { resId } = useParams();

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

  // for loading shimmer ui first untill rendering is done
  if (!resInfo.length) return <Shimmer />;

  //destructure the data from api
  const { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;

  //destructure data from api for restaurant items
  const { itemCards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { cards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log('cards -->  ', cards[2].card.card.itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} ----- {' Rs '}{' '}
          {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{' '}
        </li>
      ))}

      {/* {cards.map((item) => (
        <>
          <h3>
            {item.card.card.title || item.card.card.type || item.card.card.name}
            <ul>
              {item.card.card.itemCards.map((el) => (
                <li key={el.card.info.id}>
                  {el.card.info.name} ----- {' Rs '}{' '}
                  {el.card.info.price / 100 || el.card.info.defaultPrice / 100}{' '}
                </li>
              ))}
            </ul>
          </h3>
        </>
      ))} */}
    </div>
  );
};

export default RestaurantMenu;
