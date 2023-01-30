const express = require("express");
const db = require("../configure/database");

const addmarketersalestocalculate = express.Router();

addmarketersalestocalculate.post("/", (req, res) => {

    const rechtype = req.body.rechtype;
    const rechamount = req.body.rechamount;
    const sellingbalance = req.body.sellingbalance;
    const disc = req.body.disc;
    const useridentity = req.body.useridentity;
    const storeidentity = req.body.storeidentity;

    const getdata = "insert into calculatediscount (rechtype, rechamount, sellingbalance, disc, useridentity, storeidentity) values (?,?,?,?,?,?)";
    db.query(getdata, [rechtype, rechamount, sellingbalance, disc, useridentity, storeidentity], (error, result) => {
        res.send(result);
    });
});

module.exports = addmarketersalestocalculate;