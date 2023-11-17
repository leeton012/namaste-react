import { LOGO_URL } from '../utils/constant';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing the store using selector to update into the header in cart
  const cartItems = useSelector((store) => store.cart.items);
  console.log('🚀 ~ file: Header.js:15 ~ Header ~ cartItems:', cartItems);

  //if no dependancy array ==> then useEffect render everytym the component render
  // if dependency array is empty == [] ==> useEffect call in initial render of the component
  // if dependency array is present with value ==> useEffect will call everytym once the value will update
  useEffect(() => {
    console.log('useEffect Called');
  }, []);

  return (
    <div className='h-20 flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 '>
      <div className='logo-container'>
        <img className='w-30 h-20 p-0' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? '✅' : '⛔'} </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li className='px-4 font-bold text-xl'>
            <Link to='/cart '>Cart({cartItems.length})</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
            }}>
            {btnNameReact}
          </button>
          <p className='font-bold px-2'>{loggedInUser}</p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
