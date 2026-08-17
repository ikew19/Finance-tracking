import { prisma } from "../prisma.js";

// Récupère les transactions appartenant à l'utilisateur `userId`.
// Rappel (autorisation) : une transaction n'a pas de `idu` — son propriétaire est
// celui de son COMPTE. Il faut donc filtrer À TRAVERS la relation, comme on l'a vu.
export async function listTransactions(userId) {
  // TODO : écris la requête.
  //   return prisma.transactions.findMany({ where: { /* le compte appartient à userId */ } });
  //   (adapte "compte" au nom de ton champ de relation si tu l'as nommé autrement)
}