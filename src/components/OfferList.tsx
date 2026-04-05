export default function OfferList() {
  return (
    <div className="w-80 bg-surface-container-low border-r border-outline-variant/10 overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <h3 className="font-headline text-sm font-extrabold uppercase tracking-widest text-on-surface-variant/60 mb-6">
          Offres Actives
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-indigo-600 transition-all cursor-pointer">
            <h4 className="font-headline font-bold text-on-surface text-sm">
              Développeur Full Stack
            </h4>
            <p className="text-xs text-on-surface-variant mt-1">
              12 candidats • En cours
            </p>
          </div>
          <div className="p-4 bg-surface-container-lowest/50 rounded-xl hover:bg-white transition-all cursor-pointer group">
            <h4 className="font-headline font-bold text-on-surface text-sm group-hover:text-primary">
              Data Analyst Junior
            </h4>
            <p className="text-xs text-on-surface-variant mt-1">
              8 candidats • Clôture J-3
            </p>
          </div>
          <div className="p-4 bg-surface-container-lowest/50 rounded-xl hover:bg-white transition-all cursor-pointer group">
            <h4 className="font-headline font-bold text-on-surface text-sm group-hover:text-primary">
              Designer UI/UX
            </h4>
            <p className="text-xs text-on-surface-variant mt-1">
              24 candidats • En pause
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
