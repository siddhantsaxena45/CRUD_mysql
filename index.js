// const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const method = require('method-override');
const { v4: uuid } = require('uuid');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'test123',
    port: 3307
});
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(method('_method'));
app.use(express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) => {
    let q = 'SELECT count(*) FROM user ';
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render('home', { count });
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }

});
app.get('/users', (req, res) => {
    let q = 'SELECT * FROM user order by email';
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render('showuser', { users: result });
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }
});
app.get('/users/:id/edit', (req, res) => {

    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.render('edit', { user: result[0] });
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }

});
app.get('/users/new', (req, res) => {
    res.render('new');
});
app.post('/users', (req, res) => {
    let { username, email, password } = req.body;
    let id = uuid();
    let q = `INSERT INTO user (id,username, email, password) VALUES ('${id}','${username}', '${email}', '${password}')`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect('/users');
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }

});


app.patch('/users/:id', (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            let { username: newusername, password: formpassword } = req.body;
            if (formpassword != user.password) {
                res.send("Password is incorrect");
            }
            else {
                let q = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    res.redirect('/users');
                });
            }
        });

    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }
});
app.get('/users/:id/delete', (req, res) => {

    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render('delete', { user: result[0] });
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }

});
app.delete('/users/:id', (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            let { email: formemail, password: formpassword } = req.body;
            if (formemail != user.email || formpassword != user.password) {
                res.send("Password or email is incorrect");
            }
            else {
                let q = `DELETE FROM user WHERE id='${id}'`;
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    res.redirect('/users');
                });
            }
        });
    } catch (err) {
        console.error(err);
        res.send('Something went wrong');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
// let createRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password()
//     ]
// };
// let users = [];
// for (let i = 0; i < 100; i++) {
//     users.push(createRandomUser());
// }
// let q = 'INSERT INTO user (id, username, email, password) VALUES ?';




