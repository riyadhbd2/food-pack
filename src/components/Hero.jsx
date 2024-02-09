import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Hero = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  
  return (
    <div className="overflow-hidden relative ">
      <div
        className={`flex transition ease-out duration-300 translate-x-[-${
          current * 100
        }%] `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => {
          return <img src={slide} />;
        })}
      </div>

      {/* Carousel button  */}

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10">
        <button onClick={previousSlide}>
          <FaArrowCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
