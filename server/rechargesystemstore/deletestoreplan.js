const express = require("express");
const db = require("../configure/database");

const deletestoreplan = express.Router();

deletestoreplan.delete("/:id", (req, res) => {
    const id = req.params.id;

    const deleteplan = "delete from storetopup where id = ?";
    db.query(deleteplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = deletestoreplan;