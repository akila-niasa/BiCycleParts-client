import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs.js/AboutUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../ContactUs/ContactUs';
import Reviews from '../Reviews/Reviews';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <AboutUs/>
            <Reviews/>
            <BusinessSummary/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;