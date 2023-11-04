import { LOGO_URL } from '../utils/constant';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();

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
          <li className='px-4'>
            <Link>Cart</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
