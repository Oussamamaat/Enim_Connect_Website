import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RechercheStages() {
  const [query, setQuery] = useState('');

  return (
    <main className="min-h-screen">
      {/* Sticky Search Header */}
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="max-w-5xl">
          <h1 className="font-headline font-bold text-2xl text-on-surface mb-4">Recherche de stages</h1>
          {/* Search bar */}
          <div className="flex items-center gap-3 bg-surface-container-low border border-outline-variant rounded-2xl px-5 py-3.5 shadow-sm focus-within:border-primary transition-colors mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-2xl">search</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Développeur, Data Science, Marketing… entreprise, ville"
              className="flex-1 bg-transparent text-base text-on-surface placeholder-on-surface-variant outline-none"
            />
            <button className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Rechercher
            </button>
          </div>
          {/* Quick filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-on-surface-variant mr-1">Filtres rapides :</span>
            {['Tous', 'Développement', 'Data & IA', 'Design', 'Marketing', 'Finance', 'Casablanca', 'Rabat', 'Hybride', 'Télétravail'].map((f, i) => (
              <button
                key={f}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                  i === 0
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

      {/* Main grid */}
      <div className="px-10 py-6 grid grid-cols-12 gap-6">
        {/* Results list — 8 cols */}
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-on-surface-variant">
              <span className="font-semibold text-on-surface">3</span> offres trouvées
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-on-surface-variant">Trier par :</span>
              <select className="text-sm text-on-surface bg-surface-container border border-outline-variant rounded-xl px-3 py-1.5 outline-none cursor-pointer">
                <option>Pertinence IA</option>
                <option>Date</option>
                <option>Entreprise</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {/* Offer Card 1 */}
            <Link to="/etudiant/offre/1" className="block bg-surface-container-low rounded-2xl p-6 border border-outline-variant hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 flex-shrink-0">TW</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-on-surface">Stage Développeur Full-Stack</h3>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">96% match</span>
                    </div>
                    <div className="text-sm text-on-surface-variant mb-3">TechWave Morocco · Casablanca · Présentiel</div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">React</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">Node.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">MongoDB</span>
                      <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded-lg">6 mois</span>
                    </div>
                    <p className="text-sm text-on-surface-variant line-clamp-2">
                      Rejoignez notre équipe dynamique pour développer des applications web modernes. Vous travaillerez sur des projets innovants avec une stack technique de pointe.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                  <button className="w-9 h-9 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant text-xl">bookmark_border</span>
                  </button>
                  <span className="text-xs text-on-surface-variant">Il y a 2j</span>
                </div>
              </div>
            </Link>

            {/* Offer Card 2 */}
            <Link to="/etudiant/offre/2" className="block bg-surface-container-low rounded-2xl p-6 border border-outline-variant hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center font-bold text-purple-600 flex-shrink-0">DS</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-on-surface">Stage Data Science & ML</h3>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">91% match</span>
                    </div>
                    <div className="text-sm text-on-surface-variant mb-3">DataSphere Labs · Rabat · Hybride</div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">Python</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">Machine Learning</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">TensorFlow</span>
                      <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded-lg">4 mois</span>
                    </div>
                    <p className="text-sm text-on-surface-variant line-clamp-2">
                      Participez à des projets de data science appliquée dans le domaine de la finance et de la santé. Environnement de recherche stimulant.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                  <button className="w-9 h-9 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant text-xl">bookmark_border</span>
                  </button>
                  <span className="text-xs text-on-surface-variant">Il y a 3j</span>
                </div>
              </div>
            </Link>

            {/* Offer Card 3 — AI highlight */}
            <Link to="/etudiant/offre/3" className="block bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-xs font-semibold text-primary">Coup de cœur IA</span>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-outline-variant flex items-center justify-center font-bold text-primary flex-shrink-0">AI</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-on-surface">Stage Intelligence Artificielle & NLP</h3>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">99% match</span>
                    </div>
                    <div className="text-sm text-on-surface-variant mb-3">InnovateTech · Casablanca · Hybride</div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">Python</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">NLP</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">LangChain</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">Transformers</span>
                    </div>
                    <p className="text-sm text-on-surface-variant line-clamp-2">
                      Travaillez sur des modèles de langage avancés et contribuez à des solutions NLP innovantes. Stage idéal pour les passionnés d'IA générative.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                  <button className="w-9 h-9 rounded-xl border border-primary/30 bg-white flex items-center justify-center hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">bookmark_border</span>
                  </button>
                  <span className="text-xs text-on-surface-variant">Nouveau</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Sidebar — 4 cols */}
        <div className="col-span-4 space-y-6">
          {/* Advanced filters */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">tune</span>
              Filtres avancés
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Domaine</label>
                <div className="space-y-1.5">
                  {['Développement web', 'Data & IA', 'Design UX/UI', 'Marketing digital'].map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
                      <span className="text-sm text-on-surface">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-outline-variant"></div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Durée</label>
                <div className="space-y-1.5">
                  {['1-3 mois', '3-6 mois', '6+ mois'].map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
                      <span className="text-sm text-on-surface">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-outline-variant"></div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Modalité</label>
                <div className="space-y-1.5">
                  {['Présentiel', 'Hybride', 'Télétravail'].map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
                      <span className="text-sm text-on-surface">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button className="w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Appliquer les filtres
              </button>
            </div>
          </div>

          {/* AI Insights panel */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-semibold text-primary">Insights IA</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Tendance du marché</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">Les compétences en IA générative sont en forte demande — +45% d'offres cette année.</div>
              </div>
              <div className="bg-white/60 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Conseil personnalisé</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">Ajoutez "Docker" à votre profil pour débloquer 12 nouvelles offres compatibles.</div>
              </div>
              <div className="bg-white/60 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Meilleur moment</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">Postulez en début de semaine — vos candidatures ont 2x plus de chances d'être lues.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
