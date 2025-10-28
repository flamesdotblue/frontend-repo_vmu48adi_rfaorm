import React from 'react';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
    <div className="flex items-center gap-3 text-amber-400">
      <Icon size={20} />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="mt-3 text-white/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="a-propos" className="relative bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Notre histoire</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Né d'une passion pour la gastronomie française et d'un profond respect des traditions culinaires halal, Moon Restaurant vous accueille à Villeurbanne, à deux pas de Lyon. Notre équipe sélectionne des produits frais et de saison pour une cuisine élégante, savoureuse et responsable.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <ValueCard icon={Sparkles} title="Qualité" description="Sélection rigoureuse des produits, cuisson maîtrisée, dressage soigné." />
              <ValueCard icon={Leaf} title="Fraîcheur" description="Ingrédients de saison, circuits courts et respect des saveurs." />
              <ValueCard icon={ShieldCheck} title="Halal" description="Traçabilité et respect des pratiques halal, sans compromis." />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img className="col-span-2 rounded-xl object-cover h-64 sm:h-80 w-full" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1974&auto=format&fit=crop" alt="Plat gastronomique" />
            <img className="col-span-1 rounded-xl object-cover h-64 sm:h-80 w-full" src="https://images.unsplash.com/photo-1682609278063-c18fff456b84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbWJpYW5jZSUyMGludCVDMyVBOXJpZXVyZXxlbnwwfDB8fHwxNzYxNjU5MTk4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ambiance intérieure" />
            <img className="col-span-1 rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2072&auto=format&fit=crop" alt="Salle de restaurant" />
            <img className="col-span-2 rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Dessert raffiné" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
