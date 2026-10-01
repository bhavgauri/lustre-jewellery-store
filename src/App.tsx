import './App.css';
import { useReveal } from '@/hooks/use-reveal';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';
import { NewArrivals } from '@/components/sections/NewArrivals';
import { BrandStory } from '@/components/sections/BrandStory';
import { BestSellers } from '@/components/sections/BestSellers';
import { PromoBanner } from '@/components/sections/PromoBanner';
import { Testimonials } from '@/components/sections/Testimonials';
import { InstagramGallery } from '@/components/sections/InstagramGallery';
import { Newsletter } from '@/components/sections/Newsletter';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <BrandStory />
        <BestSellers />
        <PromoBanner />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
