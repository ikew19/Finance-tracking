# Spécification — Suivi de finances personnelles

*Document de cadrage léger (mini-PRD) — version 1. Destiné à vivre dans le dépôt (par ex. `SPEC.md` à la racine) et à être mis à jour au fil du projet.*

---

## 1. Objectif

**Objectif produit.** Permettre à une personne de suivre ses finances personnelles dans une application web sécurisée : enregistrer ses revenus et dépenses sur un ou plusieurs comptes, les catégoriser, fixer des budgets, et visualiser où va son argent.

**Objectif d'apprentissage (prioritaire).** C'est avant tout un projet pédagogique. Il sert de véhicule pour maîtriser une **chaîne de production complète** : frontend React, API backend, authentification, sécurité, déploiement et monitoring. Le périmètre fonctionnel est *volontairement restreint* pour aller en **profondeur** sur ces couches plutôt que d'accumuler des fonctionnalités.

> Conséquence directe : à chaque arbitrage, on privilégie la maîtrise d'une couche de production plutôt que l'ajout d'une fonctionnalité.

---

## 2. Objectifs d'apprentissage

- **React** : composants, gestion d'état, routing, formulaires validés, visualisation de données.
- **Backend** : conception d'API REST, modélisation de données relationnelles, **représentation monétaire exacte**, **transactions ACID**.
- **Authentification** : inscription/connexion, sessions, routes protégées, hachage de mots de passe.
- **Sécurité** : isolation des données par utilisateur, validation/sanitisation, journal d'audit, gestion des secrets, HTTPS et en-têtes.
- **Opérations** : conteneurisation (Docker), CI/CD, tâches planifiées / file de jobs, observabilité (logs, suivi d'erreurs, métriques, alertes).
- **Pratiques d'équipe** : Git (branches + PR + revue de code), backlog, *definition of done*.

---

## 3. Utilisateurs

Un seul type d'utilisateur : un **particulier** qui gère ses finances personnelles. Pas de rôles multiples ni d'administrateur dédié dans le MVP.

---

## 4. Portée

### 4.1 Dans le MVP

- Comptes utilisateurs (inscription, connexion, déconnexion)
- Comptes financiers multiples (courant, épargne, carte, espèces)
- Transactions (revenus / dépenses) : montant, date, catégorie, compte, note
- Virements entre comptes (**opération atomique**)
- Catégories : par défaut + personnalisées
- Budgets mensuels par catégorie
- Tableau de bord : entrées/sorties, répartition par catégorie, budget vs réel, tendance dans le temps
- Transactions récurrentes (créées par un **job planifié**)
- Isolation stricte des données par utilisateur

### 4.2 Hors périmètre (non-goals)

Aussi important que la liste précédente : ce qu'on **ne fera pas**, pour éviter la dérive de périmètre.

- Intégration de vraies API bancaires (Plaid, etc.) — réglementé, lourd, risque de sécurité
- Multi-devises et taux de change (futur éventuel)
- Application mobile native
- Partage / collaboration entre plusieurs utilisateurs
- Fonctions fiscales ou déclarations
- Suivi d'investissements, crypto, prêts/amortissements

---

## 5. Exigences fonctionnelles (récits utilisateur)

Format : « En tant qu'utilisateur, je peux _… afin de …_ ».

**Authentification**
- Créer un compte avec courriel + mot de passe.
- Me connecter et me déconnecter.
- *(Mes mots de passe sont hachés, jamais stockés en clair.)*

**Comptes financiers**
- Créer, renommer et supprimer des comptes.
- Voir le solde courant de chaque compte.

**Transactions**
- Ajouter une transaction (montant, type revenu/dépense, date, catégorie, compte, note).
- Modifier et supprimer une transaction.
- Lister mes transactions, filtrées par mois et par compte.
- Effectuer un **virement entre deux comptes** (les deux écritures réussissent ou échouent ensemble).

**Catégories**
- Utiliser des catégories par défaut et créer les miennes.

**Budgets**
- Définir un budget mensuel par catégorie.
- Voir ma consommation du mois (budget vs dépensé).

**Tableau de bord / rapports**
- Voir le total des entrées et des sorties du mois.
- Voir la répartition de mes dépenses par catégorie (graphique).
- Voir l'évolution de mes finances dans le temps (graphique).

**Transactions récurrentes**
- Définir une transaction récurrente (ex. loyer mensuel).
- Le système la crée automatiquement à l'échéance, **sans doublon**.

---

## 6. Exigences non-fonctionnelles

C'est ici que vit la rigueur « production » — le cœur des objectifs d'apprentissage.

### Sécurité
- Chaque utilisateur n'accède **strictement** qu'à ses propres données ; l'autorisation est vérifiée **côté serveur** sur chaque requête.
- Mots de passe hachés (bcrypt ou argon2), jamais en clair.
- Validation et sanitisation de **toutes** les entrées, côté serveur.
- Secrets (clés, identifiants de BD) hors du code, via variables d'environnement.
- HTTPS et en-têtes de sécurité de base.
- **Journal d'audit** des modifications : qui, quoi, quand.
- Protection contre les injections (requêtes paramétrées via l'ORM) et le CSRF (selon le mécanisme d'authentification).

### Intégrité des données
- Montants représentés en **cents entiers** (ou type décimal exact) — **jamais** en virgule flottante.
- Les virements et toute opération multi-écritures sont **atomiques** (transactions de BD, propriétés ACID).
- Les soldes sont toujours cohérents avec l'historique des transactions.
- Le job récurrent est **idempotent** : aucune double création en cas de relance.

### Fiabilité & observabilité
- Logs structurés.
- Suivi des erreurs (Sentry).
- Surveillance de l'uptime + **alerte si le service ou le job nocturne échoue**.
- Métriques de base — au minimum : succès/échec et durée d'exécution du job récurrent.

### Performance
- Temps de réponse raisonnable pour un usage personnel. Il n'y a pas d'endpoint à fort trafic : **la correction prime sur la performance**.

### Qualité & maintenabilité
- Lint + formatage automatiques (ESLint / Prettier).
- Tests sur la **logique critique** : calcul des soldes, virements, job récurrent.
- CI/CD : tests + déploiement automatiques à chaque fusion.
- Tout changement passé en **revue de code (PR)** avant fusion.

### Utilisabilité
- Interface claire ; formulaires avec messages d'erreur compréhensibles.

---

## 7. Modèle de données (haut niveau)

Entités principales et champs clés (le schéma SQL détaillé sera produit en phase backend) :

- **User** — `id`, courriel, mot de passe haché, date de création.
- **Account** — `id`, `user_id`, nom, type, devise (fixe dans le MVP).
- **Category** — `id`, `user_id` (nul si catégorie par défaut), nom, type (revenu/dépense).
- **Transaction** — `id`, `user_id`, `account_id`, `category_id`, montant (cents), type, date, note, `transfer_id` (si virement).
- **Budget** — `id`, `user_id`, `category_id`, mois, montant (cents).
- **RecurringTransaction** — `id`, `user_id`, `account_id`, `category_id`, montant, fréquence, prochaine échéance, actif.
- **AuditLog** — `id`, `user_id`, entité, action, horodatage, détails.

**Relations.** Un `User` possède plusieurs `Account`, `Category`, `Transaction`, `Budget` et `RecurringTransaction`. Une `Transaction` appartient à un `Account` et (optionnellement) à une `Category`. Un **virement** = deux `Transaction` liées, créées atomiquement.

> **Décision à documenter — solde des comptes.** Le solde peut être *calculé à la volée* (somme des transactions : plus simple, toujours cohérent) ou *stocké et mis à jour transactionnellement* (plus rapide, plus risqué). Recommandation pour le MVP : **calcul à la volée**.

---

## 8. Architecture (haut niveau)

```
Navigateur (React, SPA)
        │  appels HTTP (REST)
        ▼
   API backend (Node / Express)  ──►  PostgreSQL
        ▲                                  ▲
        │                                  │
 Planificateur / file de jobs ─────────────┘
 (transactions récurrentes)

 Observabilité : logs (pino) · erreurs (Sentry) · uptime + alertes
```

- **Frontend** : application React (SPA) qui consomme l'API REST.
- **Backend** : Node / Express ; expose l'API, applique l'authentification et les règles métier.
- **Base de données** : PostgreSQL (relationnel).
- **Tâches de fond** : `node-cron` (simple) ou file de jobs (BullMQ + Redis) pour les récurrences.
- **Monitoring** : logs structurés, suivi d'erreurs, uptime, alertes.

---

## 9. Décisions techniques clés (avec justification)

- **Argent en cents entiers** — évite les erreurs d'arrondi des nombres à virgule flottante.
- **Sessions par cookie `httpOnly`** (par défaut) — plus sûr qu'un JWT stocké dans le navigateur pour un SPA.
- **ORM Prisma** — productivité + requêtes paramétrées (anti-injection), tout en gardant la possibilité de lire le SQL généré pour comprendre le mécanisme.
- **Job récurrent** — démarrer avec `node-cron` ; migrer vers BullMQ + Redis pour les reprises automatiques et la visibilité (meilleure histoire de monitoring).
- **Solde calculé à la volée** dans le MVP — correction garantie avant de penser optimisation.

---

## 10. Critères de succès (Definition of Done du projet)

Le projet est considéré **réussi** quand :

- [ ] Toutes les fonctionnalités du MVP marchent de bout en bout.
- [ ] L'application est **déployée** et accessible publiquement, en **HTTPS**.
- [ ] Authentification, **isolation des données** et validation sont en place.
- [ ] Le **monitoring** fonctionne : logs, suivi d'erreurs, uptime, alerte sur le job.
- [ ] La logique critique est **testée** et le pipeline **CI/CD est vert**.
- [ ] Un **README** clair et une courte **démo** existent.

**Definition of Done d'une tâche** : code écrit → relu (PR) → testé → documenté.

---

## 11. Jalons (résumé)

Échéancier détaillé et répartition des tâches gérés séparément ; rappel des phases (≈ 16 semaines, ~8 h/sem. chacun, départ mi-juin 2026) :

| Phase | But | Fenêtre |
|------|-----|---------|
| Cadrage & fondations | Squelette, conventions, décision sur la représentation de l'argent | S1 |
| Backend & BD | Modèle, CRUD, virements atomiques, soldes | S2–S4 |
| Frontend React | Saisie, listes filtrables, tableau de bord | S5–S7 |
| Authentification | Inscription/connexion, sessions, routes protégées | S8–S9 |
| Sécurité | Isolation, validation, journal d'audit, secrets | S10–S11 |
| Déploiement & CI/CD | Docker, hébergement, transactions récurrentes, pipeline | S12–S13 |
| Monitoring | Fiabilité du job, logs, erreurs, alertes | S14 |
| Stabilisation & démo | Cohérence des données, README, démo, rétro | S15–S16 |

---

*Ce document est vivant : mettez-le à jour quand une décision change. Une spec qui ment est pire que pas de spec.*
