const express = require("express");
const db = require("../configure/database");

const admintotalusers = express.Router();

admintotalusers.get("/", (req, res) => {

    const getdata = "select * from user order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalusers;