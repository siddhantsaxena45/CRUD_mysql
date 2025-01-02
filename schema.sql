DROP table if exists user;
CREATE TABLE user (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) unique,
    email VARCHAR(255) unique not null,
    password VARCHAR(255) not null
);
