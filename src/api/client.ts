const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

function getAccessToken(): string | null {
  return localStorage.getItem("access_token");
}

function setTokens(access: string, refresh: string) {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
}

function clearTokens() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

async function refreshAccessToken(): Promise<string | null> {
  const refresh = localStorage.getItem("refresh_token");
  if (!refresh) return null;
  const res = await fetch(`${API_BASE}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refresh }),
  });
  if (!res.ok) {
    clearTokens();
    return null;
  }
  const data = await res.json();
  localStorage.setItem("access_token", data.access_token);
  return data.access_token;
}

async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  let token = getAccessToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  let res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  if (res.status === 401 && token) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      headers["Authorization"] = `Bearer ${newToken}`;
      res = await fetch(`${API_BASE}${path}`, { ...options, headers });
    }
  }

  return res;
}

async function apiJson<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: "Erreur réseau" }));
    throw new Error(err.detail ?? "Erreur inconnue");
  }
  return res.json();
}

export const api = {
  // Auth
  register: (email: string, password: string, role: string) =>
    apiJson("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, role }),
    }),

  login: async (email: string, password: string) => {
    const data = await apiJson<{ access_token: string; refresh_token: string }>(
      "/auth/login",
      { method: "POST", body: JSON.stringify({ email, password }) }
    );
    setTokens(data.access_token, data.refresh_token);
    return data;
  },

  logout: async () => {
    await apiFetch("/auth/logout", { method: "POST" });
    clearTokens();
  },

  // Étudiant
  getMonProfil: () => apiJson("/etudiants/me"),
  updateMonProfil: (body: object) =>
    apiJson("/etudiants/me", { method: "PUT", body: JSON.stringify(body) }),
  uploadPhoto: (file: File) => {
    const form = new FormData();
    form.append("file", file);
    return apiFetch("/etudiants/me/photo", { method: "POST", body: form }).then((r) => r.json());
  },
  uploadCV: (file: File) => {
    const form = new FormData();
    form.append("file", file);
    return apiFetch("/etudiants/me/cv", { method: "POST", body: form }).then((r) => r.json());
  },
  getMonCV: () => apiJson("/etudiants/me/cv"),
  getMesCandidatures: () => apiJson("/etudiants/me/candidatures"),

  // Annonces (public / étudiant)
  getAnnonces: () => apiJson("/annonces"),
  getAnnonce: (id: string) => apiJson(`/annonces/${id}`),
  postuler: (id: string) => apiJson(`/annonces/${id}/postuler`, { method: "POST" }),
  retirerCandidature: (id: string) =>
    apiFetch(`/annonces/${id}/postuler`, { method: "DELETE" }),

  // Entreprise
  getMonEntreprise: () => apiJson<EntrepriseProfile>("/entreprises/me"),
  updateMonEntreprise: (body: object) =>
    apiJson("/entreprises/me", { method: "PUT", body: JSON.stringify(body) }),
  creerAnnonce: (body: object) =>
    apiJson("/entreprises/annonces", { method: "POST", body: JSON.stringify(body) }),
  getMesAnnonces: () => apiJson<Annonce[]>("/entreprises/annonces"),
  modifierAnnonce: (id: string, body: object) =>
    apiJson(`/entreprises/annonces/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  supprimerAnnonce: (id: string) =>
    apiFetch(`/entreprises/annonces/${id}`, { method: "DELETE" }),
  getCandidatures: (annonceId: string) =>
    apiJson<Candidat[]>(`/entreprises/annonces/${annonceId}/candidatures`),
  rechercherEtudiants: (params: { departement?: string; niveau?: string }) =>
    apiJson<EtudiantRecherche[]>(
      `/entreprises/recherche?${new URLSearchParams(
        Object.fromEntries(Object.entries(params).filter(([, v]) => v)) as Record<string, string>
      ).toString()}`
    ),

  // Club
  getEntreprises: () => apiJson("/club/entreprises"),
  validerEntreprise: (id: string) =>
    apiJson(`/club/entreprises/${id}/valider`, { method: "PUT" }),
  rejeterEntreprise: (id: string) =>
    apiJson(`/club/entreprises/${id}/rejeter`, { method: "PUT" }),
  getStats: () => apiJson("/club/stats"),
  getClubAnnonces: () => apiJson<Annonce[]>("/club/annonces"),
  validerAnnonceClub: (id: string) =>
    apiJson(`/club/annonces/${id}/valider`, { method: "PUT" }),
  rejeterAnnonceClub: (id: string) =>
    apiJson(`/club/annonces/${id}/rejeter`, { method: "PUT" }),

  // Notifications
  getNotifications: () => apiJson<Notification[]>("/notifications"),
  countNonLues: () => apiJson<number>("/notifications/non-lues"),
  marquerLue: (id: string) => apiJson(`/notifications/${id}/lire`, { method: "POST" }),
  marquerToutLu: () => apiJson("/notifications/lire-tout", { method: "POST" }),
  supprimerNotification: (id: string) => apiFetch(`/notifications/${id}`, { method: "DELETE" }),

  // Helpers
  clearTokens,
  apiBase: API_BASE,
  getRole: () => {
    const token = getAccessToken();
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.role as string;
    } catch {
      return null;
    }
  },
  isAuthenticated: () => !!getAccessToken(),
};

// ─── Shared types ────────────────────────────────────────────────────────────

export interface Annonce {
  id: string;
  entreprise_id: string;
  titre: string;
  description: string;
  departement: string;
  duree_mois?: number;
  statut: "en_attente" | "validee" | "rejetee";
  is_active: boolean;
  created_at: string;
  nom_entreprise?: string;
  ville?: string;
  motif?: string;
}

export interface Candidat {
  etudiant_id: string;
  nom: string;
  prenom: string;
  email: string;
  niveau?: string;
  filiere?: string;
  competences: string[];
  photo_url?: string;
  cv_url?: string;
  description_cv?: string;
  date_candidature: string;
}

export interface EtudiantRecherche {
  etudiant_id: string;
  nom: string;
  prenom: string;
  email: string;
  niveau?: string;
  filiere?: string;
  departement?: string;
  competences: string[];
  photo_url?: string;
  a_un_cv: boolean;
}

export interface Notification {
  id: string;
  titre: string;
  message: string;
  lu: boolean;
  created_at: string;
}

export interface EntrepriseProfile {
  id: string;
  nom_entreprise: string;
  secteur?: string;
  ville?: string;
  valide: boolean;
  email: string;
}
