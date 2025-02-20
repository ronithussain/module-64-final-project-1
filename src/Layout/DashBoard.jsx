import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import { FaAd, FaCalendar, FaCocktail, FaHome, FaList, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu w-full space-y-4">
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
                        <NavLink to="/" className="text-white font-medium text-xl">
                            <FaShop className="text-white text-xl" />
                             Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="text-white font-medium text-xl">
                            <FaCocktail className="text-white text-xl" />
                             Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <SectionTitle subHeading="My Cart" heading="wanna add more?"></SectionTitle>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;