import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PodcastSection from '../components/PodcastSection';
import VideoSection from '../components/VideoSection';
import KitchenSection from '../components/KitchenSection';
import StoriesSection from '../components/StoriesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <PodcastSection />
        <VideoSection />
        <KitchenSection />
        <StoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;