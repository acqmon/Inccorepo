const express = require("express");
const db = require("../configure/database");

const migratecarttoorderitems = express.Router();

migratecarttoorderitems.post("/", (req, res) => {
    const managerid = req.body.managerid;

    const getdata = "insert into orderitems (productname,description,unit,rate,orderquantity,totalamount,managerid) select productname,description,unit,rate,orderquantity,totalamount,managerid from cart where userid = '0' and managerid = ?";
    db.query(getdata, managerid, (error, result) => {
        res.send(result);
    });
});

module.exports = migratecarttoorderitems;