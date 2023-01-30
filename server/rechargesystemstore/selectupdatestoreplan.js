const express = require("express");
const db = require("../configure/database");

const selectupdatestoreplan = express.Router();

selectupdatestoreplan.get("/:id", (req, res) => {
    const id = req.params.id;

    const getplan = "select * from storetopup where id = ?";
    db.query(getplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectupdatestoreplan;