const express = require("express");
const db = require("../configure/database");

const selectstorepurchaserecharge = express.Router();

selectstorepurchaserecharge.get("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from storetopup where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectstorepurchaserecharge;