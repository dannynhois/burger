var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "burgers_db",
  user: "root"
});

connection.connect(err => {
  if (err) {
    return console.log(err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

module.exports = connection;
