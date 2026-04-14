import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';

export default function StudentLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant flex flex-col z-30">
        {/* Logo */}
        <div className="p-6 border-b border-outline-variant">
          <Link to="/etudiant/tableau-de-bord" className="flex items-center gap-3">
            <img src="/logo-enim-connect.svg" className="w-12 h-12 object-contain" alt="EnimConnect Logo" />
            <div>
              <div className="font-headline font-bold text-on-surface text-base leading-tight">EnimConnect</div>
              <div className="text-xs text-on-surface-variant">Espace Étudiant</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-3 py-2">Navigation</p>

          <NavLink
            to="/etudiant/tableau-de-bord"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">dashboard</span>
            Tableau de bord
          </NavLink>

          <NavLink
            to="/etudiant/recherche"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">search</span>
            Recherche de stages
          </NavLink>

          <NavLink
            to="/etudiant/candidatures"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">assignment</span>
            Mes candidatures
          </NavLink>

          {/* New Search Button */}
          <div className="pt-4">
            <Link
              to="/etudiant/recherche"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Nouvelle Recherche
            </Link>
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-outline-variant space-y-1">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-xl">help_outline</span>
            Aide
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-error hover:bg-error/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Fixed Top Header */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-8 z-20">
        {/* Search */}
        <div className="flex items-center gap-3 bg-surface-container rounded-xl px-4 py-2 w-80">
          <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
          <input
            type="text"
            placeholder="Rechercher des stages, entreprises..."
            className="bg-transparent text-sm text-on-surface placeholder-on-surface-variant outline-none w-full"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center cursor-pointer">
            <span className="text-white text-sm font-bold">L</span>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="ml-64 pt-16">
        <Outlet />
      </div>
    </div>
  );
}
