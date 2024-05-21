import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbarhelper from './Navbarhelper';


const Navbar = () => {
  const [MenuOn, setMenuOn] = useState(false);


  const handleToggle = () => {
    setMenuOn(!MenuOn);
  };
  return (
    <>
      <div className='bg-black text-white w-full fixed  z-10 '>
        <div className='max-w-6xl mx-auto md:flex md:justify-between '>

          <div className=''>
            <ul className='flex flex-wrap justify-center p-3 w-fit'>
              <li className='mx-5 tracking-wider'>
                <Link to="/">Main</Link>
              </li>
              <li className='mx-5 tracking-wider'>
                <Link to="/about">About</Link>
              </li>
              <li className='mx-5 tracking-wider'>
                <Link to="/forex">Forex</Link>
              </li>
              <li className='mx-5 tracking-wider'>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className='flex gap-4 p-3 justify-center my-auto '>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
            </a>

          </div>
        </div>
      </div>
      <Navbarhelper />
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between p-2  bg-black text-white lg:bg-transparent lg:text-black mb-10">
        <div className="w-fit my-auto text-4xl tracking-wider cursor-pointer">
          <Link to='/'>

            <span className="text-[#26806c] font-bold text-5xl">A</span>ARYAE
          </Link>
        </div>
        <div className="block lg:hidden p-4 ">
          <i className="fa-solid fa-bars" onClick={handleToggle} style={{ color: "#26806c" }}></i>        </div>
        <div className={`w-full lg:text-black text-white text-center  lg:w-auto lg:block bg-[#000000e0] lg:bg-transparent ${MenuOn ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 py-3 ">
            <li className="mx-2"><a className="tracking-wide hover:text-[#26806c]" href="#">Breaking</a></li>
            <li className="mx-4"><a className="tracking-wide hover:text-[#26806c]" href="#historical">Historical</a></li>
            <li className="mx-4"><a className="tracking-wide hover:text-[#26806c]" href="#google">Google</a></li>
            <li className="mx-2"><a className="tracking-wide hover:text-[#26806c]" href="#crypto">Crypto</a></li>
          </ul>
        </div>
      </div>

    </>

  )
}

export default Navbar
