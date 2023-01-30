const express = require("express");
const db = require("../configure/database");

const selectsalespromotionplanmanager = express.Router();

selectsalespromotionplanmanager.get("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from promotionandsales where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectsalespromotionplanmanager;