import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"bobywgs123",
    database:"in_blog"
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });