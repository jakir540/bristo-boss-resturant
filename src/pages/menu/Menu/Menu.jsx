import { Helmet } from "react-helmet-async";

import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restuarant || menu </title>
      </Helmet>
      <Cover img={coverImg} title="our menu"></Cover>
      <SectionTitle
        subHeading="Dont,t missed"
        heading="Today,s Offer"
      ></SectionTitle>
      {/* cover section  */}
      <MenuCategory items={offered}></MenuCategory>

      {/* //desser section */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="dessert"
      ></MenuCategory>
      {/* Pizza section  */}

      <MenuCategory title="pizza" img={pizzaImg} items={pizza}></MenuCategory>
      <MenuCategory title="salads" img={saladsImg} items={salads}> </MenuCategory>
      <MenuCategory title="soups" img={soupsImg} items={soup}> </MenuCategory>
    </div>
  );
};

export default Menu;
