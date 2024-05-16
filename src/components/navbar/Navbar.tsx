import Navbarhelper from './Navbarhelper'


const Navbar = () => {
  return (
    <>
      <div className='bg-black text-white w-full fixed  z-10 '>
        <div className='max-w-6xl mx-auto md:flex md:justify-between '>

          <div className=''>
            <ul className='flex flex-wrap justify-center p-3 w-fit'>
              <li className=''><a className='mx-5 tracking-wider' href="">About</a></li>
              <li className=''><a className='mx-5 tracking-wider' href="">Advertise</a></li>
              <li className=''><a className='mx-5 tracking-wider' href="">Contact</a></li>

            </ul>
          </div>
          <div className='flex gap-4 p-3 justify-center my-auto '>
            <i className="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>

          </div>
        </div>
      </div>
      <Navbarhelper />
      <div className='max-w-6xl mx-auto flex flex-wrap justify-between m-3'>
        <div className='w-fit my-auto text-4xl tracking-wider '>
          <span className='text-[#26806c] text-bold text-5xl '>A</span>ARYAE
        </div>
        <div>
          <ul className='flex flex-wrap justify-between py-3 '>
            <li className=' mx-2'><a className=' tracking-wide' href="">Breaking</a></li>
            <li className='mx-4'><a className='tracking-wide' href="">Historical</a></li>
            <li className=' mx-4'><a className='tracking-wide' href="">Google</a></li>
            <li className=' mx-2 float-right'><a className='tracking-wide' href="">Crypto</a></li>
          </ul>
        </div>
      </div>

    </>

  )
}

export default Navbar
