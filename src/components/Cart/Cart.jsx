import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);

function calculateTotalQuantity() {
  //Räkna ut total summan av alla produkter
  let totaltQuantity = 0
  cart.forEach(item => {
    totaltQuantity+= item.quantity; // Lägger till kvantiteten för varje produkt. 
});
return totaltQuantity;
}

  return (
    <section className='cart'>
      <Link to={'/cart'}>Cart</Link>
      <p className='cart__amount'>{calculateTotalQuantity()}</p>
 
    </section>
  );
}

export default Cart;
    //*loopa genom array . plusa på quantity. *//