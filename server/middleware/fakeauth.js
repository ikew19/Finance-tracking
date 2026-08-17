// ⚠️ TEMPORAIRE — à remplacer par le vrai middleware d'auth (session) plus tard.
// On simule un utilisateur connecté pour développer les routes sans attendre l'auth.
export function fakeAuth(req, res, next) {
  req.userId = "u1"; // TODO: remplacer par l'utilisateur réel de la session
  next();
}