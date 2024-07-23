import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'sql110.infinityfree.com',
  user: 'satorira_faris2002',
  password: 'password_anda',
  database: 'nama_database_anda'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  } 
  console.log('Connected to the database.');
  connection.end();
});
