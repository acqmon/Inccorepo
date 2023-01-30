const express = require("express");
const db = require("../configure/database");

const marketersalesplan = express.Router();

marketersalesplan.get("/", (req, res) => {
    const getdata = "select * from marketersalestopup";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = marketersalesplan;