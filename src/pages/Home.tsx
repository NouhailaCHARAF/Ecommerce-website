

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandDealBanner from '../components/Section'
import ShopByCategory from '../components/Category'
import CustomerReviews from '../components/Avis'
import WhyChooseUs from '../components/autre'
import Footer from '../components/Footer'






export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <Brands />
       <ShopByCategory />
      <FeaturedProducts />
      <BrandDealBanner />
      <CustomerReviews />
      <WhyChooseUs />
       <Footer />
    </>
    
  );
}