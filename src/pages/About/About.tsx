import peoples from "@assets/images/peoples.jpg"
import police from "@assets/images/police.jpg"

const About = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto p-6">

                <div className="text-[#000000d0]">
                    <div className="mt-10">

                        <div >
                            <div className="w-1/2">
                                <h1 className='relative w-fit text-2xl mt-7 font-light '>FOUNDED IN 1890</h1>
                                <h1 className='absolute w-[4%] border-2 border-[#26806c]'> </h1>
                                <hr />
                            </div>
                            <p className="my-1 py-1 leading-6 text-[1em] font-light">aaryae's news today remains the most trusted source of fast, accurate,  unbiased news in all formats and the essential provider of the technology and services vital to the news business. </p>
                        </div>

                        <div>
                            <div className="w-1/2">
                                <h1 className='relative w-fit text-2xl mt-7 font-light'>Our reach</h1>
                                <h1 className='absolute w-[4%] border-2 border-[#26806c]'> </h1>
                                <hr />
                            </div>
                            <p className="my-1 py-1 leading-6 text-[1em] font-light">Four billion people see aaryae's journalism everyday.</p>
                        </div>

                        <div>
                            <div className="w-1/2">
                                <h1 className='relative w-fit text-2xl mt-7 font-light'>Our footprint</h1>
                                <h1 className='absolute w-[4%] border-2 border-[#26806c]'> </h1>
                                <hr />
                            </div>
                            <p className="my-1 py-1 leading-6 text-[1em] font-light">Journalist in nearly 100 countires and in all 50 U.S states</p>
                        </div>

                        <div className="mb-10">
                            <div className="w-1/2">
                                <h1 className='relative w-fit text-2xl mt-7 font-light'>Our value</h1>
                                <h1 className='absolute w-[4%] border-2 border-[#26806c]'> </h1>
                                <hr />
                            </div>
                            <p className="my-1 py-1 leading-6 text-[1em] font-light">Accureate, fact-based nonpartisan reporting.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-wrap flex-col md:flex-row md:items-center lg:flex-row lg:items-center'>
                            <div className="w-[60%]">
                                <img src={police} alt="img" className="fit-content h-full w-full" />
                            </div>
                            <div className=" lg:w-[35%] w-[100%] p-3 ">
                                <h1 className="text-2xl  ">OUR STANDARDS</h1>
                                <hr />
                                <p className="font-light text-justify my-2">For over 175 years, the people of The Associated Press have had the privilege of bringing news and information to the world. We have gone to great lengths, overcome great obstacles — and, too often, made great sacrifices — to ensure that the news was reported quickly, accurately and factually, in a balanced and unbiased way. We are transparent about our news values and principles, which guide all AP journalists.</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap flex-col md:flex-row md:items-center lg:flex-row lg:items-center'>

                            <div className="lg:w-[35%] w-[100%] p-3">
                                <h1 className="text-2xl">OUR HISTORY</h1>
                                <hr />
                                <p className="font-light text-justify my-2">Since 1846, we have been breaking news and covering the world’s biggest stories, always committed to the highest standards of accurate, unbiased journalism. We were founded as an independent news cooperative, whose members are U.S. newspapers and broadcasters, steadfast in our mission to inform the world. To this day, AP remains independent, beholden only to the facts. From delivering the news via pony express in 1846 to working with artificial intelligence today, we are always innovating to provide fast and factual news and information.</p>
                            </div>
                            <div className="w-[59%]">
                                <img src={peoples} alt="img" className="fit-content h-full w-full" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About