const express = require("express");
const db = require("../configure/database");

const getpromotionbalance = express.Router();

getpromotionbalance.post("/", (req, res) => {
    const marketerid = req.body.marketerid;

    const insertdata = "select sum(orderamount) as totalpromotionbalance from promotionandsalescalculate where type = 'promotion' and userid = ?";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getpromotionbalance;