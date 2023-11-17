import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  //subscribe to get the cart items here
  // always subscribe to the right portion of the store, It will efficiant the code
  const cartItems = useSelector((store) => store.cart.items);
  console.log('🚀 ~ file: Cart.js:7 ~ Cart ~ cartItems:', cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>
          Clear Cart
        </button>
        {!cartItems.length && (
          <>
            <h1>Your Cart is empty. Please do more shopping....</h1>
            <button className='w-5/12 bg-yellow-300 rounded-lg p-2 m-2'>
              <Link to='/'>Continue Shopping</Link>
            </button>
          </>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
