const express = require("express");
const db = require("../configure/database");

const discountcalculate = express.Router();

discountcalculate.post("/", (req, res) => {
    const userid = req.body.userid;
    const storeid = req.body.storeid;
    const userpurchase = req.body.userpurchase;
    const discountamount = req.body.discountamount;
    const insertdata = "insert into purchasehistory (purchaseamount, discountamount, userid, storeid, date) values (?,?,?,?, curdate())";
    db.query(insertdata, [userpurchase, discountamount, userid, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = discountcalculate;