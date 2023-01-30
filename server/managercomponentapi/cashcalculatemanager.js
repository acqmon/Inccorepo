const express = require("express");
const db = require("../configure/database");

const cashcalculatemanager = express.Router();

cashcalculatemanager.post("/", (req, res) => {
    const adminid = req.body.adminid
    const getdata = "insert into cashcalculatemanager (managerid) values (?)";
    db.query(getdata, adminid,(error, result) => {
        res.send(result);
    });
});


module.exports = cashcalculatemanager;