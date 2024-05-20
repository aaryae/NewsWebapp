import fallback from "@assets/fallback/fallback-image.png"
import Historical from "@components/historical/Historical"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"

const Googlenews = () => {

    const [newsdata, setnewsdata] = useState<NewsInterface>()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=google&from=2024-04-20&sortBy=publishedAt&apiKey=fb6e45d574924ffca24c02b0d8fd3798`)
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


            <div>
                <h1 className='relative w-fit text-2xl mt-7 font-bold'>GOOGLE NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className="flex flex-wrap justify-center md:flex-nowrap">

                <div className='max-w-[70%] my-6 flex flex-wrap  '>
                    {
                        newsdata?.articles.slice(8, 12).map((article, value) => (
                            <div key={value} className='flex flex-col my-5  p-2 w-80 items-center justify-center '>
                                <div className='w-full  bg-black flex items-center justify-center'>
                                    <img src={article?.urlToImage ?? fallback} alt={fallback} className="object-cover w-full h-full" />
                                </div>

                                <div>
                                    <h1 className="my-2">{article?.title}</h1>
                                    <p className="my-2 font-light">{article?.publishedAt.split("T")[0]}</p>
                                    <p className="text-justify font-light">{article?.description?.substring(0, 150)}</p>
                                </div>
                            </div>
                        ))
                    }



                </div>
                <Historical />
            </div>
        </>

    )
}

export default Googlenews