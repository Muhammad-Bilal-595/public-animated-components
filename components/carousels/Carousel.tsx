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
    name: "Earl Moore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.1",
  },
  {
    img: img2,
    name: "Caroline Underwood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.2",
  },
  {
    img: img3,
    name: "Gertrude Haynes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.3",
  },
  {
    img: img1,
    name: "Christine Robinson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.4",
  },
  {
    img: globe,
    name: "Frederick Hansen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.5",
  },
  {
    img: file,
    name: "Nancy Nunez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.6",
  },
  {
    img: img3,
    name: "Frances Kelley",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.7",
  },
  {
    img: img1,
    name: "Hannah Webb",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend diam. Nunc enim diam, interdum nec dui sed, pretium cursus diam. Aliquam ac accumsan sem. Aenean egestas faucibus nisi, eu malesuada nibh euismod in. Morbi fermentum lobortis nibh, scelerisque sollicitudin odio auctor et. Nam ornare nec tellus vel rhoncus. Nulla ante urna, egestas eu quam et, commodo facilisis odio. Vestibulum id venenatis tortor, eu laoreet justo. Vivamus ut ligula ac magna commodo sagittis. Proin non nisi nec massa pretium eleifend.",
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
    <section className={`Carousel--container `}>
      <div className="Information--container">
        <div className="w-full flex justify-end items-center flex-col lg:gap-8  max-lg:flex-center md:min-h-[60%] h-full bg-white px-10">
          <Image
            id="image"
            src={sliderData[sliderIndex].img}
            alt=""
            className={`w-[250px] md:w-[350px] h-auto ${
              isClicked
                ? checking
                  ? "object-[-300px_60px] blur-[10px]  "
                  : "object-[300px_100px] blur-[10px] "
                : "bg-black object-[0px_0px] "
            } bg-slate-400 ring-black/50 ring-4 blur-0  transition-all duration-500  rounded-full p-2 flex-center `}
          />
          <div className="flex-center text-black md:text-xl font-semibold bg-orange-200 lg:h-[10%] w-full">
            <h3 className="">{sliderData[sliderIndex].name}</h3>{" "}
          </div>
        </div>
        <p className="w-full bg-stone-400 h-full text-sm max-md:p-2 p-10 text-justify max-h-[30%] overflow-auto">
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
            className="btn radial-gradient from-black from-[10%]  to-white"
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
