import React from "react";

const FoodCard = ({ item }) => {
	const { name, image, price, recipe } = item;

	return (
		<div className="card card-compact bg-base-100 w-96 shadow-xl rounded-none">
			<figure>
				<img src={image} alt="Shoes" />
			</figure>
			<p className="absolute right-0 mr-4 mt-2 py-2 px-4 text-white bg-slate-700 opacity-80">${price}</p>
			<div className="card-body flex flex-col items-center justify-center">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100 text-orange-400 border-orange-400 hover:bg-slate-200 hover:text-orange-600 hover:border-orange-600 ">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
