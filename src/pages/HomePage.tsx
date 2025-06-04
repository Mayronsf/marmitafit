import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CategoryList from '../components/home/CategoryList';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <CategoryList />
      <Testimonials />
    </div>
  );
};

export default HomePage;