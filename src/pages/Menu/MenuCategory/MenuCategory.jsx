import React from "react";
import MenuItem from "./../../Shared/MenuItem/MenuItem";
import Cover from "./../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-8 mb-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline mb-4 border-t-0 border-x-0 hover:bg-[#D1A054]">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
