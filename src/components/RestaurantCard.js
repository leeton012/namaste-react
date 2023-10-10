import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  // destructuring the props object
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { deliveryTime } = sla;

  return (
    <div
      className='res-card'
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        className='res-logo'
        alt='res-logo'
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
