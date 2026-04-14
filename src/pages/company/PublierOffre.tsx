import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_SKILLS = ['React', 'Node.js', 'MongoDB'];

export default function PublierOffre() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [skillInput, setSkillInput] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [deadline, setDeadline] = useState('');

  function addSkill(e: React.FormEvent | React.KeyboardEvent) {
    e.preventDefault();
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
    }
    setSkillInput('');
  }

  function removeSkill(skill: string) {
    setSkills(skills.filter((s) => s !== skill));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/entreprise/tableau-de-bord');
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
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
            <h1 className="font-headline font-extrabold text-3xl text-on-surface mb-1">Publier une offre</h1>
            <p className="text-on-surface-variant text-sm">Créez une nouvelle offre de stage et attirez les meilleurs talents</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="text-sm font-medium text-primary">Optimisation IA activée</span>
          </div>
        </div>
      </div>

      {/* Form + AI panel */}
      <div className="flex-1 px-10 pb-10 grid grid-cols-3 gap-6">
        {/* Form — 2 cols */}
        <div className="col-span-2">
          <form onSubmit={handleSubmit} className="bg-surface-container-low rounded-2xl border border-outline-variant p-8 space-y-6">
            {/* Titre */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-on-surface mb-2">
                Titre du poste <span className="text-error">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ex. Stage Développeur Full-Stack"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-on-surface mb-2">
                Description du poste <span className="text-error">*</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Décrivez les missions, l'environnement de travail, les objectifs du stage…"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors resize-none"
              />
              <div className="text-right text-xs text-on-surface-variant mt-1">{description.length}/2000 caractères</div>
            </div>

            {/* Compétences */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">
                Compétences requises
              </label>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-xl"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="hover:text-error transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </span>
                ))}
              </div>
              {/* Add skill */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSkill(e)}
                  placeholder="Ajouter une compétence..."
                  className="flex-1 border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface bg-surface placeholder-on-surface-variant outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2.5 border border-outline-variant rounded-xl text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </div>

            {/* Lieu + Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-on-surface mb-2">
                  Lieu <span className="text-error">*</span>
                </label>
                <div className="flex items-center gap-2 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">location_on</span>
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Casablanca, Hybride…"
                    className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="deadline" className="block text-sm font-semibold text-on-surface mb-2">
                  Date limite de candidature
                </label>
                <div className="flex items-center gap-2 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">calendar_month</span>
                  <input
                    id="deadline"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-on-surface outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="btn-primary flex-1 justify-center"
              >
                <span className="material-symbols-outlined text-xl">publish</span>
                Publier l'offre
              </button>
              <button
                type="button"
                className="btn-ghost"
              >
                <span className="material-symbols-outlined text-xl">save</span>
                Enregistrer le brouillon
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-3 text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>

        {/* AI Tip panel — 1 col */}
        <div className="col-span-1 space-y-4">
          {/* Live preview */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="text-sm font-semibold text-on-surface mb-3">Aperçu de l'offre</div>
            <div className="bg-surface rounded-xl p-4 border border-outline-variant">
              <div className="font-semibold text-on-surface text-sm mb-1">{title || 'Titre de l\'offre'}</div>
              <div className="text-xs text-on-surface-variant mb-2">InnovateTech · {location || 'Lieu'}</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-lg">{s}</span>
                ))}
                {skills.length > 3 && (
                  <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-lg">+{skills.length - 3}</span>
                )}
              </div>
            </div>
          </div>

          {/* AI Tips */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-semibold text-primary">Conseils IA</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/70 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div className="text-xs font-semibold text-on-surface">Titre accrocheur</div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Mentionnez les technologies clés dans le titre pour attirer plus de candidats qualifiés.</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>tips_and_updates</span>
                  <div className="text-xs font-semibold text-on-surface">Description optimale</div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Une description de 300-500 mots avec des missions claires génère 40% plus de candidatures.</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                  <div className="text-xs font-semibold text-on-surface">Compétences clés</div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Limitez à 5-7 compétences essentielles. Trop de prérequis décourage les bons candidats.</p>
              </div>
            </div>
          </div>

          {/* Visibility estimate */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-5">
            <div className="text-sm font-semibold text-on-surface mb-3">Estimation de visibilité</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Candidats potentiels</span>
                <span className="font-semibold text-on-surface">~120</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Score de l'offre</span>
                <span className="font-semibold text-primary">72/100</span>
              </div>
              <div className="h-2 bg-surface-container rounded-full overflow-hidden mt-2">
                <div className="h-full w-[72%] bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
