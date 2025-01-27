import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle heading="Add Items" subHeading="What's New?"></SectionTitle>
      <div className="w-[800px] mt-8 mb-8">
        <form className=" bg-[#F3F3F3] p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              className="form-control label-text mb-2 text-base"
              htmlFor="recipe"
            >
              Recipe Name*
            </label>
            <input
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6 mb-6">
            <div className="w-full">
              <label
                className="form-control label-text mb-2 text-base"
                htmlFor="category"
              >
                Category*
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-full">
              <label
                className="form-control label-text mb-2 text-base"
                htmlFor="price"
              >
                Price*
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                defaultValue="$"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="form-control label-text mb-2 text-base"
              htmlFor="details"
            >
              Recipe Details*
            </label>
            <textarea
              {...register("details", { required: true })}
              placeholder="Recipe details"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            <input
              type="file"
              className="mt-3 file:bg-[#eae5e5] file:text-slate-800
            file:mr-5 file:py-2 file:px-4 file:border-0
            hover:file:cursor-pointer file:hover:bg-[#dbd6d6]
            "
            />
          </div>
          <button className="btn text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
