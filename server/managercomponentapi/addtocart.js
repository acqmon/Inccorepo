const express = require("express");
const db = require("../configure/database");

const addtocart = express.Router();

addtocart.post("/", (req, res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const unit = req.body.unit;
    const rate = req.body.rate;
    const orderquantity = req.body.orderquantity;
    const managerid = req.body.managerid;
    const date = req.body.date;
    const totalamount = req.body.totalamount;

    const getdata = "insert into cart (productname, description, unit, rate, orderquantity, managerid,date, totalamount) values (?,?,?,?,?,?,now(),orderquantity * rate)";
    db.query(getdata, [productname, description, unit, rate, orderquantity, managerid, date, totalamount], (error, result) => {
        res.send(result);
    });
});

module.exports = addtocart;