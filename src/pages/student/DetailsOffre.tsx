import { useNavigate } from 'react-router-dom';

export default function DetailsOffre() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Back nav */}
      <div className="px-10 pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Retour aux résultats
        </button>
      </div>

      {/* 12-column grid */}
      <div className="px-10 py-4 grid grid-cols-12 gap-6">
        {/* Main content — 8 cols */}
        <div className="col-span-8 space-y-6">
          {/* Hero section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center font-bold text-primary text-lg shadow-sm">AI</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-xs font-semibold text-primary">Recommandé par l'IA — 99% compatible</span>
                </div>
                <h1 className="font-headline font-bold text-2xl text-on-surface mb-2">Stage Intelligence Artificielle & NLP</h1>
                <div className="flex items-center gap-4 text-sm text-on-surface-variant flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>business</span>
                    InnovateTech
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Casablanca, Maroc
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    6 mois
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">laptop_mac</span>
                    Hybride
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Python', 'NLP', 'LangChain', 'Transformers', 'HuggingFace'].map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-xl">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h2 className="font-headline font-bold text-lg text-on-surface mb-4">À propos de l'entreprise</h2>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-outline-variant flex items-center justify-center font-bold text-primary flex-shrink-0">IT</div>
              <div>
                <div className="font-semibold text-on-surface">InnovateTech</div>
                <div className="text-sm text-on-surface-variant">Startup · Intelligence Artificielle & SaaS</div>
                <div className="text-xs text-on-surface-variant mt-0.5">Fondée en 2019 · 50-100 employés · Casablanca</div>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              InnovateTech est une startup marocaine spécialisée dans le développement de solutions d'intelligence artificielle pour les entreprises. Notre mission est de démocratiser l'accès à l'IA pour les PME africaines, avec une forte expertise en traitement du langage naturel et en vision par ordinateur.
            </p>
          </div>

          {/* Missions */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Missions & responsabilités</h2>
            <ul className="space-y-3">
              {[
                'Développer et affiner des modèles NLP pour la classification et l\'extraction d\'informations en arabe et en français',
                'Intégrer des LLMs (GPT, Llama) dans des pipelines de traitement documentaire via LangChain',
                'Construire et déployer des APIs FastAPI pour exposer les modèles en production',
                'Contribuer à l\'annotation et à la préparation des datasets d\'entraînement',
                'Participer aux revues de code et aux réunions d\'équipe hebdomadaires',
                'Rédiger la documentation technique des solutions développées',
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Profil recherché */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Profil recherché</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-on-surface mb-2">Niveau d'études</div>
                <p className="text-sm text-on-surface-variant">Étudiant en 3ème ou 4ème année d'une école d'ingénieurs ou équivalent Master en informatique / IA</p>
              </div>
              <div className="h-px bg-outline-variant"></div>
              <div>
                <div className="text-sm font-semibold text-on-surface mb-3">Compétences requises</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { skill: 'Python avancé', required: true },
                    { skill: 'Machine Learning', required: true },
                    { skill: 'NLP / Text Mining', required: true },
                    { skill: 'Transformers / HuggingFace', required: false },
                    { skill: 'Docker', required: false },
                    { skill: 'Git', required: true },
                  ].map(({ skill, required }) => (
                    <div key={skill} className="flex items-center gap-2 text-sm">
                      <span className={`material-symbols-outlined text-base ${required ? 'text-primary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {required ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <span className={required ? 'text-on-surface' : 'text-on-surface-variant'}>{skill}</span>
                      {!required && <span className="text-xs text-on-surface-variant">(souhaité)</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Avantages</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'payments', label: 'Gratification', value: '3 500 – 5 000 MAD/mois' },
                { icon: 'laptop_mac', label: 'Équipement', value: 'MacBook Pro fourni' },
                { icon: 'restaurant', label: 'Restauration', value: 'Tickets repas inclus' },
                { icon: 'psychology', label: 'Mentoring', value: 'Mentor dédié senior IA' },
                { icon: 'calendar_month', label: 'Flexibilité', value: 'Horaires flexibles' },
                { icon: 'workspace_premium', label: 'Certifications', value: 'Budget formation inclus' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-on-surface">{label}</div>
                    <div className="text-xs text-on-surface-variant">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky action panel — 4 cols */}
        <div className="col-span-4">
          <div className="sticky top-24 space-y-4">
            {/* Apply card */}
            <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-on-surface-variant">Date limite</div>
                  <div className="font-semibold text-on-surface">30 avril 2026</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-on-surface-variant">Candidatures</div>
                  <div className="font-semibold text-on-surface">24 postulants</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-3">
                <span className="material-symbols-outlined text-xl">send</span>
                Postuler maintenant
              </button>

              <button className="w-full border border-outline-variant text-on-surface-variant font-semibold py-3 rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">bookmark_border</span>
                Sauvegarder
              </button>
            </div>

            {/* AI Insight */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="font-semibold text-primary text-sm">Insight IA</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-extrabold ai-gradient-text font-headline">99%</div>
                <div className="text-xs text-on-surface-variant">Compatible avec votre profil</div>
              </div>
              <div className="bg-white/60 rounded-xl p-3">
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Votre profil correspond parfaitement à cette offre. Vos compétences en Python et NLP sont exactement ce que recherche InnovateTech. Postulez rapidement — ce type de poste est très compétitif !
                </p>
              </div>
            </div>

            {/* Recruiter card */}
            <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
              <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Recruteur</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">SA</div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">Sarah Alami</div>
                  <div className="text-xs text-on-surface-variant">DRH — InnovateTech</div>
                </div>
              </div>
              <button className="w-full border border-outline-variant text-on-surface-variant text-sm font-medium py-2 rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
