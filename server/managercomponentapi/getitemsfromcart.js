const express = require("express");
const db = require("../configure/database");

const getitemsfromcart = express.Router();

getitemsfromcart.post("/", (req, res) => {
    const managerid = req.body.managerid;
    const getdata = "select * from cart where managerid = ? and userid = '0'";
    db.query(getdata, managerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getitemsfromcart;