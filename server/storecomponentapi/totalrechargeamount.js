const express = require("express");
const db = require("../configure/database");

const totalrechargeamount = express.Router();

totalrechargeamount.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const rechamount = req.body.rechamount;
    const getdata = "update purchasediscountstore set totalrechargeamount = totalrechargeamount + ? where storeid = ?";
    db.query(getdata, [rechamount, storeid], (error, result) => {
        res.send(result);
    });
});

totalrechargeamount.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select * from purchasediscountstore where storeid = ?";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = totalrechargeamount;