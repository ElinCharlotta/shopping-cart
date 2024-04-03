import './CartItem.css';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../reducers/cartReducer';

function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item));
  }
  const handleDecreaseQuantity = () => 
  { dispatch(decreaseQuantity(item)); }

  return (
    <article className='cart-item'>
      <img src={item.thumbnail} alt={item.title} className='cart-item-image' />

      <h3 className='cart-item-title'>
    {item.title}
        <span className='dots'></span>
      </h3>
      <p className='cart-item-desc'>{item.price} kr</p>
      <aside className='item-quantity'>
        <img src={arrowUp} alt='increase' onClick={handleIncreaseQuantity} />{' '}
        { /** Här ska du lägga till en onclick på img-elementet för att kunna öka kvantitet. När man klickar på knappen ska du göra en dispatch(increaseQuantity()) till din redux store.  */}
        <p className='quantity'>{item.quantity}</p>{' '}
        {/** Här vill du ersätta så att du läser in nuvarande "quantity" istället */}
        <img src={arrowDown} alt='decrease' onClick={handleDecreaseQuantity} />{' '}
        {/** Här ska du lägga till en onclick på img-elementet för att kunna minska kvantitet. När man klickar på knappen ska du göra en dispatch(decreaseQuantity()) till din redux store.  */}
      
      </aside>
    </article>
  );
}

export default CartItem;
