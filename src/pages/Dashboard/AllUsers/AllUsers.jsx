import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   Make Admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        console.log(res.data);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //   Delete user
  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              text: `${user.email} deleted successfully`,
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
      <div>
        <SectionTitle
          subHeading={"How Many??"}
          heading={"Manage All Users"}
        ></SectionTitle>
      </div>
      <div className="flex items-center justify-between uppercase font-bold font-[Cinzel-decorative] mb-4">
        <h1>Total Users: {users.length}</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] font-[Cinzel-decorative] uppercase font-bold text-white sticky top-0 z-10">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="hover" key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {" "}
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <FiUsers className="text-white"></FiUsers>
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-sm text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <FaTrashAlt className="text-white "></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
