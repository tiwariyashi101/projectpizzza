import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Category from "./Category";
import { useState } from "react";

const CircleProduct = () => {
  const [category] = useState([...Category]);
  const [slide, setSlide] = useState(0);

  const itemsPerSlide = 3;

  const totalSlides = Math.ceil(category.length / itemsPerSlide);
  const nextSlide = () => {
    if (slide < totalSlides - 1) {
      setSlide(slide + 3);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 3);
    }
  };

  return (
    <>
    <div>
      <p className="font-bold text-left text-[20px] ">What's on your mind?</p>
      <div className="flex justify-end space-x-4">
        <div onClick={prevSlide}>
          <p>
            <FaArrowLeft />
          </p>
        </div>
        <div onClick={nextSlide}>
          <p>
            <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="flex">
        <div
          className="flex transition-transform duration-400"
          style={{ transform: `translateX(-${slide * 100}px)` }} // Adjust sliding based on index
        >
          {category.map((obj, index) => (
            <div key={index} className="flex w-24 h-24">
              <img
                src={obj.image} // Assuming images are properly referenced
                alt={obj.path}
                className="w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default CircleProduct;
