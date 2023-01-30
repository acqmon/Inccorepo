const express = require("express");
const db = require("../configure/database");

const discountcalculateonemarketer = express.Router();

discountcalculateonemarketer.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const marketerid = req.body.marketerid;
    const storesales = req.body.storesales;
    const totaldiscount = req.body.totaldiscount;
    const insertdata = "insert into purchasehistory (purchaseamount, discountamount, userid, storeid, date) values (?,?,?,?, curdate())";
    db.query(insertdata, [storesales, totaldiscount, storeid, marketerid], (error, result) => {
        res.send(result);
    });
});

module.exports = discountcalculateonemarketer;