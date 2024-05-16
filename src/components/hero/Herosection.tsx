import fallback from "@assets/fallback/fallback-image.png"
import "./hero.css"

const Herosection = () => {
  return (

    <div className='girid'>
      <div className="box-1">
        <img src={fallback} alt="img" className=" absolute inset-0 w-full h-full object-cover" />   </div>
      <div className="box-2">
        <img src={fallback} alt="img" className=" inset-0 w-full h-full object-cover" />  </div>
      <div className="box-3">
        <img src={fallback} alt="img" className="inset-0 w-full h-full object-cover" />   </div>
      <div className="box-4">
        <img src={fallback} alt="img" className="inset-0 w-full h-full object-cover" />  </div>
      <div className="box-5">
        <img src={fallback} alt="img" className="inset-0 w-full h-full object-cover" />   </div>
      <div className="box-6">
        <img src={fallback} alt="img" className="inset-0 w-full h-full object-cover" />   </div>
    </div>

  )
}

export default Herosection