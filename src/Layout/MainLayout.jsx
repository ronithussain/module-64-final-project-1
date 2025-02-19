import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
    const location = useLocation();
    // console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer ke na dekhanor jonno conditional rendering kora holo ja logical operator or || use kora hoyeche  */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;