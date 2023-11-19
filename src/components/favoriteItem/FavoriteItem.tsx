import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rtk/store";
import { addToCart } from "../../rtk/slices/cartReducer";
import { clearProductsFromFavorite } from "../../rtk/slices/favoriteReducer";
import { Link } from "react-router-dom";

function FavoriteItem() {
  const favorites = useSelector((state: RootState) => state.favorite.favoriteItems);
  console.log(favorites);
  const dispatch = useDispatch();
  return (
    <section className="bg-[#d1d5db] py-12">
      <div className="container">
        {favorites.length > 0 ? (
          <div className="w-[85%] m-auto bg-white p-[15px] rounded-[10px]">
            <div className="cart-head flex justify-between items-center border-b-[1px] border-solid border-[#000] py-2">
              <h2 className='font-bold text-[20px]'>Favorite Items</h2>
              <span className='font-medium text-[18px]'>Action</span>
            </div>
            <div className="grid grid-cols-1 p-[15px_0]">
              {favorites.map(favorite => (
                <div className="favorite-box flex flex-col lg:flex-row gap-5 p-[10px] mb-[15px] bg-[#f6f6f6] rounded-[10px]" key={favorite.id}>
                  <div className="favorite-img">
                    <img src={favorite.imgUrl} alt={favorite.title} className="h-[200px] w-[250px] transition-all duration-300 hover:scale-110" />
                  </div>
                  <div className="favorite-body">
                    <div className="flex justify-between">
                      <div className="favorite-body-head">
                        <h2 className="favorite-title text-[18px] font-bold">{favorite.title}</h2>
                        <p className="favorite-desc text-[#777] w-full lg:w-[65%]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi,
                          ex iste doloribus magnam.
                        </p>
                        <div className="favorite-price mb-3">unit price : 
                          <span className='font-bold'>{` $${favorite.newPrice}`}</span>
                        </div>
                        <button onClick={() => dispatch(addToCart(favorite))} className="p-[10px] bg-black text-white rounded-[10px] transition-colors duration-300 hover:bg-[#21cc18] hover:text-[#000]">add to cart</button>
                      </div>
                      <div className="font-bold text-[18px]">
                        {`$${favorite.newPrice}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => dispatch(clearProductsFromFavorite())} className='block p-[10px] text-white bg-[#dc2626cc] rounded-[10px] font-medium text-[18px] ml-auto'>reset favorite</button>
          </div>
        ) : (
          <div className='bg-white p-5 w-2/3 h-[250px] m-auto rounded-[10px] flex flex-col items-center justify-center'>
          <p className='mb-2'>your favorite is empty !</p> 
          <Link to={'/'} className='block p-[10px] text-white bg-[#000] rounded-[10px] font-medium text-[14px] '>Go to shopping !</Link>
        </div>
        )}
      </div>
    </section>
  )
}

export default FavoriteItem;