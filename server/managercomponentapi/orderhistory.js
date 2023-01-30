const express = require("express");
const db = require("../configure/database");

const orderhistory = express.Router();

orderhistory.post("/", (req, res) => {
    const managerid = req.body.managerid;

    const getdata = "select * from orders where managerid = ? order by id desc";
    db.query(getdata, managerid, (error, result) => {
        res.send(result);
    });
});

module.exports = orderhistory;