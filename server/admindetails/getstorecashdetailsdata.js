const express = require("express");
const db = require("../configure/database");

const getstorecashdetailsdata = express.Router();

getstorecashdetailsdata.get("/", (req, res) => {

    const getdata = "select * from purchasediscountstore";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = getstorecashdetailsdata;