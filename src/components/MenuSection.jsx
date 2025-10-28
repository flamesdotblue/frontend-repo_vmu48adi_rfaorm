import React from 'react';

const SectionBlock = ({ title, items }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
    <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex items-start justify-between gap-3">
          <div>
            <p className="text-white font-medium">{it.name}</p>
            <p className="text-white/60 text-sm">{it.desc}</p>
          </div>
          <span className="text-amber-400 font-semibold whitespace-nowrap">{it.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MenuSection = () => {
  const entrees = [
    { name: 'Velouté de potimarron', desc: 'Crème légère à la muscade, noisettes torréfiées', price: '9€' },
    { name: 'Tartare de saumon', desc: 'Citron vert, aneth, grenade', price: '12€' },
  ];
  const plats = [
    { name: 'Filet de bœuf (halal)', desc: 'Jus corsé, écrasé de pommes de terre, légumes de saison', price: '24€' },
    { name: 'Suprême de volaille (halal)', desc: 'Sauce aux morilles, tagliatelles fraîches', price: '20€' },
  ];
  const desserts = [
    { name: 'Tarte au citron revisitée', desc: 'Meringue italienne, zeste confit', price: '8€' },
    { name: 'Moelleux chocolat', desc: 'Cœur fondant, glace vanille', price: '8€' },
  ];
  const boissons = [
    { name: 'Mocktail Moonlight', desc: 'Citron, basilic, sirop maison, ginger beer', price: '7€' },
    { name: 'IPA sans alcool', desc: 'Houblons aromatiques, finale sèche', price: '6€' },
    { name: 'Vin blanc sans alcool', desc: 'Arômes floraux, belle fraîcheur', price: '7€' },
  ];

  return (
    <section id="carte" className="relative bg-[#0f0f0f] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">La carte</h2>
          <p className="mt-3 text-white/70">Plats français revisités, produits frais et saveurs élégantes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionBlock title="Entrées" items={entrees} />
          <SectionBlock title="Plats" items={plats} />
          <SectionBlock title="Desserts" items={desserts} />
          <SectionBlock title="Sans alcool" items={boissons} />
        </div>

        <div className="mt-12 rounded-xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=2070&auto=format&fit=crop"
            alt="Assortiment de plats"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
