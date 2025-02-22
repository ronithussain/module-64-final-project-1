import { FaDollarSign, FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure(); // deleted request pathanor jonno ai baseURL diye server e request pathano holo

    const handleDelete = (id) => {
        // console.log('deleted', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            }
            // deleted cart item-------------
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch(); // deleted jeno ui te update hoy sejonno refetch call kore holo
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        });
    }

    return (
        <div className="bg-base-300 px-6 py-6">
            <SectionTitle subHeading="My Cart" heading="wanna add more?"></SectionTitle>
            <div className="flex justify-between items-center md:flex-wrap">
                <h2 className="text-4xl md:text-3xl">Total Orders: {cart.length}</h2>
                <h2 className="text-4xl md:text-3xl flex items-center">Total Price:<FaDollarSign /> {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto mt-8 w-full">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-orange-300 border-4 border-orange-400">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost text-lg bg-orange-400 text-white"><FaTrash></FaTrash> </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;