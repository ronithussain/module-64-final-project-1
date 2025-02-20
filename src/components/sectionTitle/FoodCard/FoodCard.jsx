import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, recipe, price, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart(); // data jeno cart e click korar sathe sathe ui the update hoy tai jonno refetch k useCart hook theke ana holo.

    const handleAddToCart = food => {
        if(user && user?.email){

            // send cart item to the database
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                      // refetch ke call kore deya holo jeno ui te update reload charai hoy
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logged In!"
              }).then((result) => {
                if (result.isConfirmed) {
                // send the user to the login page
                navigate('/login', {state: {from:location}})
                }
              });
        }
    }
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
                        <button 
                        onClick={()=> handleAddToCart(item)}
                        className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;