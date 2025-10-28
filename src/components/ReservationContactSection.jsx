import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const ReservationContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', people: 2, message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      alert('Merci de compléter les champs obligatoires.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reservations" className="relative bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Réserver une table</h2>
            <p className="mt-3 text-white/70">Simple et rapide. Nous confirmons votre réservation par téléphone.</p>
            <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <label className="text-sm text-white/70">Nom complet</label>
                <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-sm text-white/70">Téléphone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="06 00 00 00 00" />
              </div>
              <div>
                <label className="text-sm text-white/70">Date</label>
                <input type="date" name="date" value={form.date} onChange={onChange} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-white/70">Heure</label>
                <input type="time" name="time" value={form.time} onChange={onChange} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-white/70">Nombre de couverts</label>
                <select name="people" value={form.people} onChange={onChange} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i+1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Message (optionnel)</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Allergies, préférences..." />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <button type="submit" className="inline-flex px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors">Confirmer la demande</button>
                {submitted && <span className="text-emerald-400 text-sm">Merci ! Nous vous recontactons rapidement.</span>}
              </div>
            </form>
          </div>

          <div id="contact">
            <h3 className="text-2xl font-semibold">Contact & Accès</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-400 mt-1" size={18} />
                <p className="text-white/80">Moon Restaurant — Villeurbanne, près de Lyon</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-amber-400 mt-1" size={18} />
                <a href="tel:+33400000000" className="text-white/80 hover:text-amber-400">+33 4 00 00 00 00</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-amber-400 mt-1" size={18} />
                <p className="text-white/80">Du mardi au dimanche — 12:00–14:30 / 19:00–23:00</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={18} className="text-amber-400" /> Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={18} className="text-amber-400" /> Facebook
              </a>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Villeurbanne&z=14&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-white">Avis clients</h4>
              <ul className="mt-3 space-y-3 text-white/80 text-sm">
                <li>“Excellent du début à la fin. Ambiance cosy et plats délicieux.” — Sarah</li>
                <li>“Cuisine française halal raffinée, service impeccable.” — Mehdi</li>
                <li>“Mocktails originaux et desserts à tomber.” — Lina</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationContactSection;
