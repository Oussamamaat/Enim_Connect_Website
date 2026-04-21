import { useState, useEffect } from "react";
import { api } from "../../api/client";

interface Entreprise {
  id: string;
  nom_entreprise: string;
  secteur: string | null;
  ville: string | null;
  valide: boolean;
  email: string;
}

export default function EntreprisesValidation() {
  const [entreprises, setEntreprises] = useState<Entreprise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"toutes" | "en_attente" | "validees">("toutes");

  useEffect(() => {
    api
      .getEntreprises()
      .then((data) => setEntreprises(data as Entreprise[]))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleValider(id: string) {
    await api.validerEntreprise(id);
    setEntreprises((prev) =>
      prev.map((e) => (e.id === id ? { ...e, valide: true } : e))
    );
  }

  async function handleRejeter(id: string) {
    await api.rejeterEntreprise(id);
    setEntreprises((prev) =>
      prev.map((e) => (e.id === id ? { ...e, valide: false } : e))
    );
  }

  const filtered = entreprises.filter((e) => {
    if (filter === "en_attente") return !e.valide;
    if (filter === "validees") return e.valide;
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col">
      <div className="sticky top-16 z-10 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-10 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-headline font-bold text-2xl text-on-surface">
              Validation des entreprises
            </h1>
            <p className="text-sm text-on-surface-variant mt-0.5">
              Validez les comptes entreprises avant qu'ils puissent publier des offres
            </p>
          </div>
        </div>
        <div className="flex bg-surface-container rounded-xl p-1 w-fit gap-1">
          {(["toutes", "en_attente", "validees"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-white shadow-sm text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {f === "toutes" ? "Toutes" : f === "en_attente" ? "En attente" : "Validées"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-10 py-6">
        {loading && (
          <div className="flex items-center text-on-surface-variant py-10">
            <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
            Chargement…
          </div>
        )}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">{error}</div>
        )}

        {!loading && !error && (
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Entreprise
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Secteur
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-on-surface-variant text-sm">
                      Aucune entreprise trouvée.
                    </td>
                  </tr>
                )}
                {filtered.map((e) => (
                  <tr key={e.id} className="hover:bg-surface-container/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface text-sm">
                      {e.nom_entreprise}
                    </td>
                    <td className="px-4 py-4 text-sm text-on-surface-variant">{e.secteur ?? "—"}</td>
                    <td className="px-4 py-4 text-sm text-on-surface-variant">{e.ville ?? "—"}</td>
                    <td className="px-4 py-4 text-sm text-on-surface-variant">{e.email}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                          e.valide
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {e.valide ? "Validée" : "En attente"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {!e.valide && (
                          <button
                            onClick={() => handleValider(e.id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 text-xs font-semibold rounded-xl hover:bg-green-100 transition-colors"
                          >
                            <span
                              className="material-symbols-outlined text-sm"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              check_circle
                            </span>
                            Valider
                          </button>
                        )}
                        {e.valide && (
                          <button
                            onClick={() => handleRejeter(e.id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-xl hover:bg-red-100 transition-colors"
                          >
                            <span
                              className="material-symbols-outlined text-sm"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              cancel
                            </span>
                            Suspendre
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
