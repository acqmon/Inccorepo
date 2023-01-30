const express = require("express");
const db = require("../configure/database");

const addsalespromotiontocalculate = express.Router();

addsalespromotiontocalculate.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const phase = req.body.phase;
    const orderperphase = req.body.orderperphase;
    const cut = req.body.cut;
    const userid = req.body.userid;
    const managerid = req.body.managerid;

    const getdata = "insert into promotionandsalescalculate (type, rechargeamount, orderamount,phase, orderperphase, cut, userid, managerid,date) values ('salespromotion',?,?,?,?,?,?,?,curdate())";
    db.query(getdata, [rechargeamount, orderamount, phase, orderperphase, cut, userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = addsalespromotiontocalculate;