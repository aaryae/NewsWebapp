
import fallback from "assets/fallback/fallback-image.png"

const Recentnews = () => {
    return (
        <>
            <div>
                <h1 className='relative w-fit text-2xl mt-7 font-bold'>RECENT NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className='flex justify gap-10 flex-wrap justify-center md:flex-nowrap'>
                <div className='my-6 w-1/2 '>
                    <div className='w-fit'>
                        <div className='w-full'>
                            <img src={fallback} alt="img" className="object-cover w-full h-full" />

                        </div>
                        <h1 className='my-3'>This is a heading lorem.</h1>
                        <p className='my-3 '>by lorem</p>jan 25 2014
                        <p className='text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur commodi distinctio, nam deserunt est cum repellendus mollitia error quia vero veniam dolorem provident tempora, pariatur saepe quo! Officia, facilis.</p>
                    </div>


                </div>
                <div className='w-1/2 my-6  '>
                    <div className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap'>
                        <div className='w-40 h-28 bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1>This is a heading lorem. this is a heading ho k </h1>
                            <p>by lorem  | jan 24,2013</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap'>
                        <div className='w-40 h-28 bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1>This is a heading lorem. this is a heading ho k </h1>
                            <p>by lorem  | jan 24,2013</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap'>
                        <div className='w-40 h-28 bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1>This is a heading lorem. this is a heading ho k </h1>
                            <p>by lorem  | jan 24,2013</p>
                        </div>
                    </div>

                    {/* <div className=" flex flex-col justify-center items-center ">
                        <div className=" w-fit">

                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>

                        </div>
                        <div>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>
                            <li className="bg-[#2b836f] float-right  text-[#e0e0e0] m-1 text-center w-1/3 ">1$ = 132.43 Nrs</li>


                        </div>



                    </div> */}
                    <div className="text-center">
                        <button className="border border-white bg-[#26806c] text-white py-4 px-10 hover:bg-[#175a4c] tracking-widest" >LoadMore</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Recentnews