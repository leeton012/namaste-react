import { useEffect, useState } from 'react';
import { MENU_API } from './constant';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);

    const json = await response.json();
    setResInfo(json.data.cards);
  };
  console.log('🚀 ~ file: useRestaurantMenu.js:7 ~ useRestaurantMenu ~ resInfo:', resInfo);

  return resInfo;
};

export default useRestaurantMenu;
