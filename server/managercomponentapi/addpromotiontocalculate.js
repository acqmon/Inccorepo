const express = require("express");
const db = require("../configure/database");

const addpromotiontocalculate = express.Router();

addpromotiontocalculate.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const cut = req.body.cut;
    const userid = req.body.userid;
    const managerid = req.body.managerid;

    const getdata = "insert into promotionandsalescalculate (type, rechargeamount, orderamount, cut, userid, managerid, date) values ('promotion',?,?,?,?,?,curdate())";
    db.query(getdata, [rechargeamount, orderamount, cut, userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = addpromotiontocalculate;