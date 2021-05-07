CREATE EXTENSION IF NOT EXISTS ltree;

CREATE TABLE cat_node (
    id INTEGER PRIMARY KEY,
    cat_name TEXT,
    sire_id INTEGER REFERENCES cat_node,
    dam_id INTEGER REFERENCES cat_node,
    sire_path ltree,
    dam_path ltree
);

CREATE INDEX sire_tree_path_idx ON cat_node USING GIST (sire_path);
CREATE INDEX dam_tree_path_idx ON cat_node USING GIST (dam_path);
CREATE INDEX node_sire_id_idx ON cat_node (sire_id);
CREATE INDEX node_dam_id_idx ON cat_node (dam_id);


-- update sire path
CREATE OR REPLACE FUNCTION update_node_sire_path() RETURNS TRIGGER AS $$
    DECLARE
        path ltree;
        path_name TEXT;
    BEGIN
        IF NEW.sire_id IS NULL THEN
            path_name = CONCAT('sire_root_', NEW.cat_name);
            NEW.sire_path = path_name::ltree;
        ELSEIF TG_OP = 'INSERT' OR OLD.sire_id IS NULL OR OLD.sire_id != NEW.sire_id THEN
            SELECT sire_path || id::text FROM cat_node WHERE id = NEW.sire_id INTO path;
            IF path IS NULL THEN
                RAISE EXCEPTION 'Invalid sire_id %', NEW.sire_id;
            END IF;
            NEW.sire_path = path;
        END IF;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sire_path_tgr
    BEFORE INSERT OR UPDATE ON cat_node
    FOR EACH ROW EXECUTE PROCEDURE update_node_sire_path();

-- update dam path
CREATE OR REPLACE FUNCTION update_node_dam_path() RETURNS TRIGGER AS $$
    DECLARE
        path ltree;
        path_name TEXT;
    BEGIN
        IF NEW.dam_id IS NULL THEN
            path_name = CONCAT('dam_root_', NEW.cat_name);
            NEW.dam_path = path_name ::ltree;
        ELSEIF TG_OP = 'INSERT' OR OLD.dam_id IS NULL OR OLD.dam_id != NEW.dam_id THEN
            SELECT dam_path || id::text FROM cat_node WHERE id = NEW.dam_id INTO path;
            IF path IS NULL THEN
                RAISE EXCEPTION 'Invalid dam_id %', NEW.dam_id;
            END IF;
            NEW.dam_path = path;
        END IF;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER dam_path_tgr
    BEFORE INSERT OR UPDATE ON cat_node
    FOR EACH ROW EXECUTE PROCEDURE update_node_dam_path();



-- insert new nodes
-- suppose bella has two children
INSERT INTO cat_node (id, cat_name) VALUES (110110110, 'Bella');
INSERT INTO cat_node (id, cat_name) VALUES (210110110, 'Vincent');
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (110111210, 'Renee', 210110110, 110110110);
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (216788999, 'Leona', 210110110, 110110110);

-- suppose renee and Mars has 3 children
INSERT INTO cat_node (id, cat_name) VALUES (310110110, 'Mars');
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (990990990, 'Alita', 310110110, 110111210);
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (990990991, 'Liliya', 310110110, 110111210);
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (990990992, 'Eliss', 310110110, 110111210);

-- suppose Alita and Nick has 1 child
INSERT INTO cat_node (id, cat_name) VALUES (410110110, 'Nick');
INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES (880880880, 'Alex', 410110110, 990990990);

--found descendents of bella
SELECT * FROM cat_node WHERE dam_path <@ 'dam_root_Bella.110110110';

--found siblings and parents of renee
SELECT * FROM cat_node WHERE dam_path @> 'dam_root_Bella.110110110'  OR sire_path @> 'sire_root_Vincent.210110110';