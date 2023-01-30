const express = require("express");
const db = require("../configure/database");

const getcashbalance = express.Router();

getcashbalance.post("/", (req, res) => {
    const storeid = req.body.storeid
    const getdata = "select * from purchasediscountstore where storeid = ?";
    db.query(getdata, storeid,(error, result) => {
        res.send(result);
    });
});

getcashbalance.put("/", (req, res) => {
    const cash = req.body.cash
    const storeid = req.body.storeid
    const getdata = "update purchasediscountstore set totalrechargeamount = totalrechargeamount - ? where storeid = ?";
    db.query(getdata, [cash, storeid],(error, result) => {
        res.send(result);
    });
});



module.exports = getcashbalance;