const ChefCard = ({cardItems}) => {
    const {price,name,recipe,image}=cardItems
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-1 pt-5">
        <img
          src={image}
          alt="Chef Recomends"
          className="rounded-md"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="text-orange-500">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
