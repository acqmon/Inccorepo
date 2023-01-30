const express = require("express");
const db = require("../configure/database");

const buttonstoresalesrecharge = express.Router();

buttonstoresalesrecharge.put("/", (req, res) => {

    const salebalance = req.body.salebalance;
    const storeid = req.body.storeid;

    const getdata = "update store set salebalance = salebalance + ? where storeid = ?";
    db.query(getdata, [salebalance, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = buttonstoresalesrecharge;