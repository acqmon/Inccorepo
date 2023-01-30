const express = require("express");
const db = require("../configure/database");

const admintotalstores = express.Router();

admintotalstores.get("/", (req, res) => {

    const getdata = "select * from store order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = admintotalstores;