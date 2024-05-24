import fallback from "@assets/fallback/fallback-image.png";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NewsInterface } from "types/global.type";
import "./hero.css";

const Herosection = () => {
  const [herodata, setherodata] = useState<NewsInterface>()
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}&language=en&category=politics `)
        // https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=politics  
        const data: NewsInterface = await response.json();
        console.log(data)

        setherodata(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchdata();
  }, [])



  return (
    <div className="girid ">
      <ErrorBoundary fallback={<div>something went wrong</div>}>

        <div className="box-1 group cursor-pointer" >
          <a href={herodata?.results[0]?.source_url}>
            <img
              src={herodata?.results[0]?.image_url ?? fallback}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover hover:blur-[2px] "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)), url(${herodata?.results[0]?.image_url ?? fallback})`,
              }}
            />
            <div
              className="smallbox1 w-full text-2xl p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl "
              style={{
                textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
              }}
            >
              {herodata?.results[5]?.title}
              <div className="text-sm text-red-600">
                - {herodata?.results[5]?.content}
              </div>
            </div>
          </a>
        </div>
      </ErrorBoundary>


      <div className="box-2 cursor-pointer">
        <a href={herodata?.results[8]?.source_url}>
          <img src={herodata?.results[8]?.image_url ?? fallback} alt="img" className="inset-0 w-full h-full object-cover hover:blur-[2px]" />
          <div
            className="smallbox1 w-full text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.results[8]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.results[8]?.content}

            </div>
          </div>
        </a>
      </div>
      <div className="box-3 cursor-pointer">
        <a href={herodata?.results[4]?.source_url}>
          <img src={herodata?.results[4]?.image_url ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          <div
            className="smallbox1 w-full text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.results[4]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.results[4]?.language}

            </div>
          </div>
        </a>
      </div>
      <div className="box-4 cursor-pointer">
        <a href={herodata?.results[3]?.source_url}>

          <img src={herodata?.results[3]?.image_url ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          <div
            className="smallbox1 w-full text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.results[3]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.results[3]?.content}

            </div>
          </div>
        </a>
      </div>
      <div className="box-5 cursor-pointer">
        <a href={herodata?.results[6]?.source_url}>
          <img src={herodata?.results[6]?.image_url ?? fallback} alt="img" className="inset-0 w-full h-full object-cover hover:blur-[2px]" />
          <div
            className="smallbox1 w-full text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.results[6]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.results[6]?.content}

            </div>
          </div>
        </a>
      </div>
      <div className="box-6 cursor-pointer">
        <a href={herodata?.results[5]?.source_url}>
          <img src={herodata?.results[5]?.image_url ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          <div
            className="smallbox1 w-full text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.results[1]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.results[1]?.content}

            </div>
          </div>
        </a>
      </div>
    </div>


  );
};

export default Herosection;


