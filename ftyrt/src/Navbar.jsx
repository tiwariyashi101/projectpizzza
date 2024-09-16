import { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "./utility/ThemeContext.jsx";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);
  const cartData = useSelector((state) => state.cart.items);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const darkTheme = "navbar bg-black text-white";
  const lightTheme = "navbar bg-base-100";

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <Link className="btn btn-ghost text-xl" to="/">
        One Kart
      </Link>
      <div className="flex flex-row justify-end gap-4 p-4">
        <p>
          <Link to="/about">
            <IoMdHome />
          </Link>
        </p>
        <p>
          <Link to="/cart">
            <FaCartShopping /> <sup>{cartData.length}</sup>
          </Link>
        </p>
        <p>
          <Link to="/food">
            <PiBowlFood />
          </Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
      <input
        type="checkbox"
        className="toggle theme-controller"
        checked={theme === "dark"}
        onChange={handleClick}
      />
    </div>
  );
};

export default Navbar;
