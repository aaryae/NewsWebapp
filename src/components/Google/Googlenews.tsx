import fallback from "@assets/fallback/fallback-image.png"
import Historical from "@components/historical/Historical"

const Googlenews = () => {
    return (

        <>


            <div>
                <h1 className='relative w-fit text-2xl mt-7 font-bold'>GOOGLE NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className="flex flex-wrap justify-center md:flex-nowrap">

                <div className='w-[70%] my-6 flex flex-wrap '>
                    <div className='flex flex-col my-5  p-2 w-80 '>
                        <div className='w-full  bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1 className="my-2">This is a heading lorem.this is a heading ho k</h1>
                            <p className="my-2 font-light">by lorem  | jan 24,2013</p>
                            <p className="text-justify font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt hic quo voluptatibus qui atque aspernatur, assumenda fugiat maiores asperiores nobis magni iste praesentium rerum delectus sit possimus dignissimos rem!</p>
                        </div>
                    </div>
                    <div className='flex flex-col my-5  p-2 w-80 '>
                        <div className='w-full  bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1 className="my-2">This is a heading lorem.this is a heading ho k</h1>
                            <p className="my-2 font-light">by lorem  | jan 24,2013</p>
                            <p className="text-justify font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt hic quo voluptatibus qui atque aspernatur, assumenda fugiat maiores asperiores nobis magni iste praesentium rerum delectus sit possimus dignissimos rem!</p>
                        </div>
                    </div>
                    <div className='flex flex-col my-5  p-2 w-80 '>
                        <div className='w-full  bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1 className="my-2">This is a heading lorem.this is a heading ho k</h1>
                            <p className="my-2 font-light">by lorem  | jan 24,2013</p>
                            <p className="text-justify font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt hic quo voluptatibus qui atque aspernatur, assumenda fugiat maiores asperiores nobis magni iste praesentium rerum delectus sit possimus dignissimos rem!</p>
                        </div>
                    </div>
                    <div className='flex flex-col my-5  p-2 w-80 '>
                        <div className='w-full  bg-black flex items-center justify-center'>
                            <img src={fallback} alt="" className="object-cover w-full h-full" />
                        </div>

                        <div>
                            <h1 className="my-2">This is a heading lorem.this is a heading ho k</h1>
                            <p className="my-2 font-light">by lorem  | jan 24,2013</p>
                            <p className="text-justify font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt hic quo voluptatibus qui atque aspernatur, assumenda fugiat maiores asperiores nobis magni iste praesentium rerum delectus sit possimus dignissimos rem!</p>
                        </div>
                    </div>

                </div>
                <Historical />
            </div>
        </>

    )
}

export default Googlenews