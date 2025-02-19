import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce(
    (total, item) => total + (Number(item.price) || 0),
    0
  );

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      width: "400px",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              text: `Item deleted successfully`,
              icon: "success",
              width: "400px",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"Wanna Add More?"}
      ></SectionTitle>

      <div className="overflow-x-auto mt-12">
        <div className="flex items-center justify-between uppercase font-bold font-[Cinzel-decorative] mb-4">
          <h1>Total Orders: {cart?.length}</h1>
          <h1>
            Total Price: ${isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
          </h1>

          {cart?.length ? (
            <Link to="/dashboard/payment">
              <button
                className={`btn btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85 ${
                  cart.length > 6 ? "mr-4" : ""
                }`}
              >
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className={`btn btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85 ${
                cart.length > 6 ? "mr-4" : ""
              }`}
            >
              Pay
            </button>
          )}
        </div>
        <div className="overflow-y-auto max-h-[500px] ">
          <table className="table">
            <thead>
              <tr className="bg-[#D1A054] font-[Cinzel-decorative] uppercase font-bold text-white sticky top-0 z-10">
                <th>
                  <label>#</label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask h-12 w-12">
                          <img src={item.image} alt="Food Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85"
                      onClick={() => handleDeleteCart(item._id)}
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
