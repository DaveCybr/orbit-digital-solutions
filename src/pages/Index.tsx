import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { Services } from '@/components/landing/Services';
import { Products } from '@/components/landing/Products';
import { TrustIndicators } from '@/components/landing/TrustIndicators';
import { Clients } from '@/components/landing/Clients';
import { Testimonial } from '@/components/landing/Testimonial';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <TrustIndicators />
      <Clients />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
