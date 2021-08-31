-- db: user:minecraft_user pw:minecraft';

-- Dtop tables if they exist (reset)
DROP TABLE IF EXISTS biomes CASCADE;
DROP TABLE IF EXISTS mobs;

-- Create / re-create tables
CREATE TABLE biomes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);

CREATE TABLE mobs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL,
  about VARCHAR(255) NOT NULL,
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
  ('Overworld dimension'),
  ('Plains'), 
  ('Forest'),
  ('Mushroom Plains'),
  ('Nether Dimension'),
  ('End Dimension'),
  ('Ocean'),
  ('Snowy Plains'),
  ('Desert');



INSERT INTO mobs
  (name, about, hit_points, biome_id, damage, hostile)
VALUES
  ('Creeper', 'Creepers will attempt to sneak up on you and blow up.', 20, 1, 49, true),
  ('Zombie', 'Zombies chase you around and continuously hit you.', 20, 1, 3, true),
  ('Enderman', 'Endermen are neutral until looked at or hit.',40, 6, 6, false),
  ('Wolf', 'Wolves are passive until hit and can be tamed with bones.', 4, 3, 1, false),
  ('Tamed Wolf', 'Tamed Wolves stay by your side and help you in combat.', 10, 3, 2, false),
  ('Skeleton', 'Skeletons will attemt to snipe you with their bow.', 20, 1, 3, true),
  ('Spider', 'Spiders will climb up walls and pounce on you from above.', 16, 1, 3, true),
  ('Cow', 'Peaceful animal found roaming around plains biomes.', 10, 2, 0, false),
  ('Mushroom Cow', 'The same as a cow except it makes mushroom stuff.', 10, 4, 0, false),
  ('Pig', 'Peaceful animal found roaming around plains biomes.', 5, 2, 0, false),
  ('Sheep', 'Peaceful animal found roaming around plains biomes.', 7, 2, 0, false),
  ('Stray', 'Similar to a skeleton. Its arrows inflict slowness.', 20, 8, 3, true),
  ('Drowned', 'A zobie that can be found underwater.', 20, 7, 5, true),
  ('Ghast', 'Shoots explosive fireballs  and flies around.', 10, 5, 17, true),
  ('Zombified Piglin', 'Can be found walking around any area in the nether.', 20, 5, 9, false),
  ('Magma Cube', 'Splits when killed into smaller magma cubes.', 16, 5, 6, true),
  ('Husk', 'Similar to a zombie. Its punches inflict hunger.', 20, 9, 3, true);


