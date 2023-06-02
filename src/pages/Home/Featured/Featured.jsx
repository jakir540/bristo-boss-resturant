import SectionTitle from "../../../components/SectionTitle";
import imageFeatured from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
   <div className="featured-item bg-fixed">
     <div className="  my-16 py-16 px-24">
      <SectionTitle
        subHeading="Check It Out"
        heading="From Our Menu"
      ></SectionTitle>

      <div className="flex justify-center items-center px-5">
        <div>
          <img src={imageFeatured} alt="" />
        </div>
        <div className="md:ml-10 px-5 py-3 text-white bg-slate-600 bg-opacity-30">
          <p className="">March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ratione nisi alias, hic tempore dolorum nulla placeat aspernatur
            enim iste odio a quisquam? Ea cum fugit perspiciatis incidunt,
            debitis non, deserunt rerum ipsum blanditiis eligendi error!
            Facilis, pariatur vero, qui molestias commodi aliquam eligendi
            nihil, harum obcaecati distinctio alias est.
          </p>
          <button className="mt-5 btn btn-outline border-b-2 border-0">
        Read More
      </button>
        </div>
       
      </div>
      
    </div>
   </div>
  );
};

export default Featured;
