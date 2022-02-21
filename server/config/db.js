import "dotenv/config";
import mysql from "mysql2";

//Mysql details

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

//DB Connect

const database = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    }
    console.log(`Connected as ID ${connection.threadId}...`);
  });
};

export default database;
