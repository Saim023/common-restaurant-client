import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const { name, recipe, category, price, image, _id } = useLoaderData();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: data.price,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="What's New?"
      ></SectionTitle>
      <div className="w-[800px] mt-8 mb-8">
        <form className=" bg-[#F3F3F3] p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              className="form-control label-text mb-2 text-base"
              htmlFor="name"
            >
              Recipe Name*
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              defaultValue={name}
              className="input input-bordered w-full"
              {...register("name", { required: true })}
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
                className="select select-bordered w-full"
                defaultValue={category}
                {...register("category", { required: true })}
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
                type="text"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="form-control label-text mb-2 text-base"
              htmlFor="recipe"
            >
              Recipe Details*
            </label>
            <textarea
              placeholder="Recipe details"
              defaultValue={recipe}
              className="textarea textarea-bordered textarea-lg w-full"
              {...register("recipe", { required: true })}
            ></textarea>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="mt-3 file:bg-[#eae5e5] file:text-slate-800
        file:mr-5 file:py-2 file:px-4 file:border-0
        hover:file:cursor-pointer file:hover:bg-[#dbd6d6]
        "
            />
          </div>
          <button className="btn text-white uppercase bg-[#D1A054] hover:bg-[#efad4b] hover:opacity-85">
            Update Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
