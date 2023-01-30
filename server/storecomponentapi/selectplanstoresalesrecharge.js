const express = require("express");
const db = require("../configure/database");

const selectstoresalesrecharge = express.Router();

selectstoresalesrecharge.get("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from storesalestopup where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectstoresalesrecharge;