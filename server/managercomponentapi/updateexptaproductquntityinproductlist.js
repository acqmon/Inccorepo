const express = require("express");
const db = require("../configure/database");

const updateexptaproductquntityinproductlist = express.Router();


updateexptaproductquntityinproductlist.put("/", (req, res) => {
    const extraqty = req.body.extraqty;
    const productname = req.body.productname;
    const description = req.body.description;
    const unit = req.body.unit;
    const rate = req.body.rate;
    const getdata = "update productlist set quantity = quantity - ? where productname = ? and description = ? and unit = ? and rate = ? and quantity >= ?";
    db.query(getdata, [extraqty, productname, description, unit, rate, extraqty], (error, result) => {
            if(result.affectedRows === 0){
                res.send({messege: "reduce quantity"})
            }else{
                res.send(result);   
            }
    });
});



module.exports = updateexptaproductquntityinproductlist;