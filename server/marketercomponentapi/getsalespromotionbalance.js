const express = require("express");
const db = require("../configure/database");

const getsalespromotionbalance = express.Router();

getsalespromotionbalance.post("/", (req, res) => {
    const marketerid = req.body.marketerid;

    const insertdata = "select sum(orderamount) as totalsalespromotionbalance from promotionandsalescalculate where type = 'salespromotion' and userid = ?";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getsalespromotionbalance;