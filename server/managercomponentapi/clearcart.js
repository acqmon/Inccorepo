const express = require("express");
const db = require("../configure/database");

const clearcart = express.Router();

clearcart.post("/", (req, res) => {                                     //delete method not working in frontend
    const managerid = req.body.managerid;
    const getdata = "delete from cart where userid = '0' and managerid = ?";
    db.query(getdata, managerid, (error, result) => {
        res.send(result);
    });
});

module.exports = clearcart;