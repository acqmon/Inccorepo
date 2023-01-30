const express = require("express");
const db = require("../configure/database");

const updateproduct = express.Router();

updateproduct.put("/:id", (req, res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const unit = req.body.unit;
    const rate = req.body.rate;
    const quantity = req.body.quantity;
    const id = req.params.id;

    const getdata = "update productlist set productname = ?, description = ?,unit = ?, rate =?, quantity = ?, uom = concat(description, ' ', unit ), rateperunit = concat(rate, ' / ' ,unit) where id = ?";
    db.query(getdata, [productname, description, unit, rate, quantity, id], (error, result) => {
        res.send(result);
    });
});

updateproduct.get("/:id", (req, res) => {
    const id = req.params.id;
    const getproduct = "select * from productlist where id = ?";
    db.query(getproduct, id, (err, result) => {
        res.send(result);
    });
});
updateproduct.delete("/:id", (req, res) => {
    const id = req.params.id;
    const getproduct = "delete from productlist where id = ?";
    db.query(getproduct, id, (err, result) => {
        res.send(result);
    });
});



module.exports = updateproduct;