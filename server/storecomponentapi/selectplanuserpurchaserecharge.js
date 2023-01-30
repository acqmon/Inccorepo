const express = require("express");
const db = require("../configure/database");

const selectuserpurchaserecharge = express.Router();

selectuserpurchaserecharge.get("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from usertopup where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectuserpurchaserecharge;