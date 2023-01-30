const express = require("express");
const db = require("../configure/database");

const admintotalmarketers = express.Router();

admintotalmarketers.get("/", (req, res) => {

    const getdata = "select * from marketer order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalmarketers;