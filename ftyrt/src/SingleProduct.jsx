import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const SingleProduct = () => {
  const [dataObj, setDataObj] = useState(null); // State to hold fetched data
  const { id } = useParams(); // Get the product ID from the URL

  // Function to fetch product data
  const getData = async () => {
    try {
      let data = await fetch(`https://dummyjson.com/recipes/${id}`);
      let obj = await data.json();
      setDataObj(obj);
    } catch (er) {
      console.error(er); // Add error handling if needed
    }
  }
  // Fetch data when the component mounts or the ID changes
  useEffect(() => {
    getData();
  }, [id]);

  // Return loading or error state while data is being fetched
  if (dataObj === null) {
    return <div>Loading...</div>; // Or use a spinner or shimmer effect
  }

  // Destructure data from state object
  const { name, image, mealType } = dataObj;

  return (
    // Add classes to center the card
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{mealType}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


