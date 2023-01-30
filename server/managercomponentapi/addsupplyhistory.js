const express = require("express");
const db = require("../configure/database");

const addsupplyhistory = express.Router();

addsupplyhistory.post("/", (req, res) => {
    const billamount = req.body.billamount;
    const halfamount = req.body.halfamount;
    const discountrate = req.body.discountrate;
    const discountamount = req.body.discountamount;
    const storeid = req.body.storeid;
    const managerid = req.body.managerid;

    const getdata = "insert into supplyhistory (billamount, halfamount, discountrate, discountamount, userid, managerid, date) values (?,?,?,?,?,?,curdate())";
    db.query(getdata, [billamount, halfamount, discountrate, discountamount, storeid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = addsupplyhistory;