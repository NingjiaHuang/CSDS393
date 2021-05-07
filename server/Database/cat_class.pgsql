CREATE TABLE cat  (
    cur_owner_cattery varchar (100) NOT NULL,
    certi_num int NOT NULL,
    title varchar(30),
    cat_reg_name varchar (100) NOT NULL,
    cat_name varchar (100) NOT NULL,
    breed varchar (20) NOT NULL,
    sex varchar (15) NOT NULL,
    birth_date DATE NOT NULL,
    sire_name varchar (100) NOT NULL,
    dam_name varchar (100) NOT NULL,
    sale_status varchar (20) NOT NULL,
    PRIMARY KEY(certi_num)
);

CREATE TABLE breed_cat (
  retire_statue varchar (20) NOT NULL
) INHERITS (cat);

CREATE TABLE preg_cat (
  weight real NOT NULL,
  health_cond varchar (20) NOT NULL
) INHERITS (cat);

CREATE TABLE kitten (
  weight real NOT NULL,
  health_cond varchar (20) NOT NULL,
  vaccination_cond varchar (40) NOT NULL
) INHERITS (cat);


-- insert instance
INSERT INTO breed_cat (cur_owner_cattery, certi_num, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, retire_statue, sale_status) VALUES ('lunarag', 011019243, 'USAPurrs Bailey of Kimuradolls', 'Bailey', 'Ragdoll', 'Female', '2018-04-17', 'Koc-Pol Cat Vega', 'USAPurrs American Heartbeat', 'Not Retired', 'NFS');

INSERT INTO breed_cat (cur_owner_cattery, certi_num, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, retire_statue, sale_status) VALUES
       ('lunarag', 011019246, 'Legendabastet Canada of Kimuradolls', 'Candy', 'Ragdoll', 'Female', '2020-04-24', 'Mirumkitty Touch the Stars', 'Bluqueen Bella', 'Not Retired', 'NFS');

INSERT INTO breed_cat (cur_owner_cattery, certi_num, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, retire_statue, sale_status) VALUES
     ('lunarag', 011019290, 'Maroonblue Fumiko of Kimuradolls', 'Fumiko', 'Ragdoll', 'Female', '2020-07-18', 'Teeny my Overlord of Maroonblue', 'Olympia Azure Eyes', 'Not Retired', 'NFS');

INSERT INTO breed_cat (cur_owner_cattery, certi_num, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, retire_statue, sale_status) VALUES
     ('lunarag', 011019279, 'USAPurrs Oakley of Kimuradolls', 'Oakley', 'Ragdoll', 'Male','2018-02-02', 'Cherrydolls Black Mulberry', 'Dollheaven Angelica of USAPurrs', 'Not Retired', 'NFS');

-- select instance
Select * from cat where certi_num = 011019246;
Select * from cat where cat_name = 'Candy';

-- delete instance
DELETE FROM breed_cat WHERE certi_num = 011019290;
DELETE FROM breed_cat WHERE cat_name = 'Candy';

-- update instance
UPDATE breed_cat
SET cat_name = 'Okalay' 
WHERE certi_num = 011019279;