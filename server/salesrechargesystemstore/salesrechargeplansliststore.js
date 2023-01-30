const express = require("express");
const db = require("../configure/database");

const storesalesrechargelist = express.Router();

storesalesrechargelist.get("/", (req, res) => {
    const getstorerechargeplanlist = "select * from storesalestopup";
    db.query(getstorerechargeplanlist, (error, result) => {
        res.send(result);
    });
});

module.exports = storesalesrechargelist;