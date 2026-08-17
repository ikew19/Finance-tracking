import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fakeAuth } from "./middleware/fakeAuth.js";
import { errorHandler } from "./middleware/errorHandler.js";
import transactionsRouter from "./routes/transactions.routes.js";

// Ta migration a gardé idT en BigInt (BIGSERIAL), or JSON ne sait pas sérialiser un BigInt.
// Ce shim règle ça pour voir la tranche tourner. (Plus propre à terme : repasser idT en Int.)
BigInt.prototype.toJSON = function () { return this.toString(); };

export const app = express();

// ── Middlewares de base (l'ordre compte : de haut en bas) ──
app.use(helmet());                                    // en-têtes de sécurité
app.use(cors({ origin: "http://localhost:5173" }));   // autorise TON front (adapte le port de Vite)
app.use(express.json());                              // parse le body JSON
app.use(fakeAuth);                                    // ⚠️ temporaire : pose req.userId

// ── Route de santé (vérifie que le serveur vit) ──
app.get("/health", (req, res) => res.json({ status: "ok" }));

// ── Routes de l'API ──
app.use("/transactions", transactionsRouter);

// ── Gestion d'erreur : TOUJOURS en dernier ──
app.use(errorHandler);