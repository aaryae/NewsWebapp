import fallback from "assets/fallback/fallback-image.png"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"

const Historical = () => {

    const [newsdata, setnewsdata] = useState<NewsInterface>()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=history&from=2024-04-20&sortBy=publishedAt&apiKey=fb6e45d574924ffca24c02b0d8fd3798`)
                const data: NewsInterface = await response.json()
                setnewsdata(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])

    return (
        <>
            <div className="flex flex-col w-[30%]">

                <div>
                    <h1 className='relative w-fit text-2xl mt-7 font-bold'>HISTORICAL</h1>
                    <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                    <hr />
                </div>
                <div className=' my-6  '>
                    {
                        newsdata?.articles.slice(0, 3).map((articles, value) => (
                            <div key={value} className='flex justify-center items-center gap-10 mb-5 flex-wrap md:flex-nowrap cursor-pointer'>
                                <div className='w-40 h-28 bg-black flex items-center justify-center'>
                                    <img src={articles?.urlToImage ?? fallback} alt="img" className="object-cover w-full h-full" />
                                </div>

                                <div>
                                    <h1 className="font-bold">{articles?.title} </h1>
                                    <p>source: {articles?.publishedAt}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="text-center">
                    <button className="border border-white bg-[#26806c] text-white py-4 px-10 hover:bg-[#175a4c] hover:border-white tracking-widest" >LoadMore</button>
                </div>
            </div>
        </>
    )
}

export default Historical