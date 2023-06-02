import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({ items }) => {
  const [,refetch] = useCart()
  const { price, name, recipe, image, _id } = items;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickOrder = () => {
    if (user && user.email) {
      console.log(user.email);
      const orderItem = {
        menuItem: _id,
        price,
        name,
        image,
        email: user.email,
      };


      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Order added SuccessFully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(navigate("/login"));
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={image} className="rounded-md" />
      </figure>
      <p>${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-black">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleClickOrder(items)}
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
