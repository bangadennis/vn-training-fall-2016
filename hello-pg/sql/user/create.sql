DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  id          SERIAL PRIMARY KEY,
  email       TEXT,
  username    TEXT,
  description TEXT
);
