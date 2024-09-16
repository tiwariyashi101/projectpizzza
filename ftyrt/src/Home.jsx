import React, { useState } from "react";
import productReceipes from "./Product";
import { MdLunchDining, MdOutlineDinnerDining } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import Card from "./Card";
import Shimmer from "./Shimmer"; // Ensure Shimmer component is imported correctly

const Home = () => {
  const [product, setProduct] = useState([...productReceipes]);
  const [search, setSearch] = useState("");

  const filterProduct = () => {
    const data = productReceipes.filter((obj) => obj.rating >= 4.5);
    setProduct(data);
  };

  const filterCategory = (proCategory) => {
    const data = productReceipes.filter((obj) => proCategory === obj.mealType[0]);
    setProduct(data);
  };

  const searchProduct = () => {
    const data = productReceipes.filter((obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase())
    );
    setProduct(data);
  };

  if (productReceipes.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-active" onClick={searchProduct}>
          Search
        </button>
        <button className="btn btn-active" onClick={filterProduct}>
          <FaFilter /> Rating 4+
        </button>
        <button className="btn btn-active" onClick={() => filterCategory("Lunch")}>
          <MdLunchDining /> Lunch
        </button>
        <button className="btn btn-active" onClick={() => filterCategory("Dinner")}>
          <MdOutlineDinnerDining /> Dinner
        </button>
        <button className="btn btn-active" onClick={() => filterCategory("Snack")}>
          Snacks
        </button>
      </div>
      <div className="flex flex-wrap">
        {product.map((obj) => (
          <Card key={obj.id} obj={obj} />
        ))}
      </div>
    </>
  );
};

export default Home;


