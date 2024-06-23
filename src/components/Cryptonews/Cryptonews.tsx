import fallback from "@assets/fallback/fallback-image.png"
import { useEffect, useState } from "react"
import { NewsInterface } from "types/global.type"


const Cryptonews = () => {
    const [newsdata, setnewsdata] = useState<NewsInterface>()

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

    return (
        <>
            <div>
                <h1 className='relative w-fit text-2xl mt-7 font-bold' id="crypto">CRYPTO NEWS</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <div className="flex flex-wrap justify-center  md:justify-between">

                {
                    newsdata?.results?.slice(0, 3).map((article, index) => (
                        <div key={index} className='flex flex-col my-5  p-2 w-80 cursor-pointer '>
                            <div className='w-full h-[200px] bg-black flex items-center justify-center'>
                                <img src={article.image_url ?? fallback} alt="img" className="object-cover w-full h-full" />
                            </div>


                            <div>
                                <h1 className="font-bold">{article.title}</h1>
                                <p className="my-2 font-light">{article.content} <br /> {article.country}</p>
                                <p className="text-justify font-light">{article.description?.substring(0, 100)}....</p>
                            </div>
                        </div>

                    ))}


            </div>

        </>
    )
}

export default Cryptonews