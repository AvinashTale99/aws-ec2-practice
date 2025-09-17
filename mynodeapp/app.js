const http = require("http");
const mysql = require("mysql2");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // replace with your MySQL user
  password: "yourpassword", // replace with your MySQL password
  database: "testdb"  // replace with your DB name
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database ✅");
});

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js running on AWS EC2 🚀");
  } else if (req.url === "/users") {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Database query failed");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://0.0.0.0:3000/");
});
