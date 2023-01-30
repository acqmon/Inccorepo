const express = require("express");
const db = require("../configure/database");

const storesalesplan = express.Router();

storesalesplan.get("/", (req, res) => {
    const getdata = "select * from storesalestopup";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = storesalesplan;