import { Link } from 'react-router-dom';

export default function DashboardEtudiant() {
  return (
    <main className="ml-0 pt-8 pb-12 px-10 min-h-screen">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline font-extrabold text-3xl text-on-surface mb-1">
              Bienvenue, Lucas ! 👋
            </h1>
            <p className="text-on-surface-variant">
              Voici un aperçu de votre activité de recherche de stage.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="text-sm font-medium text-primary">IA activée</span>
            </div>
            <Link
              to="/etudiant/recherche"
              className="btn-primary"
            >
              <span className="material-symbols-outlined text-xl">search</span>
              Rechercher
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Candidatures */}
        <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">+3 ce mois</span>
          </div>
          <div className="font-headline font-extrabold text-4xl text-on-surface mb-1">12</div>
          <div className="text-sm text-on-surface-variant font-medium">Candidatures envoyées</div>
          <div className="mt-4 h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>

        {/* Entretiens */}
        <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Cette semaine</span>
          </div>
          <div className="font-headline font-extrabold text-4xl text-on-surface mb-1">3</div>
          <div className="text-sm text-on-surface-variant font-medium">Entretiens prévus</div>
          <div className="mt-4 h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
          </div>
        </div>

        {/* Matches */}
        <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">Nouveaux</span>
          </div>
          <div className="font-headline font-extrabold text-4xl text-on-surface mb-1">8</div>
          <div className="text-sm text-on-surface-variant font-medium">Matches recommandés</div>
          <div className="mt-4 h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-tertiary to-tertiary-container rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* AI Recommendations — spans 2 cols */}
        <div className="col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h2 className="font-headline font-bold text-xl text-on-surface">Recommandations IA</h2>
            </div>
            <Link to="/etudiant/recherche" className="text-sm text-primary font-medium hover:underline">
              Voir tout
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <Link to="/etudiant/offre/1" className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 text-sm">TW</div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm leading-tight">Stage Développeur Full-Stack</div>
                    <div className="text-xs text-on-surface-variant">TechWave Morocco</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">96%</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">React</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">Node.js</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">MongoDB</span>
              </div>
              <div className="flex items-center justify-between text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Casablanca
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  6 mois
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/etudiant/offre/2" className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center font-bold text-purple-600 text-sm">DS</div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm leading-tight">Stage Data Science</div>
                    <div className="text-xs text-on-surface-variant">DataSphere Labs</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">91%</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">Python</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">ML</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">TensorFlow</span>
              </div>
              <div className="flex items-center justify-between text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Rabat
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  4 mois
                </span>
              </div>
            </Link>

            {/* Card 3 — spans 2 cols */}
            <Link to="/etudiant/offre/3" className="col-span-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-xs font-semibold text-primary">Coup de cœur IA — Match parfait</span>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-outline-variant flex items-center justify-center font-bold text-primary text-sm shadow-sm">AI</div>
                  <div>
                    <div className="font-semibold text-on-surface leading-tight">Stage Intelligence Artificielle & NLP</div>
                    <div className="text-sm text-on-surface-variant">InnovateTech — Casablanca · Hybride</div>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-xl">99%</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">Python</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">NLP</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">LangChain</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-lg">Transformers</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity Sidebar */}
        <div className="col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-headline font-bold text-xl text-on-surface">Activité récente</h2>
          </div>
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="space-y-5">
              {/* Timeline item */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="w-px h-full bg-outline-variant mt-2 flex-1"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm font-medium text-on-surface leading-tight">Candidature envoyée</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">TechWave Morocco — Stage Full-Stack</div>
                  <div className="text-xs text-on-surface-variant mt-1">Il y a 2 heures</div>
                </div>
              </div>

              {/* Timeline item */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                  </div>
                  <div className="w-px h-full bg-outline-variant mt-2 flex-1"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm font-medium text-on-surface leading-tight">Entretien planifié</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">DataSphere Labs — Demain 14h00</div>
                  <div className="text-xs text-on-surface-variant mt-1">Il y a 1 jour</div>
                </div>
              </div>

              {/* Timeline item */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <div className="w-px h-full bg-outline-variant mt-2 flex-1"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm font-medium text-on-surface leading-tight">Nouveau match IA</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">8 nouvelles offres recommandées</div>
                  <div className="text-xs text-on-surface-variant mt-1">Il y a 2 jours</div>
                </div>
              </div>

              {/* Timeline item */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-orange-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-on-surface leading-tight">Profil consulté</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">InnovateTech a consulté votre profil</div>
                  <div className="text-xs text-on-surface-variant mt-1">Il y a 3 jours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick tips */}
          <div className="mt-4 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>tips_and_updates</span>
              <span className="text-sm font-semibold text-primary">Conseil IA</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Complétez votre profil à 100% pour augmenter vos chances d'être contacté par les recruteurs de 3x.
            </p>
            <Link to="/etudiant/profil/1" className="mt-2 text-xs font-semibold text-primary hover:underline flex items-center gap-1">
              Compléter mon profil
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
