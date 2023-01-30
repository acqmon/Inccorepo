const express = require("express");
const db = require("../configure/database");

const discountcalculateone = express.Router();

discountcalculateone.post("/", (req, res) => {
    const userid = req.body.userid;
    const storeid = req.body.storeid;
    const userpurchase = req.body.userpurchase;
    const totaldiscount = req.body.totaldiscount;
    const insertdata = "insert into purchasehistory (purchaseamount, discountamount, userid, storeid, date) values (?,?,?,?, curdate())";
    db.query(insertdata, [userpurchase, totaldiscount, userid, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = discountcalculateone;