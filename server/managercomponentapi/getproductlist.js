const express = require("express");
const db = require("../configure/database");

const getproductlist = express.Router();

getproductlist.get("/", (req, res) => {
    const getdata = "select * from productlist where quantity > 0";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = getproductlist;