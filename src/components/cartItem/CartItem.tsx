import {X} from 'lucide-react';
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../rtk/store';
import { addToCart, clearItemsFromCart, decreaseQuantity, removeItemFromCart } from '../../rtk/slices/cartReducer';
import { Link } from 'react-router-dom';

function CartItem() {
  const cart = useSelector((state:RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc: number, product) => {
    acc += product.newPrice * product.quantity;
    return acc;
  }, 0);

  return (
    <section className="bg-[#d1d5db] py-12">
      <div className="container">
          {cart.length > 0 ? (
            <div className="flex gap-5">
            <div className="right w-[75%] bg-white p-[15px] rounded-[10px]">
              <div className="cart-head flex justify-between items-center border-b-[1px] border-solid border-[#000] py-1">
                <h2 className='font-bold text-[20px]'>Shopping Cart</h2>
                <span className='font-medium text-[18px]'>Subtotal</span>
              </div>
              <div className="grid grid-cols-1 p-[10px_0]">
                {cart.map(product => (
                  <div className="cart-box flex gap-5 p-[10px] mb-[15px] bg-[#f6f6f6] rounded-[10px]" key={product.id}>
                    <div className="cart-img">
                      <img src={product.imgUrl} alt={product.title} />
                    </div>
                    <div className="cart-body">
                      <div className="flex justify-between">
                        <div className="cart-body-head mb-[10px]">
                          <h2 className="cart-title text-[18px] font-bold">{product.title}</h2>
                          <p className="cart-desc text-[#777] w-[65%]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi,
                            ex iste doloribus magnam.
                          </p>
                          <div className="cart-price">unit price : 
                            <span className='font-bold'>{` $${product.newPrice}`}</span>
                          </div>
                        </div>
                        <div className="font-bold text-[18px]">
                          {`$${product.newPrice * product.quantity}`}
                        </div>
                      </div>
                      <div className="cart-body-btns flex items-center gap-5 w-max">
                        <div className="p-2 rounded-[10px] border-[1px] border-solid border-[#000] space-x-3">
                          <button className='px-[3px] text-[#777] hover:bg-[#eee] rounded-[6px]' onClick={() => dispatch(addToCart(product))}>+</button>
                          <button className='px-[3px] text-[#777] hover:bg-[#eee] rounded-[6px]'>{product.quantity}</button>
                          <button className='px-[3px] text-[#777] hover:bg-[#eee] rounded-[6px]' onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                        </div>
                        <button onClick={() => dispatch(removeItemFromCart(product))} className='flex items-center p-[5px] rounded-[10px] border-[1px] border-solid border-[#000] transition-colors duration-300 hover:text-[#b91c1c]'>
                          <X className='h-[18px]' />
                          <span className='text-[18px]'>remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => dispatch(clearItemsFromCart())} className='block p-[10px] text-white bg-[#dc2626cc] rounded-[10px] font-medium text-[18px] ml-auto'>reset cart</button>
            </div>
            <div className="left w-[25%] bg-white p-[15px] h-[220px] rounded-[10px]">
              <div className="box">
                <p className='text-[#777] font-medium mb-[5px]'>Your order qualifies for FREE Shipping by Choosing this option at checkout. See details....</p>
                <div className='mb-2'>Total: <span className='font-bold'>{`$${totalPrice}`}</span></div>
                <button className='block w-full p-2 bg-[#6b7280] text-white rounded-[10px] mb-2'>Proceed to Pay</button>
                <p className='text-[#b91c1c] text-[14px] text-center'>Please login to continue</p>
              </div>
            </div>
          </div>
          ) : (
            <div className='bg-white p-5 w-2/3 h-[250px] m-auto rounded-[10px] flex flex-col items-center justify-center'>
              <p className='mb-2'>your cart is empty !</p> 
              <Link to={'/'} className='block p-[10px] text-white bg-[#000] rounded-[10px] font-medium text-[14px] '>Go to shopping !</Link>
            </div>
          )}
      </div>
    </section>
  )
}

export default CartItem;