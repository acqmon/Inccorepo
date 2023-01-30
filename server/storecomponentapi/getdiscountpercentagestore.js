const express = require("express");
const db = require("../configure/database");

const getdiscountpercentagestore = express.Router();

getdiscountpercentagestore.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select * from calculatediscount where rechtype = 'salesbalance' and sellingbalance > 0 and useridentity = ? limit 1";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getdiscountpercentagestore;