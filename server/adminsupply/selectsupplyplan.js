const express = require("express");
const db = require("../configure/database");

const selectsupplyplan = express.Router();

selectsupplyplan.post("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from supplydiscount where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectsupplyplan;