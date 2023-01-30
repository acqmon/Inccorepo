const express = require("express");
const db = require("../configure/database");

const admintotalstorecashreceivable = express.Router();

admintotalstorecashreceivable.get("/", (req, res) => {

    const getdata = "select sum(totalrechargeamount) as sumrechargeamount from purchasediscountstore";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalstorecashreceivable;