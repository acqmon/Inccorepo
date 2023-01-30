const express = require("express");
const db = require("../configure/database");

const admintotalsalespromotion = express.Router();

admintotalsalespromotion.get("/", (req, res) => {

    const getdata = "select sum(orderamount) as sumsalespromotion from promotionandsalescalculate where type = 'salespromotion'";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalsalespromotion;