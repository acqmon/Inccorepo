const express = require("express");
const db = require("../configure/database");

const buttonuserpurchaserecharge = express.Router();

buttonuserpurchaserecharge.put("/", (req, res) => {

    const balance = req.body.balance;
    const userid = req.body.userid;

    const getdata = "update user set balance = balance + ? where userid = ?";
    db.query(getdata, [balance, userid], (error, result) => {
        res.send(result);
    });
});

module.exports = buttonuserpurchaserecharge;