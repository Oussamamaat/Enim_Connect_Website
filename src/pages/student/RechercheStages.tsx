import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";

interface Annonce {
  id: string;
  titre: string;
  description: string;
  departement: string;
  duree_mois: number | null;
  nom_entreprise: string | null;
  ville: string | null;
  created_at: string;
}

export default function RechercheStages() {
  const [query, setQuery] = useState("");
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getAnnonces()
      .then((data) => setAnnonces(data as Annonce[]))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = annonces.filter(
    (a) =>
      a.titre.toLowerCase().includes(query.toLowerCase()) ||
      (a.nom_entreprise ?? "").toLowerCase().includes(query.toLowerCase()) ||
      a.departement.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="max-w-5xl">
          <h1 className="font-headline font-bold text-2xl text-on-surface mb-4">
            Recherche de stages
          </h1>
          <div className="flex items-center gap-3 bg-surface-container-low border border-outline-variant rounded-2xl px-5 py-3.5 shadow-sm focus-within:border-primary transition-colors mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-2xl">search</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Développeur, Data Science, département…"
              className="flex-1 bg-transparent text-base text-on-surface placeholder-on-surface-variant outline-none"
            />
          </div>
        </div>
      </div>

      <div className="px-10 py-6">
        {loading && (
          <div className="flex items-center justify-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
            Chargement des offres…
          </div>
        )}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">{error}</div>
        )}
        {!loading && !error && (
          <>
            <p className="text-sm text-on-surface-variant mb-4">
              <span className="font-semibold text-on-surface">{filtered.length}</span> offre
              {filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
              {" "}— triées par pertinence IA
            </p>
            <div className="space-y-4 max-w-3xl">
              {filtered.length === 0 && (
                <div className="text-center py-16 text-on-surface-variant">
                  <span className="material-symbols-outlined text-5xl block mb-3">search_off</span>
                  Aucune offre ne correspond à votre recherche.
                </div>
              )}
              {filtered.map((annonce) => (
                <Link
                  key={annonce.id}
                  to={`/etudiant/offre/${annonce.id}`}
                  className="block bg-surface-container-low rounded-2xl p-6 border border-outline-variant hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary flex-shrink-0 text-sm">
                        {(annonce.nom_entreprise ?? "?").slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-on-surface mb-1">{annonce.titre}</h3>
                        <div className="text-sm text-on-surface-variant mb-3">
                          {annonce.nom_entreprise} · {annonce.ville ?? "Maroc"}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">
                            {annonce.departement}
                          </span>
                          {annonce.duree_mois && (
                            <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded-lg">
                              {annonce.duree_mois} mois
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-on-surface-variant line-clamp-2">
                          {annonce.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant ml-4 flex-shrink-0">
                      {new Date(annonce.created_at).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
