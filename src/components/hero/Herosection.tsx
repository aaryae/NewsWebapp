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
        const response = await fetch(`
        https://newsapi.org/v2/top-headlines?country=us&apiKey=227258dc557c446eb1ba568efbdff663`)

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
          <a href={herodata?.articles[0]?.url}>
            <img
              src={herodata?.articles[0]?.urlToImage ?? fallback}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover hover:blur-[2px] "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)), url(${herodata?.articles[0]?.urlToImage ?? fallback})`,
              }}
            />
            <div
              className="smallbox1 text-2xl p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl "
              style={{
                textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
              }}
            >
              {herodata?.articles[5]?.title}
              <div className="text-sm text-red-600">
                - {herodata?.articles[5]?.source?.name}
              </div>
            </div>
          </a>
        </div>
      </ErrorBoundary>


      <div className="box-2 cursor-pointer">
        <a href={herodata?.articles[8]?.url}>
          <img src={herodata?.articles[8]?.urlToImage ?? fallback} alt="img" className="inset-0 w-full h-full object-cover hover:blur-[2px]" />
          <div
            className="smallbox1 text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.articles[8]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.articles[8]?.source?.name}

            </div>
          </div>
        </a>
      </div>
      <div className="box-3 cursor-pointer">
        <a href={herodata?.articles[4]?.url}>
          <img src={herodata?.articles[4]?.urlToImage ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          \<div
            className="smallbox1 text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.articles[4]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.articles[4]?.source?.name}

            </div>
          </div>
        </a>
      </div>
      <div className="box-4 cursor-pointer">
        <a href={herodata?.articles[3]?.url}>

          <img src={herodata?.articles[3]?.urlToImage ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          <div
            className="smallbox1 text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.articles[3]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.articles[3]?.source?.name}

            </div>
          </div>
        </a>
      </div>
      <div className="box-5 cursor-pointer">
        <a href={herodata?.articles[6]?.url}>
          <img src={herodata?.articles[6]?.urlToImage ?? fallback} alt="img" className="inset-0 w-full h-full object-cover hover:blur-[2px]" />
          <div
            className="smallbox1 text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.articles[6]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.articles[6]?.source?.name}

            </div>
          </div>
        </a>
      </div>
      <div className="box-6 cursor-pointer">
        <a href={herodata?.articles[5]?.url}>
          <img src={herodata?.articles[5]?.urlToImage ?? fallback} alt="img" className="inset-0 w-full h-full object-cover  hover:blur-[2px]" />
          <div
            className="smallbox1 text-sm p-3 text-[#ffffff] bg-[#00000088] absolute bottom-0 drop-shadow-2xl group-hover:underline "
            style={{
              textShadow: "rgb(83 112 225 / 54%) 3px 3px 20px, rgb(255 255 255 / 0%) -2px 1px 30px",
            }}
          >
            {herodata?.articles[1]?.title}
            <div className="text-sm text-red-600">
              - {herodata?.articles[1]?.source?.name}

            </div>
          </div>
        </a>
      </div>
    </div>


  );
};

export default Herosection;


