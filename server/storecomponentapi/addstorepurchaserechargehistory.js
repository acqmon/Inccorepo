const express = require("express");
const db = require("../configure/database");

const addstorepurchaserechargehistory = express.Router();

addstorepurchaserechargehistory.post("/", (req, res) => {

    const rechtype = req.body.rechtype;
    const rechamount = req.body.rechamount;
    const purchbalance = req.body.purchbalance;
    const useridentity = req.body.useridentity;
    const storeidentity = req.body.storeidentity;

    const getdata = "insert into history (rechtype, rechamount, purchbalance, useridentity, storeidentity,date) values (?,?,?,?,?, curdate())";
    db.query(getdata, [rechtype, rechamount, purchbalance, useridentity, storeidentity], (error, result) => {
        res.send(result);
    });
});

module.exports = addstorepurchaserechargehistory;