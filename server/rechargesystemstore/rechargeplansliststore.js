const express = require("express");
const db = require("../configure/database");

const storerechargelist = express.Router();

storerechargelist.get("/", (req, res) => {
    const getstorerechargeplanlist = "select * from storetopup";
    db.query(getstorerechargeplanlist, (error, result) => {
        res.send(result);
    });
});

module.exports = storerechargelist;