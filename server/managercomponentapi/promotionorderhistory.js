const express = require("express");
const db = require("../configure/database");

const promotionorderhistory = express.Router();

promotionorderhistory.post("/", (req, res) => {
    const userid = req.body.userid;
    const managerid = req.body.managerid;
    const orderamount = req.body.orderamount;
    const getdata = "insert into promotionandsalesorderhistory (type, orderamount, userid, managerid, date) values ('promotion', ?,?,?, curdate())";
    db.query(getdata, [orderamount, userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = promotionorderhistory;