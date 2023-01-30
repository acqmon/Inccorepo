const express = require("express");
const db = require("../configure/database");

const addstorepurchasetocalculate = express.Router();

addstorepurchasetocalculate.post("/", (req, res) => {

    const rechtype = req.body.rechtype;
    const rechamount = req.body.rechamount;
    const purchbalance = req.body.purchbalance;
    const useridentity = req.body.useridentity;
    const storeidentity = req.body.storeidentity;

    const getdata = "insert into calculatediscount (rechtype, rechamount, purchbalance, useridentity, storeidentity) values (?,?,?,?,?)";
    db.query(getdata, [rechtype, rechamount, purchbalance, useridentity, storeidentity], (error, result) => {
        res.send(result);
    });
});

module.exports = addstorepurchasetocalculate;