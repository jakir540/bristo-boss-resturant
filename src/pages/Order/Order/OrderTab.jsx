import FoodCard from "../../../components/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-8 ">
      {items.map((items) => (
        <FoodCard key={items._id} items={items}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
