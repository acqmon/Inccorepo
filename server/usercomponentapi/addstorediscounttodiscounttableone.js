const express = require("express");
const db = require("../configure/database");

const addstorediscounttodiscounttableone = express.Router();

addstorediscounttodiscounttableone.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const totaldiscount = req.body.totaldiscount;
    const insertdata = "update purchasediscountstore set storediscount = storediscount + ? where storeid = ?";
    db.query(insertdata, [totaldiscount, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = addstorediscounttodiscounttableone;