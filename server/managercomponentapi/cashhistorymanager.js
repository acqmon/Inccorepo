const express = require("express");
const db = require("../configure/database");

const cashhistorymanager = express.Router();

cashhistorymanager.post("/", (req, res) => {
    const cash = req.body.cash
    const storeid = req.body.storeid
    const managerid = req.body.managerid
    const getdata = "insert into cashhistorymanager (cashrecieved, storeid, managerid, date) values (?,?,?,curdate())";
    db.query(getdata, [cash,storeid,managerid],(error, result) => {
        res.send(result);
    });
});

cashhistorymanager.put("/", (req, res) => {
    const cash = req.body.cash
    const managerid = req.body.managerid
    const getdata = "update cashcalculatemanager set totalcash = totalcash + ? where managerid = ?";
    db.query(getdata, [cash,managerid],(error, result) => {
        res.send(result);
    });
});


module.exports = cashhistorymanager;