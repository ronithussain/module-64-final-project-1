import React from 'react';
import Banner from '../Banner';
import Category from '../Category';
import PopularMenu from '../PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;