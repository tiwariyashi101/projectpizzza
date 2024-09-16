import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch from Redux
import { removeCart, clearCart } from "./utility/CartSlice.jsx"; // Import actions from the slice

const Cart = () => {
  const dispatch = useDispatch(); // Initialize useDispatch
  // Fetching the cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    dispatch(removeCart(id)); // Dispatch removeCart action with the item's ID
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch clearCart action
  };
  const handleClear=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="overflow-x-auto">
      <button className="btn btn-danger mb-4" onClick={handleClearCart}>Clear Cart</button>
      <table className="table">
        {/* Table head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>ReviewCount</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Using map function to render each cart item */}
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              // Adding a check to ensure the item and its properties are defined
              item && item.image ? (
                <tr key={item.id}> {/* Use item.id as the key */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image} // Assuming `item.image` holds the URL of the product image
                            alt={item.name || "No Name"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name || "Unknown"}</div>
                        <div className="text-sm opacity-50">
                          {item.country || "Unknown"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.cuisine || "No Recipe Info"}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.role || "No Role"}
                    </span>
                  </td>
                  <td>{item.reviewCount || "No reviewCount"}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleRemove(item.id)} // Pass the item's ID to handleRemove
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ) : (
                // Fallback if `item` or `item.image` is not available
                <tr key={item.id}>
                  <td colSpan="5">Item information is incomplete</td>
                </tr>
              )
            ))
          ) : (
            <tr>
              <td colSpan="5">No items in the cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-error" onClick={handleClear}>Clear Cart</button>
    </div>

  );
};

export default Cart;



