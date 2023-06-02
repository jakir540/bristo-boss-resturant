

const MenuItem = ({items}) => {
    const {price,name,recipe,image}=items
    return (
        <div  className="flex space-x-2 px-4 items-center justify-between" >
            <div >
                <img style={{borderRadius:"0 200px 200px 200px" , transform:"skew(15deg)"}} className="w-[100px]" src={image} alt="" />
            </div>

            <div>
            <h3 className="uppercase ">{name}..........</h3>
            <p><small>{recipe}</small></p>
            </div>
            <p className="text-orange-500">${price}</p>
        
        </div>
    );
};

export default MenuItem;