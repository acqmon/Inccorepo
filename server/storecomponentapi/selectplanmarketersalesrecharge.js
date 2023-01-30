const express = require("express");
const db = require("../configure/database");

const selectmarketersalesrecharge = express.Router();

selectmarketersalesrecharge.get("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "select * from marketersalestopup where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectmarketersalesrecharge;