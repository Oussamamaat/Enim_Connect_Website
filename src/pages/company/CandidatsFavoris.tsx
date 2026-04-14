import { useState } from 'react';
import { Link } from 'react-router-dom';

const CANDIDATES = [
  {
    id: 1,
    name: 'Lucas Martin',
    title: 'Étudiant Ingénieur IA — ENIM',
    score: 99,
    skills: ['Python', 'NLP', 'React'],
    location: 'Meknès',
    initials: 'LM',
    color: 'from-primary to-secondary',
    available: 'Mai 2026',
  },
  {
    id: 2,
    name: 'Yasmine Idrissi',
    title: 'Master Data Science — EMI Rabat',
    score: 95,
    skills: ['Python', 'Spark', 'SQL'],
    location: 'Rabat',
    initials: 'YI',
    color: 'from-secondary to-purple-500',
    available: 'Juin 2026',
  },
  {
    id: 3,
    name: 'Omar Benali',
    title: 'Master Design UX — ENA Casablanca',
    score: 91,
    skills: ['Figma', 'Adobe XD', 'CSS'],
    location: 'Casablanca',
    initials: 'OB',
    color: 'from-tertiary to-tertiary-container',
    available: 'Immédiat',
  },
  {
    id: 4,
    name: 'Karim Zouahri',
    title: 'Ingénieur DevOps — INSEA',
    score: 88,
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    location: 'Rabat',
    initials: 'KZ',
    color: 'from-green-500 to-teal-500',
    available: 'Juil. 2026',
  },
  {
    id: 5,
    name: 'Sara Alaoui',
    title: 'Master Marketing Digital — ENCG Fès',
    score: 84,
    skills: ['SEO', 'Analytics', 'Content'],
    location: 'Fès',
    initials: 'SA',
    color: 'from-orange-500 to-amber-400',
    available: 'Mai 2026',
  },
];

export default function CandidatsFavoris() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Développement', 'Data & IA', 'Design', 'Marketing'];

  return (
    <div className="flex-grow ml-0 flex flex-col min-h-screen">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-headline font-bold text-2xl text-on-surface">Candidats favoris</h1>
            <p className="text-sm text-on-surface-variant mt-0.5">{CANDIDATES.length} candidats sauvegardés</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="text-sm font-medium text-primary">Triés par score IA</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="flex items-center gap-2 bg-surface-container border border-outline-variant rounded-xl px-3 py-2 w-64">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un candidat…"
              className="bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none w-full"
            />
          </div>
          {/* Domain filters */}
          <div className="flex gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeFilter === f
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bento grid of candidate cards */}
      <div className="px-10 py-6 grid grid-cols-3 gap-4">
        {CANDIDATES.map((c) => (
          <div key={c.id} className="bg-surface-container-low rounded-2xl border border-outline-variant p-5 hover:border-primary/30 hover:shadow-md transition-all">
            {/* Card header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {c.initials}
                </div>
                <div>
                  <div className="font-semibold text-on-surface text-sm leading-tight">{c.name}</div>
                  <div className="text-xs text-on-surface-variant leading-tight mt-0.5">{c.title}</div>
                </div>
              </div>
              <button className="w-8 h-8 rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </button>
            </div>

            {/* AI score */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                  style={{ width: `${c.score}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-green-600">{c.score}%</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {c.skills.map((s) => (
                <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">{s}</span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-on-surface-variant mb-4">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {c.location}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">event_available</span>
                Dispo : {c.available}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Link
                to={`/etudiant/profil/${c.id}`}
                className="flex-1 text-center py-2 text-xs font-semibold text-primary bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
              >
                Voir le profil
              </Link>
              <button className="flex-1 py-2 text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:opacity-90 transition-opacity">
                Contacter
              </button>
            </div>
          </div>
        ))}

        {/* Empty state / add more card */}
        <div className="bg-surface-container-low rounded-2xl border border-dashed border-outline-variant p-5 flex flex-col items-center justify-center text-center min-h-48">
          <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-on-surface-variant text-2xl">person_add</span>
          </div>
          <div className="text-sm font-semibold text-on-surface mb-1">Ajouter des candidats</div>
          <div className="text-xs text-on-surface-variant mb-4 leading-relaxed">
            Parcourez les candidatures reçues et sauvegardez vos profils favoris.
          </div>
          <Link
            to="/entreprise/tableau-de-bord"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            Voir les candidatures
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
