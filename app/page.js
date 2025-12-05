import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompareSection from '@/components/CompareSection';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import BeforeYouBuy from '@/components/BeforeYouBuy';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="compare">
        <CompareSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="before-you-buy">
        <BeforeYouBuy />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}

