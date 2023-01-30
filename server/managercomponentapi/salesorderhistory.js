const express = require("express");
const db = require("../configure/database");

const salesorderhistory = express.Router();

salesorderhistory.post("/", (req, res) => {
    const userid = req.body.userid;
    const managerid = req.body.managerid;
    const orderperphase = req.body.orderperphase;
    const getdata = "insert into promotionandsalesorderhistory (type, orderamount, userid, managerid,date) values ('salespromotion', ?,?,?, curdate())";
    db.query(getdata, [orderperphase, userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = salesorderhistory;