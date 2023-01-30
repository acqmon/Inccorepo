const express = require("express");
const db = require("../configure/database");

const addmarketersalesrechargehistory = express.Router();

addmarketersalesrechargehistory.post("/", (req, res) => {

    const rechtype = req.body.rechtype;
    const rechamount = req.body.rechamount;
    const sellingbalance = req.body.sellingbalance;
    const disc = req.body.disc;
    const useridentity = req.body.useridentity;
    const storeidentity = req.body.storeidentity;

    const getdata = "insert into history (rechtype, rechamount, sellingbalance, disc, useridentity, storeidentity,date) values (?,?,?,?,?,?,curdate())";
    db.query(getdata, [rechtype, rechamount, sellingbalance, disc, useridentity, storeidentity], (error, result) => {
        res.send(result);
    });
});

module.exports = addmarketersalesrechargehistory;