import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ChefCard from "./ChefCard";

const ChefRecomends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-4 my-10  ">
        {menu.map((item) => (
          <ChefCard key={item._id} cardItems={item}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomends;
