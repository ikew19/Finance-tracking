import { Router } from "express";
import { listTransactions } from "../services/transactions.services.js";

const router = Router();

// GET /transactions → mes transactions
router.get("/", async (req, res) => {
  const transactions = await listTransactions(req.userId);
  res.status(200).json(transactions);
});

export default router;