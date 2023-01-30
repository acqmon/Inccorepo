const express = require("express");
const db = require("../configure/database");

const getsellingbalancemarketer = express.Router();

getsellingbalancemarketer.post("/", (req, res) => {
    const marketerid = req.body.marketerid;

    const insertdata = "select sum(sellingbalance) as totalsellingbalance from calculatediscount where useridentity = ?";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getsellingbalancemarketer;