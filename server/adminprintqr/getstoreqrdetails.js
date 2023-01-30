const express = require("express");
const db = require("../configure/database");

const getstoreqrdetails = express.Router();

getstoreqrdetails.post("/:id", (req, res) => {
    const id = req.params.id
    const getdata = "select * from store where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = getstoreqrdetails;