import { LOGO_URL } from '../utils/constant';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  //if no dependancy array ==> then useEffect render everytym the component render
  // if dependency array is empty == [] ==> useEffect call in initial render of the component
  // if dependency array is present with value ==> useEffect will call everytym once the value will update
  useEffect(() => {
    console.log('useEffect Called');
  }, []);

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
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
