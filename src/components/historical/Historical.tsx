import fallback from "assets/fallback/fallback-image.png"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"

const Historical = () => {

    const [newsdata, setnewsdata] = useState<NewsInterface>()
    const [showdata, setshowdata] = useState<boolean>(false)


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}&language=en&category=politics `)

                const data: NewsInterface = await response.json()
                setnewsdata(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])
    const handlelist = () => (
        setshowdata((prevshowdata) => !prevshowdata)
    )
    return (


        <>
            <div>
                <h1 className='relative w-fit text-2xl mt-7 font-bold' id="historical">HISTORICAL</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className=' my-6  '>
                {
                    newsdata?.results?.slice(3, 6).map((articles, value) => (
                        <div key={value} className='flex justify-center items-center gap-10 mb-5 flex-wrap  cursor-pointer '>
                            <img src={articles?.image_url ?? fallback} alt="img" className="object-cover h-full w-full" />


                            <div>
                                <h1 className="font-bold">{articles?.title} </h1>
                                <p>source: {articles?.country}</p>
                            </div>

                        </div>
                    ))
                }


            </div>
            {showdata &&
                <div className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap cursor-pointer '>
                    <div className='w-40 h-28 bg-black flex items-center justify-center '>
                        <img src={newsdata?.results[1]?.image_url ?? fallback} alt="img" className="object-cover w-full h-full" />
                    </div>

                    <div>
                        <h1 className="font-bold">{newsdata?.results[6]?.title} </h1>
                        <p>source: {newsdata?.results[1]?.creator}</p>
                    </div>

                </div>
            }
            <div className="text-center">
                <button onClick={handlelist} className="border border-white bg-[#26806c] text-white py-4 px-10 hover:bg-[#175a4c] hover:border-white tracking-widest" >LoadMore</button>
            </div>

        </>

    )
}

export default Historical