import fallback from "@assets/fallback/fallback-image.png"
import Historical from "@components/historical/Historical"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"

const Googlenews = () => {

    const [newsdata, setnewsdata] = useState<NewsInterface>()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=227258dc557c446eb1ba568efbdff663`)
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
                <h1 className='relative w-fit text-2xl mt-7 font-bold' id="google">GOOGLE NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className="flex flex-wrap md:justify-between  justify-center cursor-pointer">

                <div className='md:w-[70%] w-full my-6 flex flex-wrap md:justify-start justify-center mx-auto gap-2 md:gap-10 '>
                    {
                        newsdata?.articles?.slice(0, 4).map((article, index) => (

                            <div key={index} className='flex flex-col my-5  p-2 max-w-80 cursor-pointer '>
                                <div className='w-full h-[200px] bg-black flex items-center justify-center'>
                                    <img src={article.urlToImage ?? fallback} alt="img" className="object-cover w-full h-full" />
                                </div>


                                <div  >
                                    <h1 className="font-bold">{article.title}</h1>
                                    <p className="my-2 font-light">{article.source?.name} <br /> {article.publishedAt.split("T")[0]}</p>
                                    <p className="text-justify font-light w-fit">{article.description?.substring(0, 100)}....</p>
                                </div>
                            </div>
                        ))
                    }



                </div>
                <div className="flex flex-col w-[300px] ">
                    <Historical />
                </div>
            </div>
        </>

    )
}

export default Googlenews