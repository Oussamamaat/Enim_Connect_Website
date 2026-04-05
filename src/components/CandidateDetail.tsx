export default function CandidateDetail() {
  return (
    <aside className="w-[450px] bg-surface-container-low border-l border-outline-variant/10 overflow-y-auto custom-scrollbar flex flex-col">
      {/* Header */}
      <div className="p-8 pb-0">
        <div className="flex justify-between items-start mb-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200">
            <img
              alt="Sarah Martin Large"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJChWrjt814KVlk79EyAB7qDlSC0Ay5TzuFMWFZtDPyJMYIbjmT62ffEogU-0Ox6vLjiWN6hQl4Vec8qtXu_4FQ_ovmqXNkja0-RbgPr5TGurciSVszJnGvby2ur-FcBE8pHMW3CRpAKMGqPemzeg715dQ4bW3IOUFUe4z-QF6Y-Ebk2NBAa1H2U06CAO-Ae5XBdYmnXrxUqjYUObJrbJ8xf7lYaGZlU9rNF9jpEks7gvDf-6I1vYqvtmOIx25i4n4vOJ9cfr9YamO"
            />
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface-variant border border-outline-variant/20 hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
        <h2 className="font-headline text-2xl font-black tracking-tight text-on-surface">
          Sarah Martin
        </h2>
        <p className="text-blue-600 font-semibold text-sm">
          Développeur Full Stack - EnimConnect
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white rounded-full text-[11px] font-bold border border-outline-variant/20">
            Bac+5
          </span>
          <span className="px-3 py-1 bg-white rounded-full text-[11px] font-bold border border-outline-variant/20">
            Rabat, Maroc
          </span>
          <span className="px-3 py-1 bg-white rounded-full text-[11px] font-bold border border-outline-variant/20">
            Dispo : Immédiate
          </span>
        </div>
      </div>

      {/* AI Scoring Detail */}
      <div className="p-8">
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                query_stats
              </span>
              Analyse de l'IA
            </h3>
            <span className="px-2 py-1 bg-secondary text-white text-[10px] font-black rounded-lg">
              TRUSTED
            </span>
          </div>
          <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                description
              </span>
              Description de l'IA
            </h4>
            <p className="text-xs leading-relaxed text-slate-700 font-medium">
              Profil exceptionnel alliant une formation académique solide (Bac+5
              en Génie Logiciel) et une maîtrise technique avancée de
              l'écosystème JavaScript. Son expertise confirmée sur{" "}
              <span className="font-bold text-blue-700">React</span> et{" "}
              <span className="font-bold text-blue-700">Node.js</span> en fait
              une candidate idéale pour des projets Full Stack complexes. Son
              approche structurée et sa disponibilité immédiate représentent un
              atout stratégique pour l'équipe EnimConnect.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto p-8 bg-surface-container-lowest/50 border-t border-outline-variant/10">
        <div className="flex flex-col gap-3">
          <button className="w-full py-4 px-6 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">download</span>
            Télécharger le CV
          </button>
          <button className="w-full py-4 px-6 bg-secondary text-white font-bold rounded-xl shadow-lg shadow-secondary/30 hover:shadow-secondary/40 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            Contacter le candidat
          </button>
        </div>
      </div>
    </aside>
  );
}
