import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { productData } from './data/productData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main>
        <Hero content={productData.hero} />
        <Features content={productData.features} />
        <Testimonials content={productData.testimonials} />
        <FAQ content={productData.faq} />
      </main>
      <Footer />
      <AIChat 
        productContext={JSON.stringify(productData, null, 2)} 
        aiConfig={productData.aiAssistant}
      />
    </div>
  );
};

export default App;