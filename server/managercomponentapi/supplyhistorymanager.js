const express = require("express");
const db = require("../configure/database");

const supplyhistorymanager = express.Router();

supplyhistorymanager.post("/", (req, res) => {
    const managerid = req.body.managerid;
    const getdata = "select * from supplyhistory where managerid = ? order by id desc";
    db.query(getdata, managerid, (error, result) => {
        res.send(result);
    });
});

module.exports = supplyhistorymanager;