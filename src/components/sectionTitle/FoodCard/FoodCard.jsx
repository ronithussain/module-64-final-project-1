

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className="mt-12">
            <div className="card bg-base-100  shadow-sm">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className=" w-[100%]" />
                </figure>
                    <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-2 rounded-xs">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;