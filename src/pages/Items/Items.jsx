import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";

const TotalItems = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="">
      <div className="grid md:grid-cols-4 items-center justify-center gap-6 mb-2">
        {currentItem?.map((item) => (
          <div
            key={item._id}
            className="mt-16 card card-compact bg-base-100 shadow-xl rounded-none"
          >
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <p className="absolute right-0 mr-4 mt-2 py-2 px-4 text-white bg-slate-700 opacity-80">
              ${item.price}
            </p>
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions justify-end">
                <buttons className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100 text-orange-400 border-orange-400 hover:bg-slate-200 hover:text-orange-600 hover:border-orange-600 ">
                  Add to Cart
                </buttons>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {currentItem.length ? (
          <>
            <Pagination
              totalItems={items.length}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            ></Pagination>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TotalItems;
