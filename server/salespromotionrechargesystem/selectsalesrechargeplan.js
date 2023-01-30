const express = require("express");
const db = require("../configure/database");

const selectsalesrechargeplan = express.Router();

selectsalesrechargeplan.get("/:id", (req, res) => {
    const id = req.params.id;

    const getplan = "select * from promotionandsales where id = ?";
    db.query(getplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectsalesrechargeplan;