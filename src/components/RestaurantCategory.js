import ItemList from '../components/ItemList';

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/** Header  */}
      <div className='w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-2  '>
        <div className='justify-between flex cursor-pointer'>
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
