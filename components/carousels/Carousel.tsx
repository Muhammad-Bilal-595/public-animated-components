"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface sliderProps {
  sliderData: { img: StaticImageData; name: string; description: string }[];
  numberOfWheelsInSlider?: number;
  delayInAutoRotation?: 5000 | 1500 | 2000 | 2500 | 3000 | 4000 | 6000 | 60000;
}

const Carousel = ({ delayInAutoRotation=5000,sliderData, numberOfWheelsInSlider = 0 }: sliderProps) => {
  // number of wheels
  const numberOfWheels =
    numberOfWheelsInSlider > 2 && numberOfWheelsInSlider <= sliderData.length
      ? numberOfWheelsInSlider
      : sliderData.length<5?sliderData.length:5;
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [rotate, setRotate] = useState<string>("0");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [startSlice, setStartSlice] = useState<number>(0);
  const [endSlice, setEndSlice] = useState<number>(numberOfWheels);
  const [stopAutoRotate, setStopAutoRotate] = useState<boolean>(true);
  const [alternate, setAlternate] = useState<boolean>(true);
  const sliderLength = sliderData.length;
  const distanceDegree = 360 / numberOfWheels;
  const [checking, setChecking] = useState<boolean>(false);

  // auto rotate after every 5s
  useEffect(() => {
    if (!stopAutoRotate || isClicked) return;
    const t = setTimeout(
      () => {
        const n = document.getElementById("next");
        const p = document.getElementById("prev");
        if (sliderIndex != sliderLength - 1 && alternate) {
          n?.click();
        } else if (sliderIndex != 0) {
          p?.click();
        }
        if (sliderIndex == sliderLength - 1) setAlternate(false);
        if (sliderIndex == 0) setAlternate(true);
      },
      delayInAutoRotation, //5000->5s , 500->0.5s ,1000-> 1s
      sliderIndex
    );
    return () => clearTimeout(t);
  }, [stopAutoRotate, alternate, sliderIndex, sliderLength, isClicked,delayInAutoRotation]);

  // handle click both prev and next
  const handleClick = ({
    buttonClicked,
  }: {
    buttonClicked: "prev" | "next";
  }) => {
    const typeOfClick = buttonClicked === "prev" ? -1 : 1;
    setChecking(() => (buttonClicked === "prev" ? true : false));
    let s = startSlice + typeOfClick;
    let e = endSlice + typeOfClick;
    s = s < 0 ? 0 : s;
    e = e > sliderLength ? endSlice : e;
    // to prevent multiple clicks
    setIsClicked(true);
    // to rotate the carousel
    for (let i = 0; i < distanceDegree; i++) {
      setTimeout(() => {
        setRotate((prev) => ((parseInt(prev) % 360) + typeOfClick).toString());
      }, (900 / distanceDegree) * i);
    }
    setTimeout(() => {
      // to enable the button again
      setIsClicked(false);
      // to change the index of the slider

      setSliderIndex((prev) => (prev + typeOfClick) % sliderLength);
      // to change the slice of the
      if (!(endSlice >= sliderLength) || buttonClicked == "prev") {
        setStartSlice(s);
        if (e - s == numberOfWheels) setEndSlice(e);
      }
      setChecking((prev) => !prev);
    }, 1000);
  };

  return (
    <section className={`Carousel--container  `}>
      <div className="Information--container">
        <div className="Information--Image__container">
          <Image
            id="image"
            src={sliderData[sliderIndex].img}
            alt=""
            className={`w-[250px] md:w-[350px] h-[250px] md:h-[350px] ${
              isClicked
                ? checking
                  ? "object-[-300px_60px] md:object-[-350px_60px] blur-[30px] "
                  : "object-[300px_100px] md:object-[350px_60px] blur-[30px]"
                : " object-cover "
            } bg-slate-400 ring-black/50 ring-4 blur-0  transition-all duration-500  rounded-full p-2 flex-center `}
          />
          <div className="Information--Name">
            <h3
              className={`transition-all ${
                isClicked
                  ? checking
                    ? " translate-y-[170%] "
                    : "-translate-y-[170%] "
                  : " translate-y-0 "
              } `}
            >
              {sliderData[sliderIndex].name}
            </h3>
          </div>
        </div>
        <p className="Information--Description">
          {sliderData[sliderIndex].description}
        </p>
      </div>
      <div className="Carousel_Controler--container ">
        {/* wheel container */}
        <div
          className="Wheel--container "
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {" "}
          {/* wheels center circle*/}
          <div className="absolute w-[20px] h-[20px] rounded-full radial-gradient from-white to-black to-[30%]" />
          {/*End of wheels center sircle*/}
          {/* wheel */}
          {sliderData.map((data, index) => {
            if (startSlice <= index && endSlice > index)
              return (
                // wheel info
                <div
                  key={data.name + index}
                  className="Wheels--info"
                  style={{
                    transform: `rotate(-${
                      (index % numberOfWheels) * distanceDegree
                    }deg) `,
                  }}
                >
                  {/* image container */}
                  <div
                    className="Wheel--image"
                    style={{
                      transform: `rotate(calc(${
                        index * distanceDegree - parseInt(rotate)
                      }deg)) `,
                    }}
                  >
                    <Image
                      src={sliderData[index].img}
                      alt=""
                      className=" w-[50px] h-[50px] object-cover rounded-full"
                    />
                  </div>
                  {/*End of image container */}
                </div>
                //End of wheel info
              );
          })}
        </div>

        {/* buttons Container */}
        <div className="btn--container">
          {/* previous Button */}
          <button
            id="prev"
            type="button"
            disabled={isClicked || sliderIndex == 0}
            className={` btn ${
              isClicked || sliderIndex == 0
                ? "bg-white/50 cursor-not-allowed"
                : "bg-white"
            } text-black  `}
            onClick={() => {
              setAlternate(false);
              handleClick({ buttonClicked: "prev" });
            }}
          >
            Prev
          </button>
          {/*End of previous Button */}
          {/* To start and stop auto Rotate button */}
          <button
            onClick={() => {
              setStopAutoRotate((prev) => !prev);
            }}
            className="btn radial-gradient text-black from-white from-[0%]  to-white/10"
          >
            {stopAutoRotate ? "stop" : "Auto"}
          </button>
          {/* End of auto Rotate button */}
          {/* Next button */}
          <button
            id="next"
            type="button"
            disabled={isClicked || sliderIndex === sliderLength - 1}
            className={` btn ${
              isClicked || sliderIndex === sliderLength - 1
                ? "bg-black/50 cursor-not-allowed"
                : "bg-black"
            } text-white  `}
            onClick={() => {
              setAlternate(true);
              handleClick({ buttonClicked: "next" });
            }}
          >
            Next
          </button>
          {/*End of Next button */}
        </div>
        {/*End of buttons Container */}
        {/* slider info */}
        <div className="Slider--info__1">{sliderIndex + 1} </div>
        <div className="Slider--info__2">{sliderLength}</div>
        <div className="Slider--progress">
          <div
            style={{
              width: `${((sliderIndex + 1) / sliderLength) * 100}%`,
            }}
            className={`h-1  bg-orange-300 transition-all duration-1000`}
          />
        </div>
        {/* end of slider info /progress */}
      </div>
    </section>
  );
};

export default Carousel;
