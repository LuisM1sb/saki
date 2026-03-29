import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
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
