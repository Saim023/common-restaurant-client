import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        recipe,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${cartItem.name} added successfully!`,
            width: "400px",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-none">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-2 py-2 px-4 text-white bg-slate-700 opacity-80">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100 text-orange-400 border-orange-400 hover:bg-slate-200 hover:text-orange-600 hover:border-orange-600 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
