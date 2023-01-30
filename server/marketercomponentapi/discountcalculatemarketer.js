const express = require("express");
const db = require("../configure/database");

const discountcalculatemarketer = express.Router();

discountcalculatemarketer.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const marketerid = req.body.marketerid;
    const storesales = req.body.storesales;
    const discountamount = req.body.discountamount;
    const insertdata = "insert into purchasehistory (purchaseamount, discountamount, userid, storeid, date) values (?,?,?,?, curdate())";
    db.query(insertdata, [storesales, discountamount, storeid, marketerid], (error, result) => {
        res.send(result);
    });
});

module.exports = discountcalculatemarketer;