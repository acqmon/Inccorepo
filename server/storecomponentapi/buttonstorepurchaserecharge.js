const express = require("express");
const db = require("../configure/database");

const buttonstorepurchaserecharge = express.Router();

buttonstorepurchaserecharge.put("/", (req, res) => {

    const balance = req.body.balance;
    const storeid = req.body.storeid;

    const getdata = "update store set balance = balance + ? where storeid = ?";
    db.query(getdata, [balance, storeid], (error, result) => {
        res.send(result);
    });
});

module.exports = buttonstorepurchaserecharge;