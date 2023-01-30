const express = require("express");
const db = require("../configure/database");

const getsellingbalancestore = express.Router();

getsellingbalancestore.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select sum(sellingbalance) as totalsellingbalancestore from calculatediscount where rechtype = 'salesbalance' and sellingbalance > 0 and useridentity = ?";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getsellingbalancestore;