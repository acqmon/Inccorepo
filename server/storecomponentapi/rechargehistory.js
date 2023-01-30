const express = require("express");
const db = require("../configure/database");

const rechargehistory = express.Router();

rechargehistory.post("/", (req, res) => {
    const storeid = req.body.storeid
    const getdata = "select * from history where storeidentity = ? order by id desc";
    db.query(getdata, storeid,(error, result) => {
        res.send(result);
    });
});

module.exports = rechargehistory;