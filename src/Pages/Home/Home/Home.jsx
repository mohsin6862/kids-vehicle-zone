import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import HotDealSection from '../HotDealSection/HotDealSection';
import ShopByCategory from '../ShopByCategory/shopByCategory';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import CustomerReviewSection from '../CustomerReviewSection/CustomerReviewSection';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <BannerCarousel></BannerCarousel>
            <HotDealSection></HotDealSection>
            <ShopByCategory></ShopByCategory>
            <FeaturedProduct></FeaturedProduct>
            <CustomerReviewSection></CustomerReviewSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;