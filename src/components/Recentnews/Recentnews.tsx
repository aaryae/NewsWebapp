import fallback from "assets/fallback/fallback-image.png"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"

const Recentnews = () => {
    const [newsdata, setnewsdata] = useState<NewsInterface>()
    const [showdata, setshowdata] = useState<boolean>(false)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}&language=en&category=politics `)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
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
                <h1 className='relative w-fit text-2xl mt-7 font-bold'>RECENT NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'></h1>
                <hr />
            </div>
            <div className='flex justify gap-10 flex-wrap justify-center md:flex-nowrap'>
                <div className='my-6 w-1/2 group cursor-pointer'>
                    <div className='w-fit'>
                        <div className='w-full'>
                            <img src={newsdata?.results?.[1]?.image_url ?? fallback} alt="img" className="object-cover w-full h-full " />
                        </div>
                        <h1 className='my-3 text-lg text-[#eb4b4b] group-hover:underline'>{newsdata?.results?.[1]?.title}</h1>
                        <p className='my-3'>- {newsdata?.results?.[1]?.title} <br />{newsdata?.results?.[1]?.content}</p>
                        <p className='text-justify'>{newsdata?.results?.[1]?.description}</p>
                    </div>
                </div>

                <div className='w-1/2 my-6'>
                    {newsdata?.results.slice(3, 6).map((article, index) => (
                        <div key={index} className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap cursor-pointer'>
                            <img src={article.image_url ?? fallback} alt="img" className="object-cover h-[7rem] w-[10rem]" />
                            <div>
                                <h1 className="font-bold">{article.title}</h1>
                                <p>- {article.title} </p>
                            </div>
                        </div>
                    ))}
                    {showdata && <div className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap cursor-pointer'>
                        <img src={newsdata?.results[6]?.image_url ?? fallback} alt="img" className="object-cover h-[7rem] w-[10rem]" />

                        <div>
                            <h1 className="font-bold">{newsdata?.results[9]?.title}</h1>
                            <p>- {newsdata?.results[9]?.title} </p>
                        </div>
                    </div>}
                    <div className="text-center">
                        <button onClick={handlelist} className="border border-white bg-[#26806c] text-white py-4 px-10 hover:bg-[#175a4c] tracking-widest">Load More</button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Recentnews
