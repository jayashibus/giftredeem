const express = require("express");
const mysql = require("mysql");
const SupplyAllyServerRouter = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "giftredeem",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
});

SupplyAllyServerRouter.get("/api/getStaffDetails", (req, res) => {
  let sql = "SELECT * from staff_details";

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    res.send(Object.values(JSON.parse(JSON.stringify(result))));
  });
})
  .post("/api/addRedemption", (req, res) => {
    let post = { ...req.body };
    let sql = "INSERT INTO redemption SET ?";
    db.query(sql, post, (err) => {
      if (err) {
        throw err;
      }
    });
    res.send(req.body);
  })
  .get("/api/getRedemption", (req, res) => {
    let sql = "SELECT * from redemption";

    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }

      res.send(Object.values(JSON.parse(JSON.stringify(result))));
    });
  });

module.exports = SupplyAllyServerRouter;
