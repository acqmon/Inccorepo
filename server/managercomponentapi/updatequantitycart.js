const express = require("express");
const db = require("../configure/database");

const updatequantitycart = express.Router();

updatequantitycart.put("/:id", (req, res) => {
    const managerid = req.body.managerid;
    const id = req.params.id;
    const orderquantity = req.body.orderquantity;
    const getdata = "update cart set orderquantity = ? , totalamount = rate * orderquantity where managerid = ? and userid = '0' and id = ?";
    db.query(getdata, [orderquantity, managerid, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updatequantitycart;