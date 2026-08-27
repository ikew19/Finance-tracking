--CREATE DATABASE financedb;

CREATE TABLE IF NOT EXISTS utilisateurs (
    idU VARCHAR(30) PRIMARY KEY,
    nom TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    mdp TEXT
);

CREATE TYPE type_card AS ENUM (
    'visa',
    'mastercard',
    'discover',
    'interac',
    'american express'
);

CREATE TABLE IF NOT EXISTS comptes (
    numC VARCHAR(19) PRIMARY KEY,
    idU VARCHAR(30),
    nom TEXT NOT NULL UNIQUE,
    solde INTEGER DEFAULT 0,
    typeC type_card NOT NULL,
    FOREIGN KEY (idU) REFERENCES utilisateurs (idU)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS transactions (
    idT BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    numC VARCHAR(19),
    montant INTEGER,
    description TEXT,
    categorie TEXT,
    typeT TEXT CHECK (typeT in ('depense', 'revenu')),
    FOREIGN KEY (numC) REFERENCES comptes (numC)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE OR REPLACE FUNCTION update_transaction_type()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.montant < 0 THEN
        NEW.typet := 'depense';
    ELSE
        NEW.typet := 'revenu';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_transaction_type
    BEFORE INSERT ON transactions
    FOR EACH ROW
    EXECUTE FUNCTION update_transaction_type();

SELECT current_database(); 