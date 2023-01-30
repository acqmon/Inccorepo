const express = require("express");
const db = require("../configure/database");

const addpromotionrechargesystem = express.Router();

addpromotionrechargesystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const cut = req.body.cut;

    const insertuserrechargeplan = "insert into promotionandsales (type,rechargeamount, orderamount, cut) values('promotion',?,?,?)";
    db.query(insertuserrechargeplan, [rechargeamount, orderamount, cut], (error, result) => {
        res.send(result);
    });
});

addpromotionrechargesystem.get("/", (req, res) => {
    const insertuserrechargeplan = "select * from promotionandsales where type = 'promotion'";
    db.query(insertuserrechargeplan, (error, result) => {
        res.send(result);
    });
});

module.exports = addpromotionrechargesystem;