const express = require("express");
const db = require("../configure/database");

const getstoreqrlist = express.Router();

getstoreqrlist.get("/", (req, res) => {
    const getdata = "select * from store where storeid != '0' and password != '0' order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = getstoreqrlist;