-- local DB info db:minecraft user:minecraft_user pw:minecraft';

-- Dtop tables if they exist (reset)
DROP TABLE IF EXISTS drops;
DROP TABLE IF EXISTS mobs;
DROP TABLE IF EXISTS biomes;
DROP TABLE IF EXISTS items;


Create / re-create tables
CREATE TABLE biomes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL
);

CREATE TABLE mobs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL,
  about VARCHAR(255) NOT NULL,
  hit_points INTEGER NOT NULL,
  biome_id INTEGER NOT NULL,
  FOREIGN KEY (biome_id) REFERENCES biomes(id),
  damage INTEGER NOT NULL,
  hostile BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  about VARCHAR(255) NOT NULL,
  damage INTEGER,
  armor INTEGER
);

CREATE TABLE drops (
  id SERIAL PRIMARY KEY,
  mob_id INTEGER NOT NULL,
  FOREIGN KEY (mob_id) REFERENCES mobs(id),
  item_id INTEGER NOT NULL,
  FOREIGN KEY (item_id) REFERENCES items(id)
);

-- -- Seed Data
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

INSERT INTO items
  (name, about, damage, armor)
VALUES
  ('Bow', 'A mighty bow for shooting stuff', 9, 0),
  ('Netherite sword', 'A sharp, durable melle weapon', 8, 0),
  ('Diamond Sword', 'A less sharp, less durable melle weapon', 7, 0),
  ('Diamond Chestplate', 'A strong, durable breastplate', 0, 7),
  ('Diamond Leggings', 'Strong, durable pants', 0, 6),
  ('Diamond Helmet', 'A strong, durable helmet', 0, 4),
  ('Diamond Boots', 'Strong, durable shoes', 0, 3),
  ('String', 'Good for bow strings and tripwires', 0, 0),
  ('Gunpowder', 'Useful for explosives from tnt to fireworks', 0, 0),
  ('Ender Pearl', 'A One-Use green orb that teleports the user', 0, 0),
  ('Magma Cream', 'A warm orb useful for brewing potions', 0, 0),
  ('Raw Meat', 'Can be cooked and eaten to restore hunger', 0, 0),
  ('Leather', 'Useful for making armor and other items', 0, 0),
  ('Trident', 'A stong melle and ranged weapon', 8, 0),
  ('Diamond Axe', 'Some axes are stronger than swords', 8, 0);

INSERT INTO drops
  (mob_id, item_id)
VALUES
  (6, 1),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (2, 15),
  (3, 10),
  (7, 8),
  (8, 12),
  (9, 12),
  (10, 12),
  (11, 12),
  (9, 13),
  (8, 13),
  (12, 1),
  (14, 9),
  (16, 11),
  (17, 3),
  (17, 4),
  (17, 5),
  (17, 6),
  (17, 7),
  (13, 14),
  (1, 9);


-- Queries

-- *------------* GET ALL MOBS *------------*
-- SELECT mobs.id, mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id);


-- *------------* GET MOB BY ID *------------*
-- SELECT mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id)  
-- WHERE mobs.id = 1;


-- *------------* GET MOB BY NAME *------------*
-- SELECT mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id)  
-- WHERE mobs.name = 'Creeper';
-- WHERE mobs.name IN ('Creeper', 'Zombie', 'Ghast')


-- *------------* GET RANDOM MOB *------------*
-- SELECT mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id)  
-- ORDER BY RANDOM()
-- LIMIT 1;

-- *------------* GET DROPS BY MOB *------------*
-- SELECT mobs.name, mobs.id, drops.mob_id, drops.item_id, items.id, items.name, items.about, items.damage, items.armor 
-- FROM drops
-- JOIN mobs ON (mobs.id = drops.mob_id)
-- JOIN items ON (drops.item_id = items.id)
-- WHERE mobs.name = 'Zombie';



-- *------------* POST (ADD) NEW MOB *------------*
-- INSERT INTO mobs (name, about, hit_points, biome_id, damage, hostile)
-- VALUES 
--   ('Wither', 'Withers have 3 heads and shoot flying skulls', 300, 5, 15, true);


-- SELECT mobs.id, mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id);
-- *------------* PATCH (UPDATE) MOB *------------*
-- UPDATE mobs
-- SET hostile = true
-- WHERE mobs.name = 'Pig';



-- *------------* DELETE MOB *------------*
-- DELETE FROM mobs
-- WHERE mobs.name = 'Wither';

-- SELECT mobs.id, mobs.name, about, hit_points, damage, hostile, mobs.biome_id, biomes.id, biomes.name
-- FROM mobs 
-- JOIN biomes ON (mobs.biome_id = biomes.id);