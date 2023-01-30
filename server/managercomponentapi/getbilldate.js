const express = require("express");
const db = require("../configure/database");

const getbilldate = express.Router();

getbilldate.post("/:id", (req, res) => {
    const id = req.params.id
    const insertdata = "select * from orders where id = ?";
    db.query(insertdata, [id], (error, result) => {
        res.send(result);
    });
});

module.exports = getbilldate;