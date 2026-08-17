// Signature spéciale à 4 arguments (err en premier) → Express le reconnaît comme handler d'erreur.
export function errorHandler(err, req, res, next) {
  console.error(err); // les détails restent côté serveur, jamais renvoyés au client
  res.status(err.status || 500).json({ error: err.message || "Erreur serveur" });
}