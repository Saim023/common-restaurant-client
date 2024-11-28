import { useState } from "react";
import FoodCard from "./../../../Components/FoodCard/FoodCard";
import Pagination from "./../../../Components/Pagination/Pagination";

const OrderTab = ({ items }) => {
	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	// const [itemPerPage, setItemPerPage] = useState(6);
	const totalPages = 10;

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	// const lastItemIndex = currentPage * itemPerPage;
	// const firstItemIndex = lastItemIndex - itemPerPage;
	// const currentItems = items.slice(firstItemIndex, lastItemIndex);

	return (
		<div>
			<div className="grid md:grid-cols-3 gap-16 mt-12 mb-10">
				{items.map((item) => (
					<FoodCard key={item._id} item={item}></FoodCard>
				))}
			</div>

			<div className="container mx-auto">
				<h1 className="text-2xl font-bold text-center my-4">Pagination Example</h1>
				<div className="text-center">
					<p>Current Page: {currentPage}</p>
					<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
				</div>
			</div>
		</div>
	);
};

export default OrderTab;
