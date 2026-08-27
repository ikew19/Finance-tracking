import { prisma } from "../prisma.js";

// Récupère les transactions appartenant à l'utilisateur `userId`.
// Rappel (autorisation) : une transaction n'a pas de `userId` — son propriétaire est
// celui de son COMPTE. Il faut donc filtrer À TRAVERS la relation, comme on l'a vu.
export async function listTransactions(userId) {
  const transactions = prisma.transactions.findMany({
    where: {
      comptes: {
        idu: userId
      }
    }
  })
  return transactions
}

export async function deleteTransaction(transactionId, userId) {
  const transaction = await prisma.transactions.findUnique({
    where: {
      idt: transactionId,
    },
    include: {
      comptes: true
    }
  })

  if(!transaction) return {
    status: "NOT_FOUND",
  }

  if(transaction.comptes.userId !== userId) return {
    status: "FORBIDDEN",
  }
  
  await prisma.transactions.delete({
    where: {
      transactionId: transactionId
    }
  })

  return {
    status: "DELETED",
    data: transaction
  }
}

export async function updateTransaction(transactionId, userId, data) {
  const transaction = await prisma.transactions.findUnique({
    where: {
      idt: transactionId,
    },
    include: {
      comptes: true
    }
  })

  if(!transaction) return {
    status: "NOT_FOUND",
  }

  if(transaction.comptes.idu !== userId) return {
    status: "FORBIDDEN",
  }
  
  const updatedTransaction = await prisma.transactions.update({
    where: {
      idt: transactionId
    },
    data: data
  })

  return {
    status: "UPDATED",
    data: updatedTransaction
  }
}

export async function createTransaction(userId, data) {
  const userOwnAccount = await prisma.comptes.findUnique({
    where: {
      numc: data.numc,
      idu: userId
    }
  })
  if (!userOwnAccount) return {
    status: "BAD_REQUEST"
  }
  const createdTransaction = await prisma.transactions.create({
    data: data
  })
  return {
    status: "CREATED",
    data: createdTransaction
  }
}