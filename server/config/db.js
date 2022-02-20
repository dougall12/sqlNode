import mysql from "mysql2";

//Mysql details

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "sqlToolsUser",
  password: "password",
  database: "eufcApp",
  port: "3306",
});

//DB Connect

const database = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("mySQL Connected...");
  });
};

export default database;
