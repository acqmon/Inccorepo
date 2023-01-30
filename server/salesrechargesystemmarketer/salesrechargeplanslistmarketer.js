const express = require("express");
const db = require("../configure/database");

const marketersalesrechargelist = express.Router();

marketersalesrechargelist.get("/", (req, res) => {
    const getmarketerrechargeplanlist = "select * from marketersalestopup";
    db.query(getmarketerrechargeplanlist, (error, result) => {
        res.send(result);
    });
});

module.exports = marketersalesrechargelist;