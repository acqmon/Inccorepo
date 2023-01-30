const express = require("express");
const db = require("../configure/database");

const selectupdatestoresalesplan = express.Router();

selectupdatestoresalesplan.get("/:id", (req, res) => {
    const id = req.params.id;

    const getplan = "select * from storesalestopup where id = ?";
    db.query(getplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectupdatestoresalesplan;