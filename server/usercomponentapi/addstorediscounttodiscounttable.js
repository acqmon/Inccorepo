const express = require("express");
const db = require("../configure/database");

const addstorediscounttodiscounttable = express.Router();

addstorediscounttodiscounttable.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const discountamount = req.body.discountamount;
    const insertdata = "update purchasediscountstore set storediscount = storediscount + ? where storeid = ?";
    db.query(insertdata, [discountamount, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = addstorediscounttodiscounttable;