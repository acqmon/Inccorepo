const express = require("express");
const db = require("../configure/database");

const vieworder = express.Router();

vieworder.post("/:id", (req, res) => {
    const id = req.params.id;
    const managerid = req.body.managerid;

    const getdata = "select * from orderitems where managerid = ? and orderid= ?";
    db.query(getdata, [managerid, id], (error, result) => {
        res.send(result);
    });
});

module.exports = vieworder;