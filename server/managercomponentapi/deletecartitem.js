const express = require("express");
const db = require("../configure/database");

const deletecartitem = express.Router();

deletecartitem.delete("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "delete from cart where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});
deletecartitem.post("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from cart where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

deletecartitem.put("/", (req, res) => {
    const updateqty = req.body.updateqty
    const updateproductname = req.body.updateproductname
    const updatedescription = req.body.updatedescription
    const updateunit = req.body.updateunit
    const updaterate = req.body.updaterate
    const getdata = "update productlist set quantity = quantity + ? where productname = ? and description = ? and unit = ? and rate = ? ";
    db.query(getdata, [updateqty, updateproductname, updatedescription, updateunit, updaterate], (error, result) => {
        res.send(result);
    });
});

module.exports = deletecartitem;