const express = require("express");
const db = require("../configure/database");

const addproduct = express.Router();

addproduct.post("/", (req, res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const unit = req.body.unit;
    const rate = req.body.rate;
    const quantity = req.body.quantity;

    const getdata = "insert into productlist (productname, description,unit, rate, quantity) values (?,?,?,?,?)";
    db.query(getdata, [productname, description, unit, rate, quantity], (error, result) => {
        res.send(result);
    });
});

addproduct.put("/", (req, res) => {
    const updatedata = "update productlist set uom = concat(description,' ',unit), rateperunit = concat(rate, ' / ', unit)";
    db.query(updatedata, (err, result) => {
        res.send(result);
    });
});

addproduct.get("/", (req, res) => {
    const getproduct = "select * from productlist";
    db.query(getproduct, (err, result) => {
        res.send(result);
    });
});

module.exports = addproduct;