import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const years = date.getFullYear();
  return (
    <footer className="bg-[#232f3e] p-4">
      <div className="flex items-center justify-center gap-2 text-white text-[18px]">
        <span className="text-[#f6f6f6]">&copy; {years}, All rights reserved</span>
        <Link to={'https://twitter.com/ahmed_ya3ser_8'} target="_blank" className="transition-colors duration-300 hover:underline font-medium" >ahmed yasser</Link>
      </div>
    </footer>
  )
}

export default Footer;