-- Dtop tables if they exist (reset)
DROP TABLE IF EXISTS biomes;
DROP TABLE IF EXISTS mobs;

-- Create / re-create tables
CREATE TABLE biomes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);

CREATE TABLE mobs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL,
  about TEXT NOT NULL,
  hit_points INTEGER NOT NULL,
  biome_id INTEGER NOT NULL,
  FOREIGN KEY (biome_id) REFERENCES biomes(id) ON DELETE CASCADE,
  damage INTEGER NOT NULL,
  hostile BOOLEAN NOT NULL DEFAULT FALSE
);



-- Seed Data
INSERT INTO biomes
  (name)
VALUES
  ('Plains'),
  (''),
  (''),
  ('');



INSERT INTO mobs
  (name, about, hit_points, biome_id, damage, hostile)
VALUES
  ('Creeper', "Creepers are cool", 20, 1, 10, true),
  (),
  (),
  (),
  (),
  (),
  (),
  ();


