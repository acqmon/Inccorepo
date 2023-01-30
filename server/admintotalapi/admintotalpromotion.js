const express = require("express");
const db = require("../configure/database");

const admintotalpromotion = express.Router();

admintotalpromotion.get("/", (req, res) => {

    const getdata = "select sum(orderamount) as sumpromotion from promotionandsalescalculate where type = 'promotion'";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalpromotion;