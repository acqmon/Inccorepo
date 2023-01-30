const express = require("express");
const db = require("../configure/database");

const camparesupply = express.Router();

camparesupply.post("/", (req, res) => {
    const billamount = req.body.billamount;
    const getdata = "select * from supplydiscount where billamount <= ? and billamountone >= ?";
    db.query(getdata, [billamount, billamount], (error, result) => {
        res.send(result);
    });
});

module.exports = camparesupply;