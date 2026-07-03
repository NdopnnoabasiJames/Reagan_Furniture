import { Routes, Route } from 'react-router-dom';

import ScrollToTop        from './components/ScrollToTop';
import Navbar             from './components/Navbar';
import Hero               from './components/Hero';
import Marquee            from './components/Marquee';
import CategorySection    from './components/CategorySection';
import SpacesSection      from './components/SpacesSection';
import FeaturedProducts   from './components/FeaturedProducts';
import QualitySection     from './components/QualitySection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection         from './components/FAQSection';
import ContactSection     from './components/ContactSection';
import Footer             from './components/Footer';
import Reveal             from './components/ui/Reveal';

import ProductsPage       from './pages/ProductsPage';
import ProductDetailPage  from './pages/ProductDetailPage';
import CategoriesPage     from './pages/CategoriesPage';
import AboutPage          from './pages/AboutPage';
import ContactPage        from './pages/ContactPage';

const HomePage = () => (
  <>
    <Navbar />
    <main className="page-enter">
      <Hero />
      <Marquee />
      <CategorySection />
      <Reveal><SpacesSection /></Reveal>
      <FeaturedProducts />
      <Reveal><QualitySection /></Reveal>
      <Reveal><TestimonialSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/categories"   element={<CategoriesPage />} />
        <Route path="/products"     element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/contact"      element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
