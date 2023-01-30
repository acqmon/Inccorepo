const express = require("express");
const db = require("../configure/database");

const insertstoreidinpurchasediscountstore = express.Router();

insertstoreidinpurchasediscountstore.post("/", (req, res) => {
    const storeid = req.body.storeid;

    const getdata = "insert into purchasediscountstore (storeid) values (?)";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = insertstoreidinpurchasediscountstore;