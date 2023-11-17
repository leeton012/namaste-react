import { useState, useEffect } from 'react';
import Shimmer from './ShimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState([]);
  //for taking the res id from browser url
  const { resId } = useParams();

  //for colapse all the othert accordian once tap n one accordian
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  // for loading shimmer ui first untill rendering is done
  if (resInfo === null) return <Shimmer />;

  //destructure the data from api
  const { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;

  //destructure data from api for restaurant items
  const { itemCards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { cards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const categories = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (el) =>
      el.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  categories.isCollapsed = true;

  return (
    <div className='text-center'>
      <h1 className='font-bold my-10 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {categories.map((el, index) => (
        <RestaurantCategory
          key={index}
          data={el?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowItemIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
