import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Portfolio from './pages/Portfolio';
import PortfolioItem from './pages/PortfolioItem';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Scroll to section when navigating to /#sectionId from another route
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      // Defer until the home route's DOM is rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 64, behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta name="twitter:title" content={t('meta.ogTitle')} />
        <meta name="twitter:description" content={t('meta.ogDescription')} />
      </Helmet>
      <div className="min-h-screen bg-deep-blue">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioItem />} />
        </Routes>
        
        <Footer />
      </div>
      <WhatsAppButton />
      {/* Analytics de Vercel */}
      <Analytics />
    </>
  );
}

export default App;
