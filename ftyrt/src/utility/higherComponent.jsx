import React from "react";

const AddedComponent = (Component) => {
  return (props) => {
    return (
      <>
        <p className="bg-black text-orange-500">Added to cart</p>
        <Component {...props} />
      </>
    );
  };
};

export default AddedComponent;
