# CRUD Application with MySQL

This is a simple Node.js project demonstrating CRUD (Create, Read, Update, Delete) operations with a MySQL database. The application uses Express for routing and EJS for rendering views.

## Features
- Create, Read, Update, and Delete user records in the database.
- Faker.js is used to generate sample user data.
- MySQL is used for database management.

---

## Installation Guide

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
$ git clone https://github.com/siddhantsaxena45/CRUD_mysql.git
$ cd CRUD_mysql
```

### 2. Install Dependencies
Use npm to install the required dependencies:
```bash
$ npm install
```

### 3. Configure MySQL Database
Ensure you have MySQL installed and running. Then:
- Create a new database (e.g., `delta_app`).
- Update the `index.js` file with your MySQL credentials:
  - Host (default: `localhost`)
  - Port (default: `3306` or your configured port)
  - Username (e.g., `root`)
  - Password (your MySQL password)
  - Database name (e.g., `delta_app`)

### 4. Run the Schema Script
Login to MySQL and run the provided schema script to create the necessary tables:
```bash
$ mysql -u <username> -p -P <port>
Enter password: <your_password>
mysql> USE delta_app;
mysql> SOURCE schema.sql;
```

### 5. Start the Application
Run the application using:
```bash
$ node index.js
```

### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

---

## Notes
- Update `.env` or configuration files with your unique database credentials and ports.
- Ensure MySQL service is running before starting the application.

## Dependencies
- Node.js
- Express
- MySQL2
- Faker.js
- EJS

---

## License
This project is licensed under the MIT License.

Happy coding! 🚀
