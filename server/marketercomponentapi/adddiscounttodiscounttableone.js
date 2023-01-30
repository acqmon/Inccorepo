const express = require("express");
const db = require("../configure/database");

const adddiscounttodiscounttableone = express.Router();

adddiscounttodiscounttableone.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const totaldiscount = req.body.totaldiscount;
    const insertdata = "update purchasediscountstore set sellerdiscount = sellerdiscount + ? where storeid = ?";
    db.query(insertdata, [totaldiscount, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = adddiscounttodiscounttableone;