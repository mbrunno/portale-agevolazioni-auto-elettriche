CREATE TABLE comuni (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  regione TEXT,
  provincia TEXT,
  cap TEXT,
  latitudine FLOAT,
  longitudine FLOAT
);

CREATE TABLE agevolazioni (
  id SERIAL PRIMARY KEY,
  comune_id INTEGER REFERENCES comuni(id),
  tipo TEXT CHECK (tipo IN ('ztl', 'parcheggio')),
  descrizione TEXT,
  link_registrazione TEXT,
  note TEXT,
  ultima_modifica TIMESTAMP DEFAULT NOW()
);

CREATE TABLE segnalazioni (
  id SERIAL PRIMARY KEY,
  comune_id INTEGER REFERENCES comuni(id),
  tipo_agevolazione TEXT,
  messaggio TEXT,
  email TEXT,
  stato TEXT DEFAULT 'in attesa'
);