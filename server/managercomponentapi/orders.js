const express = require("express");
const db = require("../configure/database");

const orders = express.Router();

orders.post("/", (req, res) => {
    const userid = req.body.userid;
    const managerid = req.body.managerid;

    const getdata = "insert into orders (userid, managerid, date) values (?,?, curdate())";
    db.query(getdata, [userid, managerid], (error, result) => {
        res.send(result);
    });
});


orders.put("/", (req, res) => {
    const userid = req.body.userid;
    const orderid = req.body.orderid;
    const managerid = req.body.managerid;

    const getdata = "update orderitems set userid = ?, orderid = ? where managerid = ? and userid = '0' and orderid = '0'";
    db.query(getdata, [userid, orderid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = orders;