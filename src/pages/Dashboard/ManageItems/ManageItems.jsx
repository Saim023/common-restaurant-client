import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      text: `Delete ${item.name}?`,
      icon: "warning",
      width: 400,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            if (loading) {
              <progress className="progress w-56"></progress>;
            }
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} deleted successfully`,
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
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <h1 className="text-2xl mt-3 mb-3">Total items: {menu.length}</h1>
        <div className="overflow-y-auto max-h-[500px]">
          <table className="table">
            <thead>
              <tr className="bg-[#D1A054] font-[Cinzel-decorative] uppercase font-bold text-white sticky top-0 z-10">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Menu item image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/update/${item._id}`}>
                      <button className="btn btn-sm btn-ghost text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85">
                        <FaRegPenToSquare></FaRegPenToSquare>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
