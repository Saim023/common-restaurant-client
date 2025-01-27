import FoodCard from "./../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-16 mt-12 mb-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>

      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-4">
          Pagination Example
        </h1>
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default OrderTab;
