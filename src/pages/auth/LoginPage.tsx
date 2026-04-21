import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type Tab = "login" | "register";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [tab, setTab] = useState<Tab>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("etudiant");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      const savedRole =
        JSON.parse(atob(localStorage.getItem("access_token")!.split(".")[1])).role;
      if (savedRole === "etudiant") navigate("/etudiant/tableau-de-bord");
      else if (savedRole === "entreprise") navigate("/entreprise/tableau-de-bord");
      else if (savedRole === "club") navigate("/admin/interface");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(email, password, role);
      setSuccess("Compte créé ! Vous pouvez maintenant vous connecter.");
      setTab("login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur d'inscription");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary"></div>
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/logo-enim-connect.svg"
                className="w-12 h-12 object-contain"
                alt="EnimConnect Logo"
              />
              <span className="font-headline font-bold text-xl">EnimConnect</span>
            </div>
            <h1 className="font-headline font-extrabold text-4xl leading-tight mb-4">
              Propulsez votre<br />carrière avec l'IA
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Découvrez des opportunités de stages personnalisées grâce à notre
              moteur de recommandation intelligent.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-headline font-bold text-2xl">500+</div>
              <div className="text-white/70 text-sm">Offres de stages</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <div className="font-headline font-bold text-2xl">200+</div>
              <div className="text-white/70 text-sm">Entreprises partenaires</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <div className="font-headline font-bold text-2xl">95%</div>
              <div className="text-white/70 text-sm">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/logo-enim-connect.svg"
              className="w-12 h-12 object-contain bg-white rounded-xl shadow-lg"
              alt="EnimConnect Logo"
            />
            <div>
              <div className="font-headline font-bold text-xl text-on-surface leading-tight">
                EnimConnect
              </div>
              <div className="text-xs text-on-surface-variant">
                Plateforme de stages intelligente
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-surface-container rounded-xl p-1 mb-6">
            <button
              onClick={() => { setTab("login"); setError(null); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "login"
                  ? "bg-white shadow-sm text-on-surface"
                  : "text-on-surface-variant"
              }`}
            >
              Se connecter
            </button>
            <button
              onClick={() => { setTab("register"); setError(null); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "register"
                  ? "bg-white shadow-sm text-on-surface"
                  : "text-on-surface-variant"
              }`}
            >
              Créer un compte
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl">
              {success}
            </div>
          )}

          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Adresse email
                </label>
                <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Mot de passe
                </label>
                <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">
                    lock
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <span className="material-symbols-outlined text-xl animate-spin">
                    progress_activity
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-xl">login</span>
                )}
                Se connecter
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Adresse email
                </label>
                <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Mot de passe
                </label>
                <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">
                    lock
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Je suis
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "etudiant", label: "Étudiant", icon: "school" },
                    { value: "entreprise", label: "Entreprise", icon: "business" },
                  ].map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setRole(r.value)}
                      className={`flex items-center gap-2 p-3 rounded-xl border transition-colors text-sm font-medium ${
                        role === r.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-outline-variant text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{r.icon}</span>
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <span className="material-symbols-outlined text-xl">progress_activity</span>
                ) : (
                  <span className="material-symbols-outlined text-xl">person_add</span>
                )}
                Créer mon compte
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
