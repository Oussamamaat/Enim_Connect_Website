import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/etudiant/tableau-de-bord');
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — decorative, hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD773ycyiGfHnw__swL-BOfLkX-LU75xyGX-gx7YqzujisKch2XfHyLAfn1tOpfjstLkNrZTe3TXPXVGivdgzglv1NJ2VpkRzD55D0vyYNzQXcjJZKRM7UeUXHKyogK23iscp7W3MI1Mi5DqWQJ5MXADdKNa-DUKVH-rBqIKjU2ffovpTncd6wD_9CwzkNf9PRms6PVs2YCqQSIkV53D1d2DvYw3Z2t-BDVbsdphnp9m_AnpD5jJzdu5NYbEHwh_8PgBKYMV9o53BuA"
          alt="Carrière"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-transparent"></div>
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo-enim-connect.svg" className="w-12 h-12 object-contain" alt="EnimConnect Logo" />
              <span className="font-headline font-bold text-xl">EnimConnect</span>
            </div>
            <h1 className="font-headline font-extrabold text-4xl leading-tight mb-4">
              Propulsez votre<br />carrière avec l'IA
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Découvrez des opportunités de stages personnalisées grâce à notre moteur de recommandation intelligent. Connectez-vous avec les meilleures entreprises de votre domaine.
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

      {/* Right Panel — login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo-enim-connect.svg" className="w-12 h-12 object-contain bg-white rounded-xl shadow-lg" alt="EnimConnect Logo" />
            <div>
              <div className="font-headline font-bold text-xl text-on-surface leading-tight">EnimConnect</div>
              <div className="text-xs text-on-surface-variant">Plateforme de stages intelligente</div>
            </div>
          </div>

          <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">
            Connectez-vous à EnimConnect
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Accédez à votre espace personnel et découvrez vos opportunités.
          </p>

          {/* Google login */}
          <button className="flex items-center justify-center gap-3 w-full border border-outline-variant rounded-xl py-3 px-4 hover:bg-surface-container transition-colors mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-medium text-on-surface">Continuer avec Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-outline-variant"></div>
            <span className="text-xs text-on-surface-variant">ou</span>
            <div className="flex-1 h-px bg-outline-variant"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
                Adresse email
              </label>
              <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">mail</span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-2">
                Mot de passe
              </label>
              <div className="flex items-center gap-3 border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">lock</span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none"
                />
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-xs text-primary hover:underline">Mot de passe oublié ?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">login</span>
              Se connecter
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm text-on-surface-variant mt-6">
            Pas encore de compte ?{' '}
            <a href="#" className="text-primary font-semibold hover:underline">Créer un compte</a>
          </p>

          {/* Demo links */}
          <div className="mt-8 p-4 bg-surface-container rounded-xl">
            <p className="text-xs text-on-surface-variant font-medium mb-3">Accès démo rapide :</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/etudiant/tableau-de-bord" className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium">
                Espace Étudiant
              </Link>
              <Link to="/entreprise/tableau-de-bord" className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-medium">
                Espace Entreprise
              </Link>
              <Link to="/entreprise/gestion-candidats" className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium">
                Détail Candidat (Existant)
              </Link>
              <Link to="/admin" className="text-xs px-3 py-1.5 bg-tertiary/10 text-tertiary rounded-lg hover:bg-tertiary/20 transition-colors font-medium">
                Administration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
