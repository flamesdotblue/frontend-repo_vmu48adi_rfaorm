import React from 'react';
import { Star, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header id="accueil" className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#accueil" className="font-semibold tracking-wide text-white text-lg">Moon <span className="text-amber-400">Restaurant</span></a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#a-propos" className="hover:text-amber-400 transition-colors">À propos</a></li>
            <li><a href="#carte" className="hover:text-amber-400 transition-colors">Carte</a></li>
            <li><a href="#reservations" className="hover:text-amber-400 transition-colors">Réservations</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
          </ul>
          <a href="#reservations" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/90 text-black font-medium hover:bg-amber-400 transition-colors">
            <Phone size={16} /> Réserver
          </a>
        </div>
      </nav>

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2072&auto=format&fit=crop"
          alt="Ambiance du restaurant"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-400">
            <Star size={16} className="fill-amber-400" />
            <span className="uppercase tracking-widest text-xs">Cuisine française halal</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight">
            Une expérience culinaire halal raffinée au cœur de <span className="text-amber-400">Villeurbanne</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Saveurs françaises revisitées, produits frais et respect des traditions culinaires halal. Ambiance nocturne chaleureuse, éclairage doux et esprit lounge.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#carte" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">Découvrir la carte</a>
            <a href="#reservations" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors">Réserver une table</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
