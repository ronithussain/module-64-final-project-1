import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const handleLogout = () => {
        signOutUser()
        .then(result => {})
        .catch(error => console.log(error.message))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        {
            user? <>
            <span className='text-xs'>{user?.displayName}</span>
            <button 
            onClick={handleLogout}
            className='btn btn-ghost'>SignOut</button>
            </> 
            : 
            <>
            <li><Link to="/login">Login</Link></li>
            </>
        }



    </>
    return (
        <>
            <div className="fixed z-10 opacity-30 w-9/12 text-white  bg-opacity-30 navbar bg-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl ">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;