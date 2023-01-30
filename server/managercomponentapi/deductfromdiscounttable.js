const express = require("express");
const db = require("../configure/database");

const deductfromdiscounttable = express.Router();

deductfromdiscounttable.put("/", (req, res) => {
    const storeid = req.body.storeid;
    const halfofdiscountamount = req.body.halfofdiscountamount;
    const getdata = "update purchasediscountstore set storediscount = storediscount - ?, sellerdiscount = sellerdiscount - ? where storeid = ?";
    db.query(getdata, [halfofdiscountamount, halfofdiscountamount, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = deductfromdiscounttable;