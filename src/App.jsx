import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Saki Lab - Estudio de Diseño para Emprendedores</title>
        <meta name="description" content="Estudio de diseño profesional especializado en emprendedores. Planes económicos para diseño web, SEO y marketing digital." />
        <meta name="keywords" content="diseño emprendedor, planes económicos, startups, diseño web, SEO, marketing digital" />
        <meta property="og:title" content="Saki Lab - Estudio de Diseño para Emprendedores" />
        <meta property="og:description" content="Transformamos ideas en realidad digital. Planes económicos para emprendedores y startups." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saki Lab - Estudio de Diseño para Emprendedores" />
        <meta name="twitter:description" content="Transformamos ideas en realidad digital. Planes económicos para emprendedores y startups." />
      </Helmet>
      
      <div className="min-h-screen bg-deep-blue">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Contact />
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
