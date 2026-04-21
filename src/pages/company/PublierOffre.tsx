import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/client";

const DEPARTEMENTS = [
  "Génie Informatique",
  "Génie Électrique",
  "Génie Civil",
  "Génie Industriel",
  "Génie Minier",
  "Sciences de Base",
];

export default function PublierOffre() {
  const navigate = useNavigate();
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [departement, setDepartement] = useState(DEPARTEMENTS[0]);
  const [dureeMois, setDureeMois] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await api.creerAnnonce({
        titre,
        description,
        departement,
        duree_mois: dureeMois ? parseInt(dureeMois) : null,
      });
      setSuccess(
        "Annonce soumise avec succès ! Un email a été envoyé aux chefs de département pour validation."
      );
      setTimeout(() => navigate("/entreprise/tableau-de-bord"), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de la soumission");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="px-10 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-4"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Retour au tableau de bord
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline font-extrabold text-3xl text-on-surface mb-1">
              Publier une offre
            </h1>
            <p className="text-on-surface-variant text-sm">
              Soumettez une offre — elle sera validée par un chef de département avant publication.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
            <span
              className="material-symbols-outlined text-primary text-lg"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="text-sm font-medium text-primary">Matching IA activé</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-10 pb-10 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm">
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-low rounded-2xl border border-outline-variant p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">
                Titre du poste <span className="text-error">*</span>
              </label>
              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="ex. Stage Développeur Full-Stack"
                required
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">
                Description du poste <span className="text-error">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                required
                placeholder="Décrivez les missions, l'environnement de travail, les objectifs du stage…"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors resize-none"
              />
              <div className="text-right text-xs text-on-surface-variant mt-1">
                {description.length}/2000 caractères
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">
                  Département <span className="text-error">*</span>
                </label>
                <select
                  value={departement}
                  onChange={(e) => setDepartement(e.target.value)}
                  className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface outline-none focus:border-primary transition-colors"
                >
                  {DEPARTEMENTS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">
                  Durée (mois)
                </label>
                <input
                  type="number"
                  value={dureeMois}
                  onChange={(e) => setDureeMois(e.target.value)}
                  placeholder="ex. 6"
                  min={1}
                  max={24}
                  className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 justify-center disabled:opacity-60"
              >
                {loading ? (
                  <span className="material-symbols-outlined text-xl">progress_activity</span>
                ) : (
                  <span className="material-symbols-outlined text-xl">send</span>
                )}
                Soumettre pour validation
              </button>
              <button type="button" onClick={() => navigate(-1)} className="btn-ghost">
                Annuler
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                info
              </span>
              <h3 className="font-semibold text-primary">Processus de validation</h3>
            </div>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">1.</span>
                Vous soumettez l'offre
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">2.</span>
                Un email est envoyé aux chefs du département concerné
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">3.</span>
                Le premier chef qui valide publie l'offre
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-primary">4.</span>
                Les étudiants peuvent postuler immédiatement
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-on-surface mb-3 text-sm">Aperçu de l'offre</h3>
            <div className="bg-surface rounded-xl p-4 border border-outline-variant">
              <div className="font-semibold text-on-surface text-sm mb-1">
                {titre || "Titre de l'offre"}
              </div>
              <div className="text-xs text-on-surface-variant mb-2">{departement}</div>
              {dureeMois && (
                <div className="text-xs bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-lg inline-block">
                  {dureeMois} mois
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
