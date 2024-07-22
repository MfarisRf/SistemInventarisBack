import mysql from 'mysql';

const db = mysql.createConnection({
    host: "sql110.infinityfree.com",
    user: "if0_36953085",
    password: "iQ1VB6pAYUmqi",
    database: "if0_36953085_db_inventory"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Keluar dari aplikasi jika tidak dapat terhubung
    }
    console.log('Connected to the database.');
});

export default db;
