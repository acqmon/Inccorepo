const express = require("express");
const db = require("../configure/database");

const buttonmarketersalesrecharge = express.Router();

buttonmarketersalesrecharge.put("/", (req, res) => {

    const salebalance = req.body.salebalance;
    const marketerid = req.body.marketerid;

    const getdata = "update marketer set salebalance = salebalance + ? where marketerid = ?";
    db.query(getdata, [salebalance, marketerid], (error, result) => {
        res.send(result);
    });
});

module.exports = buttonmarketersalesrecharge;