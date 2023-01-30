const express = require("express");
const db = require("../configure/database");

const getstoreidbill = express.Router();

getstoreidbill.post("/:id", (req, res) => {
    const id = req.params.id
    const insertdata = "select * from orderitems where orderid = ?";
    db.query(insertdata, [id], (error, result) => {
        res.send(result);
    });
});

module.exports = getstoreidbill;