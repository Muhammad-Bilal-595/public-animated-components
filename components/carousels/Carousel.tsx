"use client";
import Image from "next/image";
import {  useEffect, useState } from "react";
import { file, globe, img1, img2, img3 } from "@/public/images";

// type slider = {
//   img: StaticImageData;
//   name: string;
//   description: string;
// };

// data
const sliderData = [
  {
    img: img1,
    name: "slider 1",
    description: "description 1",
  },
  {
    img: img2,
    name: "slider 2",
    description: "description 2",
  },
  {
    img: img3,
    name: "slider 3",
    description: "description 3",
  },
  {
    img: img1,
    name: "slider 4",
    description: "description 4",
  },
  {
    img: globe,
    name: "slider 5",
    description: "description 5",
  },
  {
    img: file,
    name: "slider 6",
    description: "description 6",
  },
  {
    img: img3,
    name: "slider 7",
    description: "description 7",
  },
  {
    img: img1,
    name: "slider 8",
    description: "description 8",
  },
];

const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [rotate, setRotate] = useState<string>("0");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [startSlice, setStartSlice] = useState<number>(0);
  const [endSlice, setEndSlice] = useState<number>(5);
  const [stopAutoRotate, setStopAutoRotate] = useState<boolean>(false);
  const [alternate, setAlternate] = useState<boolean>(true);
  const sliderLength = sliderData.length;
  const numberOfWheels = 5;
  const distanceDegree = 360 / numberOfWheels;
  // const [currentSliderData, setCurrentSliderData] = useState<slider[]>(
  //   sliderData.slice(startSlice, endSlice)
  // );

  // auto rotate after every 5s
  useEffect(() => {
    if (!stopAutoRotate||isClicked) return;
    const t = setTimeout(() => {
      const n = document.getElementById("next");
      const p = document.getElementById("prev");
      if (sliderIndex != sliderLength - 1 && alternate) {
        n?.click();
      } else if (sliderIndex != 0) {
        p?.click();
      }
      if (sliderIndex == sliderLength - 1) setAlternate(false);
      if (sliderIndex == 0) setAlternate(true);
    }, 5000, sliderIndex);
    console.log("auto rotate",t);
    return () => clearTimeout(t);
  }, [stopAutoRotate,alternate,sliderIndex,sliderLength,isClicked]);
  

  // handle click both prev and next
  const handleClick = ({
    buttonClicked,
  }: {
    buttonClicked: "prev" | "next";
  }) => {
   

    const typeOfClick = buttonClicked === "prev" ? -1 : 1;
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
      // if (e >= sliderLength) {
      setSliderIndex((prev) => (prev + typeOfClick) % sliderLength);
      // }
      // current slide data
      if (!(endSlice >= sliderLength) || buttonClicked == "prev") {
        setStartSlice(s);
        if (e - s == numberOfWheels) setEndSlice(e);
      }
    }, 1000);
  };


  return (
    <section className="flex  max-lg:flex-col w-full h-screen transform transition-transform duration-500 delay-150 max-w-[1200px] overflow-hidden">
      <div className="flex-center flex-col bg-blue-500 md:w-[100vw] max-md:min-h-[65vh] min-h-[70vh]">
        <div className="">
          <Image
            src={sliderData[sliderIndex].img}
            alt=""
            className="w-[100px] h-auto bg-fuchsia-200 rounded-full"
          />
          <div>Name:{sliderData[sliderIndex].name}</div>
        </div>
        <div>{sliderData[sliderIndex].description}</div>
      </div>
      <div className="relative  flex justify-end items-center gap-10 h-full w-full bg-slate-50/10  flex-col  transform transition-all duration-500 delay-150 ">
        {/* wheel container */}
        <div
          className=" absolute lg:bottom-[10%] max-lg:top-[5%]  max-md:top-[10%]  z-10 flex-center   w-[300px] h-[300px] radial-gradient from-transparent to-black  text-white  rounded-full blur-[0.5px] "
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {/* check */}
          <div className="absolute w-[20px] h-[20px] rounded-full radial-gradient from-white to-black to-[30%]" />
          {/* wheel */}
          {sliderData.map((data, index) => {
            if (startSlice <= index && endSlice > index)
              return (
                <div
                  key={data.name + index}
                  className="absolute -z-10 top-[50px]  w-[3px] h-[100px] bg-black to-[50%]  origin-bottom "
                  style={{
                    transform: `rotate(-${(index % 5) * distanceDegree}deg) `,
                  }}
                >
                  <div
                    className="relative -left-[24px] -top-[30px] w-[50px] h-[50px] bg-white rounded-full "
                    style={{
                      transform: `rotate(calc(${
                        index * distanceDegree - parseInt(rotate)
                      }deg)) `,
                    }}
                  >
                    <Image
                      src={sliderData[index].img}
                      alt=""
                      className="object-contain w-[50px] h-auto"
                    />
                  </div>
                </div>
              );
          })}
        </div>

        {/* button */}
        <div className="relative flex-center z-30 bg-white/50 backdrop-blur-sm rounded-lg  lg:h-[30%]  max-lg:h-[45%]  w-full gap-10">
          <button
            id="prev"
            type="button"
            disabled={isClicked || sliderIndex == 0}
            className={` px-4 py-2 rounded-md ${
              isClicked || sliderIndex == 0
                ? "bg-white/50 cursor-not-allowed"
                : "bg-white"
            } text-black  `}
            onClick={() => {setAlternate(false);
              handleClick({ buttonClicked: "prev" })}}
          >
            Prev
          </button>
          <button
            onClick={() => {
              
              setStopAutoRotate((prev) => !prev);
            }}
            className="px-4 py-2 rounded-md bg-slate-500"
          >
            {stopAutoRotate ? "stop" : "Auto"}
          </button>
          <button
            id="next"
            type="button"
            disabled={isClicked || sliderIndex === sliderLength - 1}
            className={` px-4 py-2 rounded-md ${
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
        </div>
      </div>
    </section>
  );
};

export default Carousel;
