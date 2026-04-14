import { useState } from 'react';
import { Link } from 'react-router-dom';

const TABS = ['Toutes', 'En cours', 'Entretiens', 'Acceptées', 'Refusées'];

const STATUS_STYLES: Record<string, string> = {
  'En cours': 'bg-blue-50 text-blue-600',
  'Entretien': 'bg-purple-50 text-purple-600',
  'Acceptée': 'bg-green-50 text-green-600',
  'Refusée': 'bg-red-50 text-red-600',
};

export default function MesCandidatures() {
  const [activeTab, setActiveTab] = useState('Toutes');

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-headline font-bold text-2xl text-on-surface">Mes candidatures</h1>
            <p className="text-sm text-on-surface-variant mt-0.5">Suivez l'état de toutes vos candidatures</p>
          </div>
          <Link to="/etudiant/recherche" className="btn-primary">
            <span className="material-symbols-outlined text-xl">add</span>
            Nouvelle candidature
          </Link>
        </div>
        {/* Filter tabs */}
        <div className="flex gap-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="px-10 py-6 grid grid-cols-12 gap-6">
        {/* Applications list — 8 cols */}
        <div className="col-span-8 space-y-4">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 flex-shrink-0 text-sm">TW</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-on-surface">Stage Développeur Full-Stack</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${STATUS_STYLES['En cours']}`}>En cours</span>
                  </div>
                  <div className="text-sm text-on-surface-variant mb-3">TechWave Morocco · Casablanca</div>
                  {/* Progress steps */}
                  <div className="flex items-center gap-1 mb-3">
                    {['Envoyée', 'Vue', 'Entretien', 'Décision'].map((step, i) => (
                      <div key={step} className="flex items-center gap-1">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                          i < 2 ? 'bg-primary/10 text-primary' : 'bg-surface-container text-on-surface-variant'
                        }`}>
                          {i < 2 && <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                          {step}
                        </div>
                        {i < 3 && <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-on-surface-variant">Candidature envoyée le 10 avril 2026</div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <Link to="/etudiant/offre/1" className="btn-ghost text-xs px-3 py-2">
                  Voir l'offre
                </Link>
                <button className="w-9 h-9 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">more_vert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — Entretien */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center font-bold text-purple-600 flex-shrink-0 text-sm">DS</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-on-surface">Stage Data Science & ML</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${STATUS_STYLES['Entretien']}`}>Entretien</span>
                  </div>
                  <div className="text-sm text-on-surface-variant mb-3">DataSphere Labs · Rabat</div>
                  <div className="flex items-center gap-2 mb-3 p-3 bg-purple-50 rounded-xl">
                    <span className="material-symbols-outlined text-purple-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                    <div>
                      <div className="text-xs font-semibold text-purple-600">Entretien planifié</div>
                      <div className="text-xs text-on-surface-variant">Demain, 14 avril 2026 à 14h00 — Visioconférence</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    {['Envoyée', 'Vue', 'Entretien', 'Décision'].map((step, i) => (
                      <div key={step} className="flex items-center gap-1">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                          i < 3 ? 'bg-primary/10 text-primary' : 'bg-surface-container text-on-surface-variant'
                        }`}>
                          {i < 3 && <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                          {step}
                        </div>
                        {i < 3 && <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-on-surface-variant">Candidature envoyée le 7 avril 2026</div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <Link to="/etudiant/offre/2" className="btn-ghost text-xs px-3 py-2">
                  Voir l'offre
                </Link>
                <button className="w-9 h-9 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">more_vert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 — Acceptée */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-green-200 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center font-bold text-green-600 flex-shrink-0 text-sm">IT</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-on-surface">Stage IA & NLP</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${STATUS_STYLES['Acceptée']}`}>Acceptée</span>
                  </div>
                  <div className="text-sm text-on-surface-variant mb-3">InnovateTech · Casablanca · Hybride</div>
                  <div className="flex items-center gap-2 mb-3 p-3 bg-green-50 rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
                    <div>
                      <div className="text-xs font-semibold text-green-600">Félicitations ! Candidature acceptée</div>
                      <div className="text-xs text-on-surface-variant">Début du stage : 1er mai 2026</div>
                    </div>
                  </div>
                  <div className="text-xs text-on-surface-variant">Candidature envoyée le 2 avril 2026</div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <button className="btn-primary text-xs px-3 py-2">
                  <span className="material-symbols-outlined text-base">description</span>
                  Contrat
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 — Refusée */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant opacity-75 hover:opacity-100 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center font-bold text-red-400 flex-shrink-0 text-sm">AC</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-on-surface">Stage DevOps</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${STATUS_STYLES['Refusée']}`}>Refusée</span>
                  </div>
                  <div className="text-sm text-on-surface-variant mb-3">AgriCloud Solutions · Meknès</div>
                  <div className="flex items-center gap-2 mb-3 p-3 bg-red-50 rounded-xl">
                    <span className="material-symbols-outlined text-red-400 text-lg">info</span>
                    <div className="text-xs text-on-surface-variant">Profil ne correspond pas aux critères actuels du poste.</div>
                  </div>
                  <div className="text-xs text-on-surface-variant">Candidature envoyée le 28 mars 2026</div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <button className="btn-ghost text-xs px-3 py-2">
                  Offres similaires
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar — 4 cols */}
        <div className="col-span-4 space-y-5">
          {/* AI Tips */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>tips_and_updates</span>
              <h3 className="font-semibold text-primary">Conseils IA</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/70 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Préparez votre entretien</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">Votre entretien chez DataSphere Labs est demain. Révisez les algorithmes de clustering et préparez vos exemples de projets ML.</div>
              </div>
              <div className="bg-white/70 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Augmentez votre taux de réponse</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">Personnalisez votre lettre de motivation pour chaque candidature. Les recruteurs remarquent les candidatures ciblées.</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-on-surface mb-4">Statistiques</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Total candidatures</span>
                <span className="font-semibold text-on-surface">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Taux de réponse</span>
                <span className="font-semibold text-green-600">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Entretiens obtenus</span>
                <span className="font-semibold text-on-surface">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Offres acceptées</span>
                <span className="font-semibold text-green-600">1</span>
              </div>
              <div className="h-px bg-outline-variant my-2"></div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-on-surface-variant">Progression globale</span>
                  <span className="text-xs font-semibold text-primary">42%</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full w-5/12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
