const express = require("express");
const db = require("../configure/database");

const editquantitycart = express.Router();

editquantitycart.post("/:id", (req, res) => {
    const managerid = req.body.managerid;
    const id = req.params.id;
    const getdata = "select * from cart where managerid = ? and userid = '0' and id = ?";
    db.query(getdata, [managerid, id], (error, result) => {
        res.send(result);
    });
});

editquantitycart.put("/", (req, res) => {
    const leftoverqty = req.body.leftoverqty
    const productname = req.body.productname
    const description = req.body.description
    const unit = req.body.unit
    const rate = req.body.rate
    const getdata = "update productlist set quantity = quantity + ? where productname = ? and description = ? and unit = ? and rate = ?";
    db.query(getdata, [leftoverqty,productname,description,unit,rate], (error, result) => {
        res.send(result);
    });
});



module.exports = editquantitycart;