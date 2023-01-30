const express = require("express");
const db = require("../configure/database");

const admintotalstorecashpayable = express.Router();

admintotalstorecashpayable.get("/", (req, res) => {

    const getdata = "select sum(storediscount+sellerdiscount) as sumpayable from purchasediscountstore";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalstorecashpayable;