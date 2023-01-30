const express = require("express");
const db = require("../configure/database");

const selecttocart = express.Router();

selecttocart.post("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from productlist where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

selecttocart.put("/:id", (req, res) => {
    const id = req.params.id;
    const orderquantity = req.body.orderquantity
    const getdata = "update productlist set quantity = quantity - ? where id = ?";
    db.query(getdata, [orderquantity,id], (error, result) => {
        res.send(result);
    });
});

module.exports = selecttocart;