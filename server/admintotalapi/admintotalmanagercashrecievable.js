const express = require("express");
const db = require("../configure/database");

const admintotalmanagercashrecievable = express.Router();

admintotalmanagercashrecievable.get("/", (req, res) => {

    const getdata = "select sum(totalcash) as sumtotalcashmanager from cashcalculatemanager";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalmanagercashrecievable;