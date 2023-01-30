const express = require("express");
const db = require("../configure/database");

const storepurchaseplan = express.Router();

storepurchaseplan.get("/", (req, res) => {
    const getdata = "select * from storetopup";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = storepurchaseplan;