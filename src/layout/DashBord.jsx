import { NavLink, Outlet } from "react-router-dom";
import { FaHome, ImSpoonKnife } from "react-icons/all";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";

const DashBord = () => {


  // const isAdmin = true;
  const isAdmin = useAdmin()


  return (
    <>
      <Helmet>
        <title>Bistro Boss Restuarant || dashBord </title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content uppercase bg-[#D1A054]">
            <h1 className="font-bold text-2xl capitalize">
              Bistro Boss <br />{" "}
              <span className="text-xl tracking-[.25em]">Restrurant</span>
            </h1>

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="#">
                    {" "}
                    <span className="">
                      <FaHome></FaHome>
                    </span>{" "}
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBord/addFood">
                    {" "}
                    <span>
                      <ImSpoonKnife></ImSpoonKnife>
                    </span>{" "}
                    Add Food
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">Manage Food</NavLink>
                </li>
                <li>
                  <NavLink to="#">manage bookings</NavLink>
                </li>
                <li>
                  <NavLink to="/dashBord/allUsers">All Users</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="#">
                    {" "}
                    <span className="">
                      <FaHome></FaHome>
                    </span>{" "}
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="3">
                    {" "}
                    <span>
                      <ImSpoonKnife></ImSpoonKnife>
                    </span>{" "}
                    reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="3">
                    {" "}
                    <span>
                      <ImSpoonKnife></ImSpoonKnife>
                    </span>{" "}
                    payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBord/myCart">My Cart</NavLink>
                </li>
                <li>
                  <NavLink to="#">add review</NavLink>
                </li>
                <li>
                  <NavLink to="#">my bookings</NavLink>
                </li>
              </>
            )}

           

            <div className="divider"></div>

            <li>
              <NavLink to="#">home</NavLink>
            </li>
            <li>
              <NavLink to="#">menu</NavLink>
            </li>
            <li>
              <NavLink to="#">order</NavLink>
            </li>
            <li>
              <NavLink to="#">contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBord;
