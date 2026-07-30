-- CreateEnum
CREATE TYPE "type_card" AS ENUM ('visa', 'mastercard', 'discover', 'interac', 'american express');

-- CreateTable
CREATE TABLE "comptes" (
    "numc" VARCHAR(19) NOT NULL,
    "idu" VARCHAR(30),
    "nom" TEXT NOT NULL,
    "solde" INTEGER DEFAULT 0,
    "typec" "type_card" NOT NULL,

    CONSTRAINT "comptes_pkey" PRIMARY KEY ("numc")
);

-- CreateTable
CREATE TABLE "transactions" (
    "idt" BIGSERIAL NOT NULL,
    "numc" VARCHAR(19),
    "idc" TEXT,
    "montant" INTEGER,
    "description" TEXT,
    "typet" TEXT,
    "datet" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("idt")
);

-- CreateTable
CREATE TABLE "utilisateurs" (
    "idu" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mdp" TEXT,

    CONSTRAINT "utilisateurs_pkey" PRIMARY KEY ("idu")
);

-- CreateTable
CREATE TABLE "categories" (
    "idc" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "idu" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("idc")
);

-- CreateTable
CREATE TABLE "budgets" (
    "idb" TEXT NOT NULL,
    "idu" TEXT NOT NULL,
    "idc" TEXT NOT NULL,
    "montantPrevu" INTEGER NOT NULL,
    "mois" INTEGER NOT NULL,
    "annee" INTEGER NOT NULL,

    CONSTRAINT "budgets_pkey" PRIMARY KEY ("idb")
);

-- CreateIndex
CREATE UNIQUE INDEX "comptes_nom_key" ON "comptes"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "utilisateurs_email_key" ON "utilisateurs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_nom_key" ON "categories"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "budgets_idu_idc_mois_annee_key" ON "budgets"("idu", "idc", "mois", "annee");

-- AddForeignKey
ALTER TABLE "comptes" ADD CONSTRAINT "comptes_idu_fkey" FOREIGN KEY ("idu") REFERENCES "utilisateurs"("idu") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_idc_fkey" FOREIGN KEY ("idc") REFERENCES "categories"("idc") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_numc_fkey" FOREIGN KEY ("numc") REFERENCES "comptes"("numc") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_idu_fkey" FOREIGN KEY ("idu") REFERENCES "utilisateurs"("idu") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_idu_fkey" FOREIGN KEY ("idu") REFERENCES "utilisateurs"("idu") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_idc_fkey" FOREIGN KEY ("idc") REFERENCES "categories"("idc") ON DELETE RESTRICT ON UPDATE CASCADE;
