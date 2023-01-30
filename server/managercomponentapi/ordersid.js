const express = require("express");
const db = require("../configure/database");

const ordersid = express.Router();

ordersid.post("/", (req, res) => {
    const userid = req.body.userid;
    const managerid = req.body.managerid;

    const getdata = "select * from orders where userid = ? and managerid = ? and date = curdate()";
    db.query(getdata, [userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = ordersid;