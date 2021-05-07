CREATE TABLE cattery (
    reg_email TEXT NOT NULL,
    reg_phone TEXT NOT NULL,
    cattery_name TEXT,
    organization varchar(20) NOT NULL,
    owner_name varchar(20) NOT NULL,
    city varchar(30) NOT NULL,
    PRIMARY KEY(reg_email, reg_phone)
);
