const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const http = require("http");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static("./uploads"));

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "user",
  password: "password",
  database: "mydb",
});

app.post("/insert", upload.single("image"), (req, res) => {
  const { title } = req.body;
  const { filename } = req.file;
  connection.execute(
    "insert into product (title, image) values (?, ?)",
    [title, filename],
    (err, results) => {
      if (err) console.log(err);

      res.send("product inserted");
    }
  );
});

app.get("/list", (req, res) => {
  connection.query("select id, title, image from product", (err, results) => {
    if (err) {
      console.log(err);
    }

    results.forEach(
      (el) => (el.image = `http://localhost:3000/images/${el.image}`)
    );

    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.send("All is right");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

const server = http.createServer(app);

server.listen(3000, () => console.log("Server is running on port 3000"));
