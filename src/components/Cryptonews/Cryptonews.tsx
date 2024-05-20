import fallback from "assets/fallback/fallback-image.png"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"


const Cryptonews = () => {
    const [newsdata, setnewsdata] = useState<NewsInterface>()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=crypto&from=2024-04-20&sortBy=publishedAt&apiKey=fb6e45d574924ffca24c02b0d8fd3798`)
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
                <h1 className='relative w-fit text-2xl mt-7 font-bold'>CRYPTO NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className="flex flex-wrap justify-center  md:justify-between">

                {newsdata?.articles.slice(0, 3).map((article, index) => (
                    <div key={index} className='flex flex-col my-5  p-2 w-80 '>
                        <div className='w-full h-[200px] bg-black flex items-center justify-center'>
                            <img src={article.urlToImage ?? fallback} alt="img" className="object-cover w-full h-full" />
                        </div>


                        <div>
                            <h1 className="font-bold">{article.title}</h1>
                            <p className="my-2 font-light">{article.author} <br /> {article.publishedAt}</p>
                            <p className="text-justify font-light">{article.description?.substring(0, 100)}....</p>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default Cryptonews