import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Modal from "../../../Components/CustomModal/Modal";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: `${user?.email} logged out successfully!`,
          showClass: {
            popup: `
				animate__animated
				animate__fadeInUp
				animate__faster
			  `,
          },
          hideClass: {
            popup: `
				animate__animated
				animate__fadeOutDown
				animate__faster
			  `,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/items">Items</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/admin-home">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/user-home">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 text-white bg-[#D1A054]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#D1A054] text-white rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="ml-2 text-xl" to="/">
            ZOLOX SPICE
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="indicator mr-7">
            <span className="indicator-item badge badge-secondary">
              +{cart.length}
            </span>
            <Link to="/dashboard/cart">
              <FaShoppingCart className="mr-5"></FaShoppingCart>
            </Link>
          </div>
          {user?.email ? (
            <>
              <div className="avatar mr-3">
                <div
                  onClick={() => setOpenModal(!openModal)}
                  className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2 hover:cursor-pointer ml-2"
                >
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>

              <div className="">
                <Modal isOpen={openModal}>
                  <img
                    className="w-full h-48"
                    src={user?.photoURL}
                    alt="User image"
                  />
                  <h1 className="py-3 text-center">User Info:</h1>
                  <div className="ml-3">
                    <p> Name: {user?.displayName}</p>
                    <p> Email: {user?.email}</p>
                  </div>
                </Modal>
              </div>
            </>
          ) : (
            <>
              <Link className="mx-2" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
