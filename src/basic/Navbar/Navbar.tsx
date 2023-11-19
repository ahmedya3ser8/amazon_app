import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarType } from "../../types/app";

function Navbar() {
  const [navbarLinks] = useState<navbarType[]>([
    {path: '/', text: 'Todays Deals' },
    {path: '/', text: 'Customer Service'},
    {path: '/', text: 'Registry'},
    {path: '/', text: 'Gift Cards'},
    {path: '/', text: 'Sell'}
  ]);
  return (
    <div className="bg-[#232f3e] text-white p-[10px]">
      <div className="container">
        <ul className='flex lg:space-x-5 items-center'>
          <li>
            <Link to="/" className="p-1 transition-all duration-300 border-[1px] border-solid border-transparent hover:border-white flex gap-1 items-center text-[14px]">
              <Menu />
              All
            </Link>
          </li>
          {navbarLinks.map((navLink, index) => (
            <li key={index} className="hidden lg:block">
              <Link to={navLink.path} className="p-1 transition-all duration-300 border-[1px] border-solid border-transparent hover:border-white text-[14px]">
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;