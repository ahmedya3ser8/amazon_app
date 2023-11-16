import { useDispatch } from 'react-redux'
import { Heart, ShoppingCart } from 'lucide-react';
import { addToCart } from '../../rtk/slices/cartReducer';
import {useEffect, useState} from 'react'
import { ProductsType } from '../../types/app';


function Products() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('/src/db/products.json');
      const data = await res.json();
      setProducts(data)
    }
    fetchData();
  }, []);
  return (
    <section className="bg-[#d1d5db] min-h-screen py-12">
      <div className="container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {products.map(product => (
            <div key={product.id} className="card bg-white p-[15px] rounded-[6px] relative group overflow-hidden">
              <img src={product.imgUrl} alt={product.title} className="w-full h-[260px] transition-all duration-300 group-hover:scale-110" />
              <span className='absolute top-2 right-2 transition-colors duration-300 group-hover:text-[#21cc18] group-hover:animate-bounce'>!save $46.80</span>
              <div className="card-icons absolute top-[25%] right-[-100px] border-[1px] border-solid border-[#000] rounded-[4px] transition-all duration-300 group-hover:right-[10px]">
                <span className='block p-2 border-b-[1px] border-solid border-[#000] transition-all duration-300 hover:bg-[#21cc18] cursor-pointer'>
                  <ShoppingCart onClick={() => dispatch(addToCart(product))} />
                </span>
                <span className='block p-2 transition-all duration-300 hover:bg-[#21cc18] cursor-pointer'>
                  <Heart />
                </span>
              </div>
              <hr className="border-[#000]" />
              <div className="card-body my-[10px]">
                <span className="text-[#777] text-[14px]">{product.category}</span>
                <h3 className="text-[18px] my-[5px]">{product.title}</h3>
                <div className="card-price space-x-1 mb-[10px]">
                  <span className="line-through">{`$${product.oldPrice}`}</span>
                  <span className='font-bold'>{`$${product.newPrice}`}</span>
                </div>
                <p className="text-[#777] text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla non magni facili blanditiis molestias soluta eveniet ill
                </p>
              </div>
              <button className="p-[10px] bg-black text-white w-full transition-all duration-300 hover:bg-[#21cc18] hover:text-[#000]" onClick={() => dispatch(addToCart(product))}>add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;