import { Link } from 'react-router-dom';

export default function DashboardEntreprise() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-10 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline font-extrabold text-3xl text-on-surface mb-1">Tableau de bord</h1>
            <p className="text-on-surface-variant text-sm">Bienvenue sur votre espace recruteur. Gérez vos offres et candidats.</p>
          </div>
          <Link to="/entreprise/publier-offre" className="btn-primary">
            <span className="material-symbols-outlined text-xl">add</span>
            Publier une offre
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 gap-6 px-10 pb-10">
        {/* Left — main area */}
        <div className="flex-1 space-y-6">
          {/* 3-column metrics bento grid */}
          <div className="grid grid-cols-3 gap-5">
            {/* Offres actives */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-3xl text-white/80" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
                <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-lg">+3 ce mois</span>
              </div>
              <div className="font-headline font-extrabold text-4xl mb-1">24</div>
              <div className="text-white/80 text-sm font-medium">Offres de stages actives</div>
            </div>

            {/* Candidats reçus */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">+28 semaine</span>
              </div>
              <div className="font-headline font-extrabold text-4xl text-on-surface mb-1">158</div>
              <div className="text-on-surface-variant text-sm font-medium">Candidats reçus</div>
              <div className="mt-3 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                </div>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">-0.3j vs mois dernier</span>
              </div>
              <div className="font-headline font-extrabold text-4xl text-on-surface mb-1">1.2<span className="text-xl font-semibold text-on-surface-variant">j</span></div>
              <div className="text-on-surface-variant text-sm font-medium">Temps moyen de réponse</div>
              <div className="mt-3 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-gradient-to-r from-tertiary to-tertiary-container rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Active offers table */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
              <h2 className="font-headline font-bold text-lg text-on-surface">Offres actives</h2>
              <Link to="/entreprise/publier-offre" className="text-sm text-primary font-medium hover:underline">
                Voir tout
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface-container">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Poste</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Lieu</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Candidatures</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Statut</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Expire</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {[
                    { title: 'Stage Développeur Full-Stack', location: 'Casablanca', count: 45, status: 'Active', color: 'green', expires: '30 avr.' },
                    { title: 'Stage Data Engineer', location: 'Rabat · Hybride', count: 28, status: 'Active', color: 'green', expires: '15 mai' },
                    { title: 'Stage UX/UI Designer', location: 'Casablanca', count: 17, status: 'Expirant', color: 'orange', expires: '18 avr.' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-surface-container/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-on-surface text-sm">{row.title}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-on-surface-variant">{row.location}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-on-surface text-sm">{row.count}</span>
                          <Link to="/entreprise/candidats-favoris" className="text-xs text-primary hover:underline">Voir</Link>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                          row.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-on-surface-variant">{row.expires}</td>
                      <td className="px-4 py-4">
                        <button className="w-8 h-8 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                          <span className="material-symbols-outlined text-on-surface-variant text-base">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right panel — AI Match Intelligence */}
        <div className="w-80 flex-shrink-0">
          <div className="sticky top-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-2xl border border-primary/10 p-6 glass-card">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-headline font-bold text-primary">AI Match Intelligence</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white/70 rounded-xl p-4">
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Candidats en attente</div>
                <div className="font-headline font-extrabold text-3xl ai-gradient-text mb-1">23</div>
                <div className="text-xs text-on-surface-variant">à examiner cette semaine</div>
              </div>

              <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Top candidats IA</div>
              {[
                { name: 'Lucas Martin', score: 99, role: 'Full-Stack Dev' },
                { name: 'Yasmine Idrissi', score: 95, role: 'Data Engineer' },
                { name: 'Omar Benali', score: 91, role: 'UX Designer' },
              ].map((c, i) => (
                <Link
                  to="/entreprise/candidats-favoris"
                  key={i}
                  className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:bg-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-on-surface truncate">{c.name}</div>
                    <div className="text-xs text-on-surface-variant">{c.role}</div>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg flex-shrink-0">{c.score}%</span>
                </Link>
              ))}

              <Link
                to="/entreprise/candidats-favoris"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-base">group</span>
                Voir tous les candidats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
