const express = require("express");
const db = require("../configure/database");

const deletestoresalesplan = express.Router();

deletestoresalesplan.delete("/:id", (req, res) => {
    const id = req.params.id;

    const deleteplan = "delete from storesalestopup where id = ?";
    db.query(deleteplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = deletestoresalesplan;