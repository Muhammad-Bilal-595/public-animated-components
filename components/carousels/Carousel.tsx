"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  // number of wheels
  const numberOfWheels = 5;
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [rotate, setRotate] = useState<string>("0");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [startSlice, setStartSlice] = useState<number>(0);
  const [endSlice, setEndSlice] = useState<number>(numberOfWheels);
  const [stopAutoRotate, setStopAutoRotate] = useState<boolean>(false);
  const [alternate, setAlternate] = useState<boolean>(true);
  const sliderLength = sliderData.length;
  const distanceDegree = 360 / numberOfWheels;

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
      5000, //5000->5s , 500->0.5s ,1000-> 1s
      sliderIndex
    );
    return () => clearTimeout(t);
  }, [stopAutoRotate, alternate, sliderIndex, sliderLength, isClicked]);

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

      setSliderIndex((prev) => (prev + typeOfClick) % sliderLength);
      // to change the slice of the
      if (!(endSlice >= sliderLength) || buttonClicked == "prev") {
        setStartSlice(s);
        if (e - s == numberOfWheels) setEndSlice(e);
      }
    }, 1000);
  };

  return (
    <section className="Carousel--container">
      <div className="Information--container">
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
                      className="object-contain w-[50px] h-auto"
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
            className="btn bg-slate-500"
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
      </div>
    </section>
  );
};

export default Carousel;
