import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu([]);

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-16">
      <SectionTitle
        subHeading="Check It Out"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-2 my-10  ">
        {popular.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>

      <button className=" btn btn-outline border-0  border-b-4">
        View Full Menu
      </button>
    </div>
  );
};

export default PopularMenu;
