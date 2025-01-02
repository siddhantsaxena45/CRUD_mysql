const { faker } = require('@faker-js/faker');
const { v4: uuid } = require('uuid');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'test123',
    port: 3307
});

let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
};
let users = [];
for (let i = 0; i < 100; i++) {
    users.push(createRandomUser());
}
let q = 'INSERT INTO user (id, username, email, password) VALUES ?';
try {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.error(err);
}
