const express = require("express");
const db = require("../configure/database");

const addpromotionandsalespromotioncashtocashcalculatemanager = express.Router();

addpromotionandsalespromotioncashtocashcalculatemanager.put("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount
    const managerid = req.body.managerid
    const getdata = "update cashcalculatemanager set totalcash = totalcash + ? where managerid = ?";
    db.query(getdata, [rechargeamount,managerid],(error, result) => {
        res.send(result);
    });
});


module.exports = addpromotionandsalespromotioncashtocashcalculatemanager;