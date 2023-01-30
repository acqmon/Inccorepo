const express = require("express");
const db = require("../configure/database");

const addsalesrechargesystem = express.Router();

addsalesrechargesystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const phase = req.body.phase;
    const cut = req.body.cut;

    const insertuserrechargeplan = "insert into promotionandsales (type,rechargeamount, orderamount, phase,orderperphase, cut) values('salespromotion',?,?,?, orderamount/phase ,?)";
    db.query(insertuserrechargeplan, [rechargeamount, orderamount, phase, cut], (error, result) => {
        res.send(result);
    });
});

addsalesrechargesystem.get("/", (req, res) => {
    const insertuserrechargeplan = "select * from promotionandsales where type = 'salespromotion'";
    db.query(insertuserrechargeplan, (error, result) => {
        res.send(result);
    });
});

module.exports = addsalesrechargesystem;