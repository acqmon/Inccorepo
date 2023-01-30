const express = require("express");
const db = require("../configure/database");

const marketerid = express.Router();

marketerid.put("/", (req, res) => {

    const updatestore = "update marketer set marketerid = concat(id,customid,firstname)";
    db.query(updatestore, (error, result) => {
        res.send(result);
    });
});

module.exports = marketerid;