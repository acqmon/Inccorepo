const express = require("express");
const db = require("../configure/database");

const getstoreaddbill = express.Router();

getstoreaddbill.post("/", (req, res) => {
    const storeid = req.body.storeid
    const insertdata = "select * from store where storeid = ?";
    db.query(insertdata, [storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = getstoreaddbill;