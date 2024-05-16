import fallback from "assets/fallback/fallback-image.png"

const Historical = () => {
    return (
        <>
            <div className="flex flex-col">

                <div>
                    <h1 className='relative w-fit text-2xl mt-7 font-bold'>HISTORICAL</h1>
                    <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                    <hr />
                </div>
                <div className=' my-6  '>
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


                </div>
                <div className="text-center">
                    <button className="border border-white bg-[#26806c] text-white py-4 px-10 hover:text-black hover:border-black tracking-widest" >LoadMore</button>
                </div>
            </div>
        </>
    )
}

export default Historical