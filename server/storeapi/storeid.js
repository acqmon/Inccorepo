const express = require("express");
const db = require("../configure/database");

const storeid = express.Router();

storeid.put("/", (req, res) => {

    const updatestore = "update store set storeid = concat(id,customid,firstname)";
    db.query(updatestore, (error, result) => {
        res.send(result);
    });
});

module.exports = storeid;