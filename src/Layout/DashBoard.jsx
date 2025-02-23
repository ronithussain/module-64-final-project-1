import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPaypal, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu w-full space-y-4">
                    {/* admin---------------------------------------------------------------------- */}
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome" className=" font-medium text-xl">
                                        <FaHome className=" text-xl" />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems" className=" font-medium text-xl">
                                        <FaUtensils className=" text-xl" />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems" className=" font-medium text-xl">
                                        <FaList className=" text-xl" />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageBookings" className=" font-medium text-xl">
                                        <FaBook className=" text-xl" />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users" className=" font-medium text-xl">
                                        <FaUser className=" text-xl" />
                                        All Users
                                    </NavLink>
                                </li>

                            </>
                            :
                            <>
                            {/* user----------------------------------------------------------------- */}
                                <li>
                                    <NavLink to="/dashboard/userHome" className="text-white font-medium text-xl">
                                        <FaHome className="text-white text-xl" />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation" className="text-white font-medium text-xl">
                                        <FaCalendar className="text-white text-xl" />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart" className="text-white font-medium text-xl">
                                        <FaShoppingCart className="text-white text-xl" />
                                        My Cart: ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentMethod" className="text-white font-medium text-xl">
                                        <FaPaypal className="text-white text-xl" />
                                        Payment Method
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review" className="text-white font-medium text-xl">
                                        <FaAd className="text-white text-xl" />
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings" className="text-white font-medium text-xl">
                                        <FaList className="text-white text-xl" />
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }




                    {/* ---------------------shared nav links---------------------- */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="text-white font-medium text-xl">
                            <FaHome className="text-white text-xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" className="text-white font-medium text-xl">
                            <FaList className="text-white text-xl" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/shop" className="text-white font-medium text-xl">
                            <FaShop className="text-white text-xl" />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact" className="text-white font-medium text-xl">
                            <FaEnvelope className="text-white text-xl" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;