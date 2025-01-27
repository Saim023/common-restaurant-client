import React from "react";
import { FaUtensils } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiOutlineShoppingBag, HiOutlineUsers } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { IoIosContacts } from "react-icons/io";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import {
  MdMenu,
  MdOutlineMail,
  MdOutlinePayments,
  MdOutlineReviews,
} from "react-icons/md";
import {
  PiCalendarDuotone,
  PiForkKnifeLight,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import { SlCalender, SlHome } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-72 min-h-screen p-4 bg-[#D1A054]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mx-6 font-[Cinzel-decorative]">
            ZOLOX SPICE
          </h1>
          <h3 className="tracking-[.39em] mx-6 font-[Cinzel-decorative]">
            RESTAURANT
          </h3>
        </div>
        <ul className="menu uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <IoHomeOutline></IoHomeOutline>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <PiForkKnifeLight></PiForkKnifeLight>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <TfiMenuAlt></TfiMenuAlt>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <LuNotebookPen></LuNotebookPen>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FiUsers></FiUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <IoHomeOutline></IoHomeOutline>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart">
                  <IoCartOutline></IoCartOutline>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <PiCalendarDuotone></PiCalendarDuotone>
                  My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <SlCalender></SlCalender>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <MdOutlinePayments></MdOutlinePayments>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineReviews></MdOutlineReviews>
                  Add Review
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="divider"></div>

        {/* Shared Options */}
        <ul className="menu uppercase">
          <li>
            <NavLink to="/">
              <SlHome></SlHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdMenu></MdMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdOutlineMail></MdOutlineMail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-24">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
