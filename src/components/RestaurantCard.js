import { CDN_URL } from '../utils/constant';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  // destructuring the props object
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { deliveryTime } = sla;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid='resCard' className='m-4 p-4 w-[170] rounded-lg bg-gray-100 hover:bg-gray-200'>
      {/* <div className='items-center'> */}
      <img
        className='rounded-lg items-center p-0'
        alt='res-logo'
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      {/* </div> */}
      <h3 className='font-bold py-2'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};
// Higher Order Component
// input --> RestaurantCard --> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  //it will retunr a component
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
