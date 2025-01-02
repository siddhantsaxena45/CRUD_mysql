# CRUD Application with MySQL

## Overview
This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MySQL. It provides basic operations to manage user data, including creating, viewing, updating, and deleting user records.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) (v8.0 or higher recommended)
- [Git](https://git-scm.com/)

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/siddhantsaxena45/CRUD_mysql.git
   cd CRUD_mysql
   ```

2. **Install Dependencies**
   Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```

3. **Set Up the MySQL Database**
   - Start your MySQL server.
   - Open the MySQL CLI:
     ```bash
     mysql -u root -p -P 3307
     ```
   - Execute the following commands to configure the database:
     ```sql
     ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'test123';
     FLUSH PRIVILEGES;
     ```
   - Create the `delta_app` database and the required `user` table:
     ```bash
     source schema.sql
     ```

4. **Run the Application**
   Start the Node.js server:
   ```bash
   node index.js
   ```

5. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Features
- View a dashboard displaying the total count of users.
- Add new users.
- View, update, and delete user records.

## License
This project is licensed under the MIT License.

