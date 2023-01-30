const express = require("express");
const db = require("../configure/database");

const getmanagercashdata = express.Router();

getmanagercashdata.get("/", (req, res) => {

    const getdata = "select * from cashcalculatemanager";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});
getmanagercashdata.put("/", (req, res) => {
    const cash = req.body.cash
    const managerid = req.body.managerid
    const getdata = "update cashcalculatemanager set totalcash = totalcash - ? where managerid = ?";
    db.query(getdata,[cash, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = getmanagercashdata;