const express = require("express");
const db = require("../configure/database");

const getsupplydetails = express.Router();

getsupplydetails.get("/", (req, res) => {

    const getdata = "select * from supplyhistory order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = getsupplydetails;