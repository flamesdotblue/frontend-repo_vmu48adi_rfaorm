import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ReservationContactSection from './components/ReservationContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter','Manrope',sans-serif]">
      <Header />
      <AboutSection />
      <MenuSection />
      <ReservationContactSection />
      <footer className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Moon Restaurant — Cuisine française halal à Villeurbanne, près de Lyon.</p>
          <p className="mt-2">Design chic et sobre — noir, anthracite et touches dorées.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
