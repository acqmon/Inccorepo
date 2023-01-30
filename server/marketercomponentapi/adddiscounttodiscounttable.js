const express = require("express");
const db = require("../configure/database");

const adddiscounttodiscounttable = express.Router();

adddiscounttodiscounttable.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const discountamount = req.body.discountamount;
    const insertdata = "update purchasediscountstore set sellerdiscount = sellerdiscount + ? where storeid = ?";
    db.query(insertdata, [discountamount, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = adddiscounttodiscounttable;