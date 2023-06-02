import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  // console.log(cart);
  const navOptions = (
    <>
      
      <li>
        <a>
          <Link to="/">Home</Link>
        </a>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/desserts">Order</Link>
      </li>
      <li>
        <Link to="/sicrate">Sicrate</Link>
      </li>

      {user ? (
        <>
        <span>{user && user.displayName}</span>
          <button
            onClick={handleLogOut}
            className="btn btn-sm mt-3 bg-orange-700"
          >
            Logout
          </button>
         
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

      <li>
        <Link to="/signup">SignUp</Link>
      </li>

      <li>
        <Link to="/dashBord">
          <button className="btn btn-sm gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary text-sm">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
  <div className="flex justify-center items-center">
      <div className="navbar bg-red-500 text-white  flex justify-center items-center opacity-70 fixed z-50 top-0">
      <div className="navbar-start mx-auto ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* menuItem   */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="font-semibold normal-case text-2xl ">Bistro Boss </a>
      </div>
      {/* MemnuItem */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
     
    </div>
  </div>
  );
};

export default Navbar;
