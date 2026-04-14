import { useState } from 'react';

const OFFERS = [
  {
    id: 1,
    title: 'Stage Développeur Full-Stack',
    company: 'TechWave Morocco',
    location: 'Casablanca',
    domain: 'Développement',
    date: '10 avr. 2026',
    status: 'En attente',
  },
  {
    id: 2,
    title: 'Stage Data Scientist',
    company: 'DataSphere Labs',
    location: 'Rabat · Hybride',
    domain: 'Data & IA',
    date: '11 avr. 2026',
    status: 'En attente',
  },
  {
    id: 3,
    title: 'Stage UX/UI Designer',
    company: 'DesignHub',
    location: 'Casablanca',
    domain: 'Design',
    date: '09 avr. 2026',
    status: 'Validée',
  },
  {
    id: 4,
    title: 'Stage Marketing Digital',
    company: 'GrowthMasters',
    location: 'Fès',
    domain: 'Marketing',
    date: '08 avr. 2026',
    status: 'Rejetée',
  },
];

const STATUS_STYLES: Record<string, string> = {
  'En attente': 'bg-orange-50 text-orange-600',
  'Validée': 'bg-green-50 text-green-600',
  'Rejetée': 'bg-red-50 text-red-600',
};

const FILTERS = ['Toutes', 'En attente', 'Validées', 'Rejetées'];

export default function InterfaceAdministration() {
  const [activeFilter, setActiveFilter] = useState('Toutes');
  const [offerStatuses, setOfferStatuses] = useState<Record<number, string>>(
    Object.fromEntries(OFFERS.map((o) => [o.id, o.status]))
  );

  function validate(id: number) {
    setOfferStatuses((prev) => ({ ...prev, [id]: 'Validée' }));
  }

  function reject(id: number) {
    setOfferStatuses((prev) => ({ ...prev, [id]: 'Rejetée' }));
  }

  const filtered = OFFERS.filter((o) => {
    const s = offerStatuses[o.id];
    if (activeFilter === 'Toutes') return true;
    if (activeFilter === 'En attente') return s === 'En attente';
    if (activeFilter === 'Validées') return s === 'Validée';
    if (activeFilter === 'Rejetées') return s === 'Rejetée';
    return true;
  });

  const stats = {
    total: OFFERS.length,
    pending: OFFERS.filter((o) => offerStatuses[o.id] === 'En attente').length,
    validated: OFFERS.filter((o) => offerStatuses[o.id] === 'Validée').length,
    rejected: OFFERS.filter((o) => offerStatuses[o.id] === 'Rejetée').length,
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-headline font-bold text-2xl text-on-surface">Administration des Offres</h1>
            <p className="text-sm text-on-surface-variant mt-0.5">Validez, modifiez ou rejetez les offres soumises par les entreprises</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
            <span className="text-sm font-medium text-primary">Mode administrateur</span>
          </div>
        </div>

        {/* Segmented filter control */}
        <div className="flex bg-surface-container rounded-xl p-1 w-fit gap-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-white shadow-sm text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-10 py-6 space-y-6">
        {/* 4-column stats bento grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            </div>
            <div className="font-headline font-extrabold text-3xl text-on-surface mb-1">{stats.total}</div>
            <div className="text-sm text-on-surface-variant">Offres totales</div>
          </div>
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-orange-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_empty</span>
            </div>
            <div className="font-headline font-extrabold text-3xl text-on-surface mb-1">{stats.pending}</div>
            <div className="text-sm text-on-surface-variant">En attente</div>
          </div>
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-green-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="font-headline font-extrabold text-3xl text-on-surface mb-1">{stats.validated}</div>
            <div className="text-sm text-on-surface-variant">Validées</div>
          </div>
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-red-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
            </div>
            <div className="font-headline font-extrabold text-3xl text-on-surface mb-1">{stats.rejected}</div>
            <div className="text-sm text-on-surface-variant">Rejetées</div>
          </div>
        </div>

        {/* Data table */}
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between">
            <h2 className="font-semibold text-on-surface">Liste des offres</h2>
            <span className="text-sm text-on-surface-variant">{filtered.length} offre{filtered.length > 1 ? 's' : ''}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Offre</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Entreprise</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Domaine</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Lieu</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Soumise le</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Statut</th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filtered.map((offer) => {
                  const status = offerStatuses[offer.id];
                  return (
                    <tr key={offer.id} className="hover:bg-surface-container/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-on-surface text-sm">{offer.title}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-on-surface-variant">{offer.company}</td>
                      <td className="px-4 py-4">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-lg">{offer.domain}</span>
                      </td>
                      <td className="px-4 py-4 text-sm text-on-surface-variant">{offer.location}</td>
                      <td className="px-4 py-4 text-sm text-on-surface-variant">{offer.date}</td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${STATUS_STYLES[status]}`}>
                          {status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          {status !== 'Validée' && (
                            <button
                              onClick={() => validate(offer.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 text-xs font-semibold rounded-xl hover:bg-green-100 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              Valider
                            </button>
                          )}
                          {status !== 'Rejetée' && (
                            <button
                              onClick={() => reject(offer.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-xl hover:bg-red-100 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                              Rejeter
                            </button>
                          )}
                          <button className="w-8 h-8 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                            <span className="material-symbols-outlined text-on-surface-variant text-base">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
            <span className="text-sm text-on-surface-variant">
              Affichage de 1 à {filtered.length} sur {OFFERS.length} offres
            </span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded-xl bg-primary text-white text-sm font-semibold flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two info cards at bottom */}
        <div className="grid grid-cols-2 gap-5">
          {/* Validation tips */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>rule</span>
              <h3 className="font-semibold text-on-surface">Critères de validation</h3>
            </div>
            <ul className="space-y-2">
              {[
                'Le titre du poste doit être clair et descriptif',
                'La description doit comporter au minimum 200 caractères',
                'Les coordonnées de l\'entreprise doivent être vérifiées',
                'L\'offre ne doit pas contenir de contenu inapproprié',
                'La durée et les conditions du stage doivent être mentionnées',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* AI help */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-semibold text-primary">Assistance IA</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/70 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Analyse automatique</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  L'IA analyse chaque offre pour détecter les contenus inappropriés, les informations manquantes et les incohérences. Les offres avec un score inférieur à 60% sont automatiquement marquées pour révision.
                </p>
              </div>
              <div className="bg-white/70 rounded-xl p-3">
                <div className="text-xs font-semibold text-on-surface mb-1">Recommandations</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {stats.pending} offre{stats.pending > 1 ? 's' : ''} en attente de validation. Temps moyen de traitement : 4h par offre.
                </p>
              </div>
              <button className="w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">auto_awesome</span>
                Validation automatique IA
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
