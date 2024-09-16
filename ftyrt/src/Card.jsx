import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./utility/CartSlice.jsx";
import { useState } from "react";
import { useContext } from "react";
import {Theme} from './utility/ThemeContext.jsx'

const Card = ({ obj }) => {
  if (!obj) {
    return null;
  }
  const { theme } = useContext(Theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);

  // Navigate using the product's id
  const handleNavigate = () => {
    navigate(`/recipes/${obj.id}`); // Use template literals to build the URL
  };

  // Add item to the cart and show toast
  const stopHandle = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    dispatch(addCart(obj));
    setToast(true);
    setTimeout(() => {
      setToast(false); // Hide the toast after 3 seconds
    }, 3000);
  };

  const { image, name, mealType } = obj;
  let darkTheme = "w-52 w-96 bg-base-100 shadow-xl  m-4 "
  let lightTheme = "w-52 w-96 bg-zinc-300 shadow-xl m-4  text-black"

  return (
    <>
      
      {
        toast&&(
          <div className="toast toast-top toast-start">
          <div className="alert alert-info">
            <span>Added to Cart!</span>
          </div>
        </div>
        )
      }

      {/* Card structure */}
      <div className={theme == "light" ? darkTheme : lightTheme} onClick={handleNavigate}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{mealType}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={stopHandle}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;






// card bg-base-100 w-80 shadow-xl m-4