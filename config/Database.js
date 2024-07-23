import mysql from 'mysql';

const db = mysql.createConnection({
    host: "sql110.infinityfree.com",
    user: "if0_36953085",
    password: "mfaris2002",
    database: "if0_36953085_db_inventory"
});


export default db;
