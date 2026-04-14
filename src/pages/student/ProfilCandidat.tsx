import { useNavigate } from 'react-router-dom';

export default function ProfilCandidat() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      {/* Back navigation */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-6"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
        Retour
      </button>

      {/* 12-column grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left: Profile summary + AI panel — 4 cols */}
        <div className="col-span-4 space-y-5">
          {/* Profile Card */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant overflow-hidden">
            {/* Banner */}
            <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="px-6 pb-6">
              {/* Avatar */}
              <div className="flex items-end justify-between -mt-8 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <button className="px-3 py-1.5 border border-outline-variant rounded-xl text-xs font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
                  Modifier
                </button>
              </div>
              <h2 className="font-headline font-bold text-xl text-on-surface mb-0.5">Lucas Martin</h2>
              <p className="text-sm text-on-surface-variant mb-1">Étudiant ingénieur — ENIM, Meknès</p>
              <p className="text-sm text-on-surface-variant mb-4">Spécialisation : Intelligence Artificielle</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  Meknès, Maroc
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">mail</span>
                  lucas.martin@enim.ac.ma
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">school</span>
                  3ème année ingénierie
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-on-surface-variant">Complétion du profil</span>
                  <span className="text-xs font-bold text-primary">82%</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                  Contacter
                </button>
                <button className="w-10 h-9 border border-outline-variant rounded-xl flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">bookmark_border</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Match Panel */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-semibold text-primary">Analyse IA</h3>
            </div>
            <div className="text-center mb-4">
              <div className="text-4xl font-extrabold ai-gradient-text font-headline">94%</div>
              <div className="text-xs text-on-surface-variant mt-1">Score de compatibilité</div>
            </div>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Compétences techniques</span>
                  <span className="font-semibold text-on-surface">92%</span>
                </div>
                <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Soft skills</span>
                  <span className="font-semibold text-on-surface">88%</span>
                </div>
                <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                  <div className="h-full w-10/12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Expérience</span>
                  <span className="font-semibold text-on-surface">75%</span>
                </div>
                <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/60 rounded-xl">
              <div className="text-xs font-semibold text-on-surface mb-1">Recommandation IA</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Profil très prometteur. L'ajout d'une expérience pratique en déploiement cloud renforcerait significativement sa candidature.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Detail content — 8 cols */}
        <div className="col-span-8 space-y-6">
          {/* À propos */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-3">À propos</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Étudiant ingénieur en 3ème année à l'ENIM de Meknès, spécialisé en Intelligence Artificielle et Machine Learning. Passionné par les technologies émergentes et le développement de solutions innovantes, je cherche un stage de fin d'études dans le domaine de l'IA appliquée.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-3">
              J'ai développé une solide base en mathématiques appliquées, algorithmes et programmation, complétée par des projets académiques en traitement du langage naturel et vision par ordinateur.
            </p>
          </div>

          {/* Compétences */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Compétences</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Langages & Frameworks</div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'SQL'].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-xl">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">IA & Data Science</div>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'NLP', 'Deep Learning', 'Data Viz', 'Scikit-learn', 'Pandas'].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-medium rounded-xl">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Outils</div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter'].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-medium rounded-xl">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expériences */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Expériences</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 font-bold text-blue-600 text-xs">ST</div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">Stage Développeur Web</div>
                  <div className="text-xs text-on-surface-variant mb-1">StartupTech Maroc · Casablanca · Été 2025</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Développement d'une application web de gestion RH avec React et Node.js. Intégration d'une API REST et mise en place d'une base de données MongoDB.
                  </p>
                </div>
              </div>
              <div className="h-px bg-outline-variant"></div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 font-bold text-green-600 text-xs">OT</div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">Projet de recherche — NLP</div>
                  <div className="text-xs text-on-surface-variant mb-1">Laboratoire IA, ENIM · Meknès · 2024-2025</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Développement d'un modèle de classification de textes en arabe dialectal. Publication d'un article de recherche en cours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Formation</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">Diplôme d'ingénieur — Génie Informatique</div>
                  <div className="text-xs text-on-surface-variant mb-1">École Nationale d'Ingénieurs de Meknès (ENIM) · 2022–2025</div>
                  <p className="text-xs text-on-surface-variant">Spécialisation : Intelligence Artificielle & Big Data</p>
                </div>
              </div>
              <div className="h-px bg-outline-variant"></div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant text-base" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">Classes Préparatoires MP</div>
                  <div className="text-xs text-on-surface-variant mb-1">Lycée Moulay Idriss · Fès · 2020–2022</div>
                  <p className="text-xs text-on-surface-variant">Mathématiques et Physique — Mention Bien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
