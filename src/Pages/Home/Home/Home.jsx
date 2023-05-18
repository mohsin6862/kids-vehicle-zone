import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import HotDealSection from '../HotDealSection/HotDealSection';
import ShopByCategory from '../ShopByCategory/shopByCategory';

const Home = () => {
    return (
        <div>
            <BannerCarousel></BannerCarousel>
            <HotDealSection></HotDealSection>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;