import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
// ⚠️ Ce chemin dépend du bloc `generator` de ton schema.prisma :
//   - provider "prisma-client" avec output "../generated/prisma"  → garde cette ligne
//   - provider "prisma-client-js" (classique)  → remplace par :  import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// UNE seule instance, partagée dans toute l'app
export const prisma = new PrismaClient({ adapter });