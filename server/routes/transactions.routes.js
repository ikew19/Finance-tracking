import { Router } from "express";
import { createTransaction, deleteTransaction, listTransactions, updateTransaction } from "../services/transactions.services.js";

const router = Router();

router.get("/", async (req, res) => {
  const userId = "2" // remplacer par idu de la session
  const transactions = await listTransactions(userId);
  res.status(200).json(transactions);
});

router.delete("/:transactionId", async (req,res) => {
  const transactionId = req.params.transactionId
  const userId = "1" // remplacer par idu de la session
  const result = await deleteTransaction(transactionId, userId)
  
  switch (result.status) {
    case "NOT_FOUND":
      return res.status(404).json({ error: "Transaction not found" })

    case "FORBIDDEN":
      return res.status(403).json({ error: "Forbidden" })

    case "DELETED":
      return res.status(204).json({data: result.data})
  }
})

router.patch("/:transactionId", async (req, res) => {
  const transactionId = req.params.transactionId
  const userId = "2" // remplacer par idu de la session
  const data = {
    description: "desc1"
  }
  const result = await updateTransaction(transactionId, userId, data)
  
  switch (result.status) {
    case "NOT_FOUND":
      return res.status(404).json({ error: "Transaction not found" })

    case "FORBIDDEN":
      return res.status(403).json({ error: "Forbidden" })

    case "UPDATED":
      return res.status(200).json({data: result.data})
  }
})

router.post("/", async (req, res) => {
  const userId = "1" // remplacer par idu de la session
  const data = req.body
  const result = await createTransaction(userId, data)
  switch (result.status) {
    case "BAD_REQUEST":
      return res.status(400).json({ error: "invalid body format or value" })

    case "CREATED":
      return res.status(201).json({data: result.data})
  }
})

export default router;