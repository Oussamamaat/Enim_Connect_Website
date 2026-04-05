export default function CandidateList() {
  return (
    <div className="flex-1 bg-surface overflow-y-auto custom-scrollbar p-8">
      {/* Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-indigo-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">
              Tech &amp; Engineering
            </span>
          </div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
            Développeur Full Stack
          </h1>
          <p className="text-on-surface-variant mt-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            EnimConnect HQ • Rabat
          </p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* AI Insights Section */}
      <section className="mb-8 p-6 rounded-2xl bg-secondary-fixed/30 border border-secondary-fixed-dim/20 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/5 blur-3xl rounded-full"></div>
        <div className="flex gap-4 items-start relative z-10">
          <div className="p-3 bg-secondary text-white rounded-xl shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-on-secondary-fixed">
              Résumé de l'Intelligence Artificielle
            </h3>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed max-w-2xl">
              Cette offre a attiré{" "}
              <span className="font-bold text-on-surface">12 candidats</span>.
              L'IA a identifié{" "}
              <span className="font-bold text-secondary">
                3 correspondances fortes (&gt;90%)
              </span>{" "}
              basées sur vos critères (compétences techniques, langue, score
              d'expérience).
            </p>
          </div>
        </div>
      </section>

      {/* Candidates Grid/List */}
      <div className="grid grid-cols-1 gap-4">
        <h3 className="font-headline text-sm font-extrabold uppercase tracking-widest text-on-surface-variant/60 mb-2">
          Top Correspondances
        </h3>

        {/* Candidate Card (Active/Selected) */}
        <div className="group p-6 bg-surface-container-lowest rounded-2xl border-2 border-secondary shadow-xl shadow-secondary/5 flex items-center justify-between transition-all scale-[1.01]">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/20">
              <img
                alt="Sarah Martin"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGgAVnqxZhGAWvMZQGhYQwmPMF5UYGO3BG5C5blQp8d3-0Qa1S1p283qyRtIPTWeeylMxTrpvAuIcdCQW3mMX8wSZb9gQuLowo2y0O6yrtTsPk7M5Z8tANzfloHPlz-Kk-AUelqk4hRCAOdXUdjgtSLw5EDNWozQZig2gEmYQlD2Icq9JR4vJgAEmNdvnwCgMFqTpbv1pfsPwEvlRHdDrR9gkmcv9mADu3AjnBpH9HCzj-teDKU8lgT2Vcx-0GhJDY66SvjbrRWnRD"
              />
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-on-surface">
                Sarah Martin
              </h4>
              <p className="text-on-surface-variant text-sm">
                Étudiante en 5ème année • Génie Logiciel
              </p>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-surface-container text-[10px] font-semibold rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-surface-container text-[10px] font-semibold rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-surface-container text-[10px] font-semibold rounded">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other candidates (Ghost-style) */}
        <div className="group p-6 bg-white hover:bg-surface-container-lowest rounded-2xl border border-transparent hover:border-outline-variant/20 transition-all flex items-center justify-between">
          <div className="flex items-center gap-5 opacity-80 group-hover:opacity-100">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-container">
              <img
                alt="Thomas Leroy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJNAOiXbTA90khR48cQjg17MiB2RIdlCFFoNLYpRNqfq9uBqj5ZDwM_FP-Iu8TrLzOM1l4BMY5Re6go60L1d4l5hWKO-u-Mj84TEjQoJhNff5Aa3i6yLvnLnIsPMpVjxDZtANAnMEGgF8R2w4JN_HeVVgAa-YvIJzDBGTcxwfjUhohXa6XsSK0FquccoB9nEpzkmrbxmaOPYdJjoWPXX3ZlwX18bTslXz0bF5Vb5XC614ZpB2773eyGILdjM7NEBcmg36-BO_1TW-N"
              />
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-on-surface">
                Thomas Leroy
              </h4>
              <p className="text-on-surface-variant text-sm">
                Étudiant en 4ème année • Full Stack
              </p>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-surface-container text-[10px] font-semibold rounded">
                  Vue.js
                </span>
                <span className="px-2 py-1 bg-surface-container text-[10px] font-semibold rounded">
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
