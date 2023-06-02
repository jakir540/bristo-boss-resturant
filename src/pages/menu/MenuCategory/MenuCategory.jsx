import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({items,img , title}) => {
    console.log(items)
  return (
    <div>
    {
      title &&  <Cover img={img} title={title}></Cover>
    }
      <div className="grid grid-cols-2 gap-2 my-10  ">
        {items.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>
   <Link to={`/order/${title}`}>   <button className="my-5 btn btn-outline border-b-2 border-0">
        Buy Now
      </button></Link>
    </div>
  );
};

export default MenuCategory;
