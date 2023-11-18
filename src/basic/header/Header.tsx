import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../../rtk/store';

function Header() {
  const cart = useSelector((state:RootState) => state.cart.cartItems);
  const favorite = useSelector((state:RootState) => state.favorite.favoriteItems);
  return (
    <header className='text-white bg-black p-3 sticky top-0 z-50 w-full'>
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <div className="left flex items-center gap-4">
            <Link to={'/'} className='p-1 border-[1px] border-solid border-transparent hover:border-white'>
              <img src={'/images/logo.png'} alt='logo' className='h-10' />
            </Link>
            <div className="items-center gap-1 p-1 border-[1px] border-solid border-transparent hover:border-white hidden lg:flex">
              <MapPin className='h-[14px]' />
              <div className='text-[14px]'>
                <p>Deliver to</p>
                <span className='font-bold'>Egypt</span>
              </div>
            </div>
          </div>
          <div className="center w-[65%] xl:w-[55%] h-10 flex items-center rounded-[20px]">
            <input type="text" placeholder='Search for...' className='w-full h-full outline-none text-black p-[5px] rounded-[10px_0_0_10px]' />
            <Search className='h-full bg-[#21cc18] text-black p-2 w-[7%] rounded-[0_10px_10px_0]' />
          </div>
          <div className="right flex items-center gap-3">
            <Link to={'login'} className='text-[14px] p-1 border-[1px] border-solid border-transparent hover:border-white'>
              Hello, sign in
              <span className='block font-bold'>Accounts & Lists</span>
            </Link>
            <Link to={'favorite'} className='relative text-[14px] p-1 border-[1px] border-solid border-transparent hover:border-white'>
              Market
              <span className='block font-bold'>& Favorite</span>
              <span className='absolute right-[13px] top-[2px] text-[#21cc18] p-1 w-2 h-2'>{favorite.length}</span>
            </Link>
            <Link to={'cart'} className='relative text-[14px] p-1 border-[1px] border-solid border-transparent hover:border-white flex items-center gap-1'>
              <img src={'/images/cart.png'} alt='cart' className='w-[50px]' />
              <span className='absolute left-[28px] top-[-5px] text-[#21cc18]'>{cart.length}</span>
              <span className='font-bold'>cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;